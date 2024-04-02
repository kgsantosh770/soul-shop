import express from "express";
import Cart, { CartItem } from "./CartSchema.js";
import Product from '../product/ProductSchema.js';
import jwt from "jsonwebtoken";
import AuthMiddleware from "../user/AuthMiddleware.js";
import User from "../user/UserSchema.js";

const CartRouter = express.Router();
const defaultErrorMessage = "Sorry! Something went wrong. Please try again or later.";

const getUser = async (req) => {
    const token = req.header('Authorization');
    const { email } = jwt.decode(token);
    const user = await User.findOne({ email });
    return user;
}

const getTotal = (price, quantity) =>
    (Number(price) * Number(quantity)).toFixed(2);

const createCartItem = async (productId, quantity) => {
    const product = await Product.findOne({ id: productId });
    const cartItem = new CartItem({
        product: product,
        quantity: quantity,
        price: product.price,
        total: getTotal(product.price, quantity),
    })
    return cartItem;
}

CartRouter.get('/getall', AuthMiddleware, async (req, res) => {
    try {
        const user = await getUser(req);
        const userCart = await Cart.findOne({ user: user.id });
        if (!userCart) return res.status(404).json({ message: "Your cart is empty !" })
        res.status(200).json({ userCart })
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: defaultErrorMessage });
    }
})

CartRouter.post('/add', AuthMiddleware, async (req, res) => {
    const productId = req.query.id;
    const quantity = req.body.quantity ?? 1;
    try {
        const user = await getUser(req);
        const userCart = await Cart.findOne({ user: user.id });
        if (userCart) return res.status(403).json({ message: "User cart already exist. Please update instead of creating new cart." })
        const cartItem = await createCartItem(productId, quantity);
        const cart = new Cart({
            user: user,
            products: [cartItem],
            subtotal: total,
        });
        await cart.save();
        res.status(200).json({ message: "Added to cart successfully." });
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: defaultErrorMessage });
    }
})

CartRouter.delete('/remove', AuthMiddleware, async (req, res) => {
    const productId = req.query.id;
    try {
        const user = await getUser(req);
        const cart = await Cart.findOne({ user: user.id });
        if (!cart) return res.status(404).json({ message: "Cart is empty." })
        const product = await Product.findById(productId);
        const existingProductIndex = cart.products.findIndex(item => item.product.equals(product.id));
        if(existingProductIndex === -1) return res.status(404).json({message: "Product not in cart."});
        cart.subTotal -= cart.products[existingProductIndex].total;
        cart.products.splice(existingProductIndex,1);
        await cart.save();
        res.status(200).json({ message: "Product removed from cart successfully." })
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: defaultErrorMessage });
    }
})

CartRouter.put('/update', AuthMiddleware, async (req, res) => {
    const id = req.query.id;
    const action = req.query.action;
    try {
        const user = await getUser(req);
        const cart = await Cart.findOne({ user: user.id });
        if (!cart) return res.status(404).json({ message: "Error. Cart is empty !" });
        const product = await Product.findById(id);
        const existingProductIndex = cart.products.findIndex(item => item.product.equals(product.id));
        if (existingProductIndex !== -1) {
            action && action.toLowerCase() == "decrement" ? cart.products[existingProductIndex].quantity-- : cart.products[existingProductIndex].quantity++;
            cart.products[existingProductIndex].total = getTotal(cart.products[existingProductIndex].quantity, cart.products[existingProductIndex].price);
        } else {
            cart.products.push({ product: product, quantity: 1, price: product.price, total: product.price });
        }
        cart.subTotal = cart.products.reduce((total, item) => total + item.total, 0);
        await cart.save();
        res.status(200).json({ message: "Cart updated successfully." })
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: defaultErrorMessage });
    }
})

export default CartRouter;
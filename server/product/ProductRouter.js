import express from "express";
import Product from "./ProductSchema.js";

const ProductRouter = express.Router();
const defaultErrorMessage = "Sorry! Something went wrong. Please try again or later.";

ProductRouter.get('/getall', async (req, res) => {
    try {
        const products = await Product.find({});
        if (!products) return res.status(404).json({ message: "No products found." });
        res.status(200).json({ products })
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: defaultErrorMessage });
    }
})

ProductRouter.get('/get', async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await Product.find({ id: productId });
        if (!product) return res.status(404).json({ message: "No products found." });
        res.status(200).json({ product });
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: defaultErrorMessage });
    }
})

ProductRouter.post('/add', async (req, res) => {
    const { name } = req.body;
    try {
        const productExist = await Product.findOne({ name });
        if (productExist) return res.status(403).json({ message: "Product already exist." });
        const product = new Product({
            ...req.body,
        })
        await product.save();
        res.status(200).json({ message: "Product created successfully." });
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: defaultErrorMessage });
    }
})

ProductRouter.delete('/remove', async (req, res) => {
    const { name } = req.body;
    try {
        const productExist = await Product.findOne({ name });
        if (!productExist) return res.status(404).json({ message: "Product does not exist." });
        await Product.deleteOne({ id });
        res.status(200).json({ message: "Product deleted successfully." })
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: defaultErrorMessage });
    }
})

ProductRouter.put('/update', async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await Product.findOne({ id: productId });
        if (!product) return res.status(404).json({ message: "Product does not exist." });
        const {name} = req.body;
        const productWithNameExist = await Product.findOne({name})
        if(productWithNameExist) return res.status(403).json({message: `Product with name: ${name} already exist.`})
        await product.updateOne(req.body)
        res.status(200).json({ message: "Product updated successfully." })
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: defaultErrorMessage });
    }
})

export default ProductRouter;
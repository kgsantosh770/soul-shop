import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        default: 1,
        min: [1, "Quantity can not be less then 1."],
    },
    price: {
        type: Number,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    }
})

const schema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    products: [itemSchema],
    subTotal: {
        type: Number,
        default: 0,
        required: true,
    }
})

const Cart = mongoose.model('Cart', schema);
const CartItem = mongoose.model('CartItem', itemSchema);
export default Cart;
export { CartItem }
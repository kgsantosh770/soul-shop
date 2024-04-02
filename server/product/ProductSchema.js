import mongoose from "mongoose";

const schema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    imageWithName: {
        type: String,
        required: true,
    },
    imageWithBg: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    tax: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    period: {
        type: String,
        required: true,
    },
    features: {
        type: Array,
        required: true,
    },
    tags: {
        type: Array,
        required: true,
    }
})

const Product = mongoose.model('Product', schema);
export default Product;
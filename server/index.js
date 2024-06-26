import express from "express";
import mongoose from "mongoose";
import UserRouter from "./user/UserRouter.js";
import ProductRouter from "./product/ProductRouter.js";
import CartRouter from "./cart/CartRouter.js";
import cors from "cors";
import "dotenv/config";

const env = process.env;
const app = express();

app.use(cors())
app.use(express.json());
app.use('/api',UserRouter);
app.use('/product',ProductRouter);
app.use('/cart',CartRouter);

app.listen(5000, () => {
    console.log('Server connect to localhost 5000 successfully.');
})

// Connect to Mongodb
mongoose.connect(env.MYDB_CONNECTION_STRING)
    .then(() => {
        console.log("Mongodb connection successfull.");
    })
    .catch((err) => {
        console.log("Mongodb connection failed: ", err);
    })



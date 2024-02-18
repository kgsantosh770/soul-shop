import express from "express";
import mongoose from "mongoose";
import UserRouter from "./user/UserRouter.js";
import cors from "cors";
import "dotenv/config";

const env = process.env;
const app = express();

app.use(cors())
app.use(express.json());
app.use('/api',UserRouter);

app.listen(5000, () => {
    console.log('Server connect to localhost 5000 successfully.');
})

app.get('/', (req, res) => {
    res.json('Hello server');
})

// Connect to Mongodb
mongoose.connect(env.MYDB_CONNECTION_STRING)
    .then(() => {
        console.log("Mongodb connection successfull.");
    })
    .catch((err) => {
        console.log("Mongodb connection failed: ", err);
    })



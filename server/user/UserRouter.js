import express from "express";
import User from "./UserSchema.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import AuthMiddleware from "./AuthMiddleware.js";
import "dotenv/config";

const env = process.env;
const UserRouter = express.Router();
const defaultErrorMessage = "Sorry! Something went wrong. Please try again or later.";

UserRouter.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const emailExist = await User.findOne({ email });
        if (emailExist) return res.status(403).json({ message: 'Email already exist' });
        const salt = bcryptjs.genSaltSync(10);
        const hashedPassword = bcryptjs.hashSync(password, salt);
        const user = new User({
            name: name,
            email: email,
            password: hashedPassword,
        })
        await user.save();
        res.status(200).json({ message: "Account created successfully." });
    } catch (error) {
        res.status(400).json({ message: defaultErrorMessage });
    }
})

UserRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "Email does not exist." });
        const passwordMatches = bcryptjs.compareSync(password, user.password);
        if (!passwordMatches) return res.status(401).json({ message: "Invalid password" });
        user.password = undefined;
        const userToken = jwt.sign({ email: user.email }, env.JWT_ENCODE_STRING);
        res.header('Authorization', userToken);
        res.header('Access-Control-Expose-Headers', 'Authorization');
        res.status(200).json({ data: user, message: "Login Success" });
    } catch (error) {
        res.status(400).json({ message: defaultErrorMessage });
    }
})

UserRouter.get('/getUser', AuthMiddleware, async (req, res) => {
    const token = req.header('Authorization');
    try {
        const { email } = jwt.decode(token);
        const user = await User.findOne({ email: email }).select(["-password"]);
        if (!user) res.status(404).json({ success: false, message: "Email does not exist." });
        res.status(200).json({ success: true, message: "", data: user });
    } catch (error) {
        res.status(400).json({ success: false, message: "Something went wront. Please try later." });
    }
})

export default UserRouter;
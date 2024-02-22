import express from "express";
import User from "./UserSchema.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

const env = process.env;
const UserRouter = express.Router();

UserRouter.post('/register', async (req, res) => {
    const {name, email, password} = req.body;
    try {
        const emailExist = await User.findOne({email: email});
        if(emailExist) throw Error('Email already exist');
        const salt = bcryptjs.genSaltSync(10);
        const hashedPassword = bcryptjs.hashSync(password, salt);
        const user = new User({
            name: name,
            email: email,
            password: hashedPassword,
        })
        await user.save();
        res.status(200).json({message: "Account created successfully."});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
})

UserRouter.post('/login',async (req,res)=>{
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user) throw Error("Email does not exist.");
        const passwordMatches = bcryptjs.compareSync(password, user.password);
        if(!passwordMatches) throw Error("Invalid password");
        delete user.password;
        const userToken = jwt.sign({email: user.email}, env.JWT_ENCODE_STRING);
        res.header('auth',userToken);
        res.header('Access-Control-Expose-Headers', 'auth');
        res.status(200).json({data: user,message: "Login Success."});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
})

UserRouter.post('/verifyToken', async(req,res)=>{
    const {token} = req.body;
    try {
        const userData = jwt.verify(token,env.JWT_ENCODE_STRING);
        if(!userData.email) res.status(401).json({error: "Unauthorized"});
        res.status(200).json({message: "Authorized"});
    } catch (error) {
        res.status(400).json({error: "Something went wront. Please try later."});
    }
})

UserRouter.post('/getUser', async(req, res)=>{
    const {token} = req.body;
    try {
        const isValidToken = jwt.verify(token,env.JWT_ENCODE_STRING);
        if(!isValidToken) res.status(401).json({error: "Unauthorized"});
        const tokenData = jwt.decode(token);
        const user = await User.findOne({email: tokenData.email});
        if(!user) res.status(404).json({error: "Email does not exist."});
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({error: "Something went wront. Please try later."});
    }
})

export default UserRouter;
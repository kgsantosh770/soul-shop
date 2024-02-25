import jwt from "jsonwebtoken";
import "dotenv/config";


const AuthMiddleware = (req, res, next) => {
    const env = process.env;
    const token = req.header('Authorization');
    if(!token) return res.status(401).json({success:false, message: "Authorization token not found."})
    try {
        const isValidToken = jwt.verify(token,env.JWT_ENCODE_STRING);
        if(isValidToken) next();
        else res.status(401).json({success:false, message: "Invalid authorization token."})
    } catch (error) {
        res.status(400).json({error: "Invalid authorization token."});
    }
}

export default AuthMiddleware;
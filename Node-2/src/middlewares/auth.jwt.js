import jwt from "jsonwebtoken";
import Rol from "../models/roles.model";
import User from "../models/user.model";
require('dotenv').config();

export const verifyToken =async(req,res,next)=>{
    
    try {
    const Token = req.headers["x-access-token"];

    if(!Token)return res.status(403).json({message:"No token found"})

    const Decode = jwt.verify(Token,process.env.SecretJWT)

    const user = await User.findById(Decode.id,{password:0})
    if(!user)return res.status(404).json({message:"User not found"})
    next();
    }catch (error) {
        return res.status(400).json({message:"Unathorized"})
    }
}

export const IsModerator = async(req,res,next) => {
        const userX = await User.findById(user.id)
        console.log(userX);
        const rol = await Rol.find({_id:{$in:userX.roles}})
        console.log(rol);

        res.json({message:"XD"})
        next()
}

export const IsAdmin = async(req,res,next)=>{

}
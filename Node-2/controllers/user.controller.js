const bcryptjs = require('bcryptjs');
const userService = require('../services/user.services')

exports.register = (req,res,next)=>{
    const {password} = req.body;
    const salt = bcryptjs.genSaltSync(10)
    
    req.body.password = bcryptjs.hashSync(password,salt);

    userService.register(req.body,(err,res)=>{
        if(err) return next(err);
        
        return res.status(200).send({
            message:'User created successfully',
            data:res
        })
    })
}

exports.login= (req,res,next)=>{
 const {username,password}= req.body;

    userService.login({username,password},(err,res)=>{
        if(err)return next(err);
        
        return res.status(200).send({
            message:"Successfully logged in",
            data:res
        })
    })
}

exports.userProfile= (req,res,next)=>{
    return res.status(200).json({
        message:"Authorized User"
    })
}
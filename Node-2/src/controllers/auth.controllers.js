import User from '../models/user.model'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import rol from '../models/roles.model'

require('dotenv').config();

export const signUp = async(req,res)=>{

    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(req.body.password,salt,async(err,hash)=>{

            const newUser = new User({
                username:req.body.username,
                email:req.body.email,
                password:hash
            })

            if(rol){
                const FoundRol = await rol.find({name:{$in:req.body.rol}})
                newUser.roles = FoundRol.map(rol=>rol._id);
            }else{
                const Rol = await rol.findOne({name:"User"})
                newUser.roles = Rol._id
            }

            const UserSave = await newUser.save()

            console.log(UserSave);
            const token = jwt.sign({
                id: UserSave._id,
            },process.env.SecretJWT,{
                expiresIn:8648
            })

            res.status(200).json(`Token: ${token}`)
        })
    })
}

export const signIn = async(req,res)=>{
    
    const UserFound = await User.findOne({email:req.body.email}).populate("roles")
    console.log(UserFound);
    const matchPassword = await bcrypt.compare(req.body.password,UserFound.password)

    if(!UserFound)return res.status(400).json({message:"User not found"})
    if(!matchPassword) return res.status(401).json({message:"password Incorrect"})

    const token = await jwt.sign({id:UserFound._id},process.env.SecretJWT,{
        expiresIn:86400
    })
    
    res.json({token})
}
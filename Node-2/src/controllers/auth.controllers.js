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
                console.log('https://www.youtube.com/watch?v=lV7mxivGX_I 1/29/05');
                const Rol = await rol.findOne({name:"User"})
                newUser.roles = Rol._id
            }

            const UserSave = await newUser.save()

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
    res.json(`SignIn`)
}
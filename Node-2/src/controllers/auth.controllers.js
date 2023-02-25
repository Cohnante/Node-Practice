import User from '../models/user.model'

export const signUp = async(req,res)=>{

    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        roles:req.body.roles
    })

    const UserSave = await newUser.save()
    console.log(`https://www.youtube.com/watch?v=lV7mxivGX_I / 1:06:32`);
    res.status(200).json(`SignUp ${UserSave}`)
}

export const signIn = async(req,res)=>{
    res.json(`SignIn`)
}
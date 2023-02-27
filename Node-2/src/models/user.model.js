import {Schema,model} from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema({
    username:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    roles:[{
        ref:'Rol',
        type:Schema.Types.ObjectId
    }]
},{
    timestamps:true,
    versionKey:false
})

export default model ('User', UserSchema)
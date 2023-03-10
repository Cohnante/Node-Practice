import {Schema,model} from "mongoose";

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
import { Schema,model } from "mongoose";

const ProductSchema = new Schema({ 
    name: String,
    Category: String,
    Price: Number,
    imgURL: String,
    _id:String
},{_id:{type:String,unique:true}},
{
    timestamps:true,
    versionkey:false
})

export default model('Product',ProductSchema)
import { Schema,model } from "mongoose";

const ProductSchema = new Schema({ 
    name: String,
    Category: String,
    Price: Number,
    imgURL: String,
    _id:Number
},{_id:{type:Number,unique:true}},
{
    timestamps:true,
    versionkey:false
})

export default model('Product',ProductSchema)
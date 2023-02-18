const mongoose = require('mongoose');
const {schemas} = mongoose
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new schemas.Schema({
    username: {
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
});

userSchema.ssset('toJSON',{
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject.password;
    }
});

userSchema.plugin(uniqueValidator,{
    message:'Email already registered'
});

const User = mongoose.model('user',userSchema);
module.exports = User;
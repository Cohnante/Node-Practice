import mongoose from "mongoose";

mongoose.set('strictQuery',false)

mongoose.connect('mongodb://127.0.0.1:27017/515',{
    useNewUrlParser: true,
    UseUnifiedTopology: true,
}).then(db=>console.log(`database is connected`))
    .catch(err => console.error(err));

import mongoose from "mongoose";

mongoose.set('strictQuery',false)

mongoose.connect('mongodb://localhost:27017/515',{
    useNewUrlParser: true,
    UseUnifiedTopology: true,
}).then(db=>console.log(`database is connected`))
    .catch(err => console.error(err));

const express = require('express');
const mongoose = require('mongoose');
const dbConfig = require('./config/db.config')
const auth = require('./middlewares/auth')
const errors = require('./middlewares/errors')
require('dotenv').config()

const {unless} = require('express-unless')


const app = express();
const port = process.env.App_PORT || 4000;

console.log(port);


mongoose.promise = global.promise;
mongoose.connect(dbConfig.db,{
    useNewUrlParser: true,
    useUnifiedTopology: true
    }).then(()=>{
    console.log('DB connected')
    },(error)=>{
        console.log(`Database Can't Connect: ${error}`)
    }
)

auth.authenticateToken.unless= unless;
app.use(
    auth.authenticateToken.unless({
        paht:[
            {url:"/users/login",methods:["POST"]},
            {url:"/users/register",methods:["POST"]}
        ]
    })
)

app.use(express.json());

app.use("/users",require("./routes/users.routes"));


app.use(errors.errorHandler);

app.listen(port, ()=>{
    console.log(`Server in ${port}`)
})
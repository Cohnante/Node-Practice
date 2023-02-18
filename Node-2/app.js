const express = require('express');
const mongoose = require('mongoose');
const dbConfig = require('./config/db.config')

const auth = require('./middlewares/auth')
const errors = require('./middlewares/errors')

const unless = require('express-unless')


const app = express();
const port = process.env.PORT || 4000;

mongoose.promise = global.promise;
mongoose.connect(dbConfig.db,{
    useNewUrlParser: true,
    useUnifiedTopology: true
    }).then(()=>{
    console.log('DB connected')
    },(error)=>{
        console.log(error)
    }
)

 auth.authenticateToken.unless= unless;
app.use(
    auth.authenticateToken.unless({
        paht:[
            {url:"/users/login",methods:["POST"]},
            {url:"/users/register",methods:["POST"]}
        ],
    })
)

app.use(express.json());

app.use("/users",require("./routes/users.routes"));

app.use(errors.errorHandler);

app.listen(port, ()=>{
    console.log(`Server in ${port}`)
})
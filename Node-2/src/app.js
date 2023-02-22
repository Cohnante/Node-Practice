import morgan from 'morgan';

import productsRoutes from './routes/products.routes'

const express = require('express');
const app = express();

app.use(express.json());

app.use(morgan('dev'))

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.use('/products',productsRoutes)

export default app
import morgan from 'morgan';

import productsRoutes from './routes/products.routes'
import authRoutes from './routes/auth.routes'

const express = require('express');
const app = express();

app.use(express.json());

app.use(morgan('dev'))

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.use('/api/products',productsRoutes)
app.use('/api/auth',authRoutes)

export default app
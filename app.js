const express=require('express');
const app=express();

const bodyParser=require('body-parser');
const morgan=require('morgan');
const mongoose=require('mongoose');
const cors=require('cors');

const PORT=process.env.PORT || 3000;

require('dotenv/config');

app.use(cors());
app.options('*',cors());

//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));

//Routes
const productsRouter=require('./routes/products')
const categoriesRouter=require('./routes/categories');
const ordersRouter=require('./routes/orders');
const usersRouter=require('./routes/users');

const api=process.env.API_URL

app.use(`${api}/products`,productsRouter);
app.use(`${api}/categories`,categoriesRouter);
app.use(`${api}/orders`,ordersRouter);
app.use(`${api}/users`,usersRouter);


mongoose.connect('mongodb://127.0.0.1:27017/eshopdb-Practice')
.then(()=>{
    console.log("Database connection is ready");
})
.catch((err)=>{
console.log(err);
})
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
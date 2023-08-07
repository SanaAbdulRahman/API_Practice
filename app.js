const express=require('express');
const app=express();

const bodyParser=require('body-parser');
const morgan=require('morgan');
const mongoose=require('mongoose');
//const Product=require('./models/product');
const productsRouter=require('./routers/products')

const PORT=process.env.PORT || 3000;

require('dotenv/config');
const api=process.env.API_URL


//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use(`${api}/products`,productsRouter);


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
const express=require('express');
const app=express();

const bodyParser=require('body-parser');
const morgan=require('morgan');
const mongoose=require('mongoose');

const PORT=process.env.PORT || 3000;

require('dotenv/config');
const api=process.env.API_URL


//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.get(`${api}/products`,(req,res)=>{
    const product={
        id:1,
        name:"shirt",
        Image:"some_url"
    }
    res.send(product);
})
app.post(`${api}/product`,(req,res)=>{
    const newProduct=req.body;
    res.send(newProduct);
})
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
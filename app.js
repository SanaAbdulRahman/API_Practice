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

const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
           },
    countInStock:{
        type:Number,
        required:true
    }
})

const Product=mongoose.model('Product',productSchema);
app.get(`${api}/products`,async (req,res)=>{
   const productList=await Product.find()
    res.send(productList);
})
app.post(`${api}/products`,(req,res)=>{
   const product=new Product({
    name:req.body.name,
    image:req.body.image,
    countInStock:req.body.countInStock
   })
   product.save().then((createdProduct=>{
    res.status(201).json(createdProduct);
   }))
   .catch((err)=>{
    res.status(500).json({
    error:err,
    success:false
    })
   })
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
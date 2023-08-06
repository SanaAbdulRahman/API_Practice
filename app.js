const express=require('express');
const app=express();

const PORT=process.env.PORT || 3000;

require('dotenv/config');
const api=process.env.API_URL

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

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
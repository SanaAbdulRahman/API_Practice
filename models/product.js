const mongoose=require('mongoose');
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

exports.Product=mongoose.model('Product',productSchema);
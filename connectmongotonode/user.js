// const mongoose=require("mongoose")

// const userSchema=new mongoose.Schema({
// name:String,
// age:Number
// })
// module.exports=mongoose.model("user",userSchema)
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name:String,
    tittle:String,
    price:Number,
    image:String
  });

  const Product = mongoose.model('product', ProductSchema);

  module.exports=Product
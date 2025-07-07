const mongoose=require("mongoose"); 
const ProductSchema=new mongoose.Schema({

    name:String, 
     description:String, 
     price:Number, 
     category:String,
     images:[String],
     defaultImage:String


});

module.exports = mongoose.model("product",ProductSchema)
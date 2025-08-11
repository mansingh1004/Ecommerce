const mongoose=require("mongoose");
const userreviewSchema = new mongoose.Schema({
  productid: Number,
  point: Number,
  comment: String,
  email: String
});

module.exports=mongoose.model("userreview",userreviewSchema)
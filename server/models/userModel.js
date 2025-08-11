const mongoose= require("mongoose");
const userSchema= new mongoose.Schema({
     name:String,
     city:String,
     address:String,
     phone:Number,
     country:String,
     pincode:Number,
     email:String,
     password:String
})
module.exports = mongoose.model("user", userSchema);



// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name: String,
//   city: String,
//   address: String,
//   pincode: Number,
//   email: { type: String, unique: true },
//   password: { type: String, select: false }, // hides password in queries by default
// });

// module.exports = mongoose.model("user", userSchema);

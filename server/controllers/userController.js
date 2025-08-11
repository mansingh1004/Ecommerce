const UserModel = require("../models/userModel");
const userreviewModel=require("../models/userreviewModel")
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const userSignUp=async(req, res)=>{ 
    const { name, city, address,phone,country, email, password, pincode} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const User = await UserModel.create({
      name:name,
     city:city,
     address:address,
     phone:phone,
     country:country,
     pincode:pincode,
     email:email,
     password:hashedPassword
    })
    res.status(200).send({msg:" User Succesfully  Registered !!!"});
}



// const userLogin=async(req,res)=>{
//       const user = await UserModel.findOne({ email: req.body.email}); 
//     try{
//         const match = await bcrypt.compare(req.body.password, user.password);

//         const accessToken = jwt.sign(JSON.stringify(user), process.env.TOKEN_SECRET)
//         if(match){
//             res.json({ accessToken: accessToken });
//         } else {
//             res.json({ message: "Invalid Credentials" });
//         }
//     } catch(e) {
//         console.log(e)
//     }
// }



// const userLogin = async (req, res) => {
//     try {
//         const user = await UserModel.findOne({ email: req.body.email });

//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         const match = await bcrypt.compare(req.body.password, user.password);

//         if (!match) {
//             return res.status(401).json({ message: "Invalid credentials" });
//         }

//         const payload = {
//             _id: user._id.toString(),  // ✅ ensure _id is included
//             email: user.email,
//         };

//         const accessToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
//             expiresIn: "1h"
//         });

//         res.json({ accessToken });
//     } catch (e) {
//         console.log("Login error:", e);
//         res.status(500).json({ message: "Internal server error" });
//     }
// };



const userLogin = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) return res.status(404).json({ message: "User not found" });

    const match = await bcrypt.compare(req.body.password, user.password);

    if (!match) return res.status(401).json({ message: "Invalid credentials" });

    // Only include necessary fields in JWT
    const payload = {
      _id: user._id,
      email: user.email,
    };

    const accessToken = jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: "7d" });

    res.json({ accessToken });
  } catch (e) {
    console.log("Login error:", e.message);
    res.status(500).json({ message: "Internal server error" });
  }
};










// const userAuth = async (req, res) => {
//   try {
//     const token = req.header("x-auth-token");
//     if (!token) return res.status(401).json({ error: "Token missing" });

//     const verified = jwt.verify(token, process.env.TOKEN_SECRET);
//     if (!verified || !verified._id) return res.status(401).json({ error: "Invalid token" });

//     const user = await UserModel.findById(verified._id);
//     if (!user) return res.status(404).json({ error: "User not found" });

//     res.json(user);
//   } catch (error) {
//     console.log("Token verification error:", error.message);
//     return res.status(401).json({ error: "JWT malformed or expired" });
//   }
// };



const userAuth = async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.status(401).json({ error: "Token missing" });

    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    if (!verified || !verified._id) return res.status(401).json({ error: "Invalid token" });

    const user = await UserModel.findById(verified._id);
    if (!user) return res.status(404).json({ error: "User not found" });

    res.json(user);
  } catch (error) {
    console.log("Token verification error:", error.message);
    return res.status(401).json({ error: "JWT malformed or expired" });
  }
};





// const userAuth=async(req, res)=>{
//     const token = req.header("x-auth-token");
//     // const token = req.headers.authorization?.split(" ")[1]; 
//      if (!token) return res.json(false);
//   const verified = jwt.verify(token, process.env.TOKEN_SECRET);
//   console.log(verified);

//   if (!verified) return res.json(false);
//   const user = await UserModel.findById(verified._id);

//   if (!user) return res.json(false);

//     return res.json(user);
// }

const getUser=async(req,res)=>{
   const User=await UserModel.findById(req.query.userid);
   console.log(User);
   res.send(User);
}









// const UserReview= async(req,res)=>{
// const  { id }=req.query;

// const Review= await userreviewModel.findById(id);
//  res.status(200).send(Review);
// }




// // POST /user/userreview
// const UserReview = async (req, res) => {
//   try {
//     const { productid, email, comment, point } = req.body;

//     const newReview = new userreviewModel({
//       productid,
//       email,
//       comment,
//       point
//     });

//     await newReview.save();

//     res.status(201).json({ message: "Review saved successfully" });
//   } catch (error) {
//     console.error("Error saving review:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };


module.exports={
    userSignUp,
    userLogin,
    userAuth,
    getUser,
    // UserReview

}
const express=require("express");
const route=express.Router();
const AdminController=require("../controllers/adminController")
route.post("/adminlogin",AdminController.AdminLogin)
route.post("/productsave",AdminController.ProductSave)


module.exports=route;

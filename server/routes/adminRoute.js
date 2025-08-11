const express=require("express");
const route=express.Router();
const AdminController=require("../controllers/adminController")
route.post("/adminlogin",AdminController.AdminLogin)
route.post("/productsave",AdminController.ProductSave)
route.get("/order",AdminController.Order)
route.delete("/deleteorder",AdminController.OrderDelete)
module.exports=route;

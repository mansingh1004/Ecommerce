const AdminModel=require("../models/adminModel")
const ProductModel=require("../models/productModel")
const OrderModel=require("../models/orderModel");
const multer=require("multer");
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary=require("../cloudinary")

// setup cloudinary storage for multer

const storage= new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:"manphotos",
         format: async (req, file) => 'jpg', // supports promises as well
        public_id: (req, file) => Date.now() + '-' + file.originalname,
    }


});

const upload = multer({ storage: storage }).array('selectedImage', 10); //image size

 
const ProductSave=(req,res)=>{

    
    upload(req, res, async (err) => {
        if (err) {
            return res.status(500).send("Error uploading files: " + err.message);
        }

        try {
            const { name, description, price, category } = req.body;
            const imageUrls = req.files.map(file => file.path);
            const Product= await ProductModel.create({
                 name:name, 
                description:description, 
                price:price, 
                category:category,
                images:imageUrls,
                defaultImage:imageUrls[0]
            })
            
           res.status(200).send("Data saved successfully!");
        } catch (error) {
            res.status(500).send("Error saving data: " + error.message);
        }
    });
}



const AdminLogin=async(req,res)=>{
    const { adminid, password } =req.body;
    try {
        const admin=await AdminModel.findOne({adminid:adminid});
        if(!admin){
            res.status(404).send({msg:"Invalid Adminid"})
        }
        if(admin.password!==password)
        {
            res.status(404).send({msg:"Invalid Password"})

        }
        res.status(200).send({msg:"Login Successfully"})
    } catch (error) {
        res.status(500).send({ msg: "Server error", error });
    }
   
}

const Order=async(req, res)=>{
    const Order= await OrderModel.find();
    res.status(200).send(Order);
}


const  OrderDelete=async(req,res)=>{
  const { id } =req.query;
    const Del=  await  OrderModel.findByIdAndDelete(id)

  res.send({msg:"data deleted",Del:Del})

}




module.exports={
    AdminLogin,
    ProductSave,
    Order,
    OrderDelete
}



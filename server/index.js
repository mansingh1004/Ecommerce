const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const adminRoute=require("./routes/adminRoute");
const ProductRoute = require("./routes/productRoute");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

// Connect to MongoDB
mongoose.connect(process.env.DBCON, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database successfully connected");
}).catch(err => {
    console.error("MongoDB connection error:", err);
});

// Middleware
app.use(cors());
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Routes
app.use("/admin", adminRoute)
app.use("/product", ProductRoute);


// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

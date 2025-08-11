import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackEndUrl from "../config/BackEndUrl";
import axios from "axios";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useSelector, useDispatch } from "react-redux";


const CheckOut=()=>{
const navigate = useNavigate();
const [mydata, setMydata] = useState({});
 const cartData= useSelector(state=>state.mycart.cart);
  const loadData=async()=>{  
    
    
     let api=`${BackEndUrl}/user/getuser/?userid=${localStorage.getItem("userid")}`;
     const response = await axios.get(api);
   
     setMydata(response.data);
     console.log(response.data);
  }


useEffect(()=>{
        if (!localStorage.getItem("username"))
        {
          navigate("/signin");
        }

        loadData();
    }, [])


let totalAmount=0;
let productName="";
let proImage="";
     const ans= cartData.map((key)=>{
       totalAmount+=key.price*key.qnty;
       productName+=key.name+" ";
       proImage+=key.defaultImage
     })




const initPay = (data) => {
  const options = {
    key : "rzp_test_IzAr96yAtSyeXi",
    amount: totalAmount,
    currency: data.currency,
    name: productName,
    description: "Test",
    image:proImage,
    order_id: data.id,
    handler: async (response) => {
      try {
        const verifyURL = `${BackEndUrl}/api/payment/verify`;
        const {data} = await axios.post(verifyURL,response);
      } catch(error) {
        console.log(error);
      }
    },
    theme: {
      color: "#3399cc",
    },
  };
  const rzp1 = new window.Razorpay(options);
  rzp1.open();
};


const handlePay = async () => {
  try {
    const orderURL = `${BackEndUrl}/api/payment/order`;
    const {data} = await axios.post(orderURL,{amount: totalAmount, products:productName, name:mydata.name, city:mydata.city,phone:mydata.phone,country:mydata.country ,address:mydata.address, pincode:mydata.pincode, email:mydata.email});
    console.log(data);
    initPay(data.data);
    navigate("/home")
  } catch (error) {
    console.log(error);
  }
};










    return(
        <>
         
           <h3 align="center"> Net Paybale Amount : {totalAmount}</h3>
           {/* <Form style={{width:"300px", margin:"auto"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={mydata.name} readOnly style={{backgroundColor:"lightgrey"}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" value={mydata.email} readOnly style={{backgroundColor:"lightgrey"}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Shipping Address</Form.Label>
        <Form.Control type="text" value={mydata.address} readOnly style={{backgroundColor:"lightgrey"}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" value={mydata.city} readOnly style={{backgroundColor:"lightgrey"}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Pin Code</Form.Label>
        <Form.Control type="text" value={mydata.pincode} readOnly style={{backgroundColor:"lightgrey"}} />
      </Form.Group>
      <Button variant="primary" type="button" onClick={handlePay}>
        CheckOut
      </Button>
    </Form> */}
          
<div class="checkout-form">
  <h3>01. Personal Detail</h3>
  <div class="form-group">
    <label> Name</label>
    <input type="text" placeholder="First Name" required  value={mydata.name}  /> 

    <label>Email Address</label>
    <input type="text" placeholder="Enter your email"  value={mydata.email} readOnly  /> 

    <label>Phone Number</label>
    <input type="text" placeholder="Enter your phone"   value={mydata.phone} readOnly  />
  </div>

  <h3>02. Shipping Details</h3>
  <div class="form-group">
    <label>Street Address</label>
    <input type="text" placeholder="Street Address"  value={mydata.address} readOnly />

    <label>City</label>
    <input type="text" placeholder="City"  value={mydata.city} readOnly />

    <label>Country</label>
    <input type="text" placeholder="Country"  value={mydata.country} readOnly  />

    <label>Pincode</label>
    <input type="text" placeholder="Pincode"   value={mydata.pincode} readOnly  />
  </div>

  <h3>03. Payment Method</h3>
  <div class="payment-options">
    <label><input type="radio" name="payment" value="COD" /> Cash on Delivery</label>
    <label><input type="radio" name="payment" value="Card" /> Credit Card</label>
    <label><input type="radio" name="payment" value="Razorpay" /> Razor Pay</label>
  </div>


     <button className="checkout-btn" type="button" onClick={handlePay}>
      Checkout
    </button>
</div>

        </>
    )
}
export default CheckOut;
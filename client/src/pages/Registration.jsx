import React, { useState } from "react";
import axios from "axios";
import BackEndUrl from "../config/BackEndUrl";
import { toast,ToastContainer } from "react-toastify";
const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    country:"",
    address: "",
    pincode: "",
    phone:"",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Registration Data:", formData);


       let api=`${BackEndUrl}/user/registration`;
       const response = await axios.post(api,formData );
      console.log(response.data);
      toast.success(response.data.msg)
    //   alert("You are Succesfully Registered!!");
    // Here you can call an API or add logic to save the data
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          value={formData.name}
          required
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
          value={formData.city}
          required
        />

        <input
          type="text"
          name="country"
          placeholder="Country"
          onChange={handleChange}
          value={formData.country}
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleChange}
          value={formData.address}
          required
        />

        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          onChange={handleChange}
          value={formData.pincode}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="phone Number"
          onChange={handleChange}
          value={formData.phone}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={formData.password}
          required
        />

        <button type="submit" className="register-btn">
          Register
        </button>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default Registration;

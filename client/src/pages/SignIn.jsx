import React, { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import BackEndUrl from "../config/BackEndUrl";
import axios from "axios";
import { toast,ToastContainer } from "react-toastify";
const SignIn = () => {

     const navigate=useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword]= useState("");

  

  const handleSubmit =async (e) => {
    e.preventDefault();
   let api=`${BackEndUrl}/user/login`;
  
    
  
   const response=await axios.post(api,{email,password})
   console.log(response);
   navigate("/")
    // toast.success(response.data.message)
   
    toast.success(response.data.message, {
      position: "top-center",
      autoClose: 4000, // Toast disappears after 2s
    });    

    localStorage.setItem("token", response.data.accessToken);
  };

  
  


  
  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>

        <div className="input-group">
          <FaUser className="icon" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email} onChange={(e)=>{setEmail(e.target.value)}}
            required
          />
        </div>

        <div className="input-group">
          <FaLock className="icon" />
          <input
            type="password"
            name="password"
            placeholder="Password"
           value={password}
        onChange={(e)=>{setPassword(e.target.value)}} 
            required
          />
        </div>
<p>Create Your Account <span  onClick={()=>{navigate("/registration")}} >SignUp</span> </p>
        <button type="submit" className="signin-btn"   onClick={handleSubmit}  >Login</button>
      </form>

       <ToastContainer/>
    </div>
  );
};

export default SignIn;

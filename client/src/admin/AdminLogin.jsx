import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BackEndUrl from '../config/BackEndUrl';
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [adminid, setAdminid] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();
  let api = `${BackEndUrl}/admin/adminlogin`;

  try {
    const response = await axios.post(api, { adminid, password });
    console.log(response);
localStorage.setItem("adminid",response.data.adminid)
    // Show toast
    toast.success(response.data.msg, {
      position: "top-center",
      autoClose: 4000, // Toast disappears after 2s
    });

    // Navigate after 2.5 seconds
    setTimeout(() => {
      navigate("/admindashboard");
    }, 1000);

  } catch (error) {
    console.log(error);

    // Optional: Show error toast
    toast.error(error.response.data.msg, {
      position: "top-center",
      autoClose: 3000,
    });
  }
};


  
  
  return (
  
    <div className="admin-login-container">
      <Form className="admin-login-form" onSubmit={handleSubmit}>
        <h2>Admin Login</h2>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter ID</Form.Label>
          <Form.Control
            type="text"
            name="adminid"
            value={adminid}
            onChange={(e) => setAdminid(e.target.value)}
            placeholder="Admin ID"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
       <ToastContainer />
    </div>
    
  );
 
};

export default AdminLogin;

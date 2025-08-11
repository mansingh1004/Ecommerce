import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
const Header=()=>{

  const cartData= useSelector(state=>state.mycart.cart);
const cartLength= cartData.length;
const navigate = useNavigate();

    // const logout=()=>{
    //   localStorage.clear()

    // }



    const logout = () => {
  localStorage.clear();
  toast.success("Logged out successfully!", {
    position: "top-center",
    autoClose: 3000,
    pauseOnHover: true,
   
   
  });
};


useEffect(()=>{
  // logout();
},[])
    return (

        <>
      <Navbar bg="black" data-bs-theme="dark" className='navbar'>
        <Container>
          <Navbar.Brand >Bag Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <input className='navbarinput'  type="text"   placeholder='search products'    /> 
          </Nav>
<FaRegHeart   className='wishlist' />
           <span className='itemcount'> {cartLength} </span> 

          <FaShoppingCart className='carticon'
          onClick={()=>{navigate("/cartdata")}} style={{cursor:"pointer"}} /> 

         <   FaUserAlt  className='usericon'  onClick={()=>{navigate("/signin")}}  /> 


  <span  style={{color:"white"}}> Welcome {localStorage.getItem("username")} 
          <a href="#" onClick={logout}>Logout</a></span>
  

         
        </Container>
        
      </Navbar>
     <ToastContainer />
        </>
    )
}

export default Header;

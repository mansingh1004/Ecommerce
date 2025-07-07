import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Header=()=>{

  const cartData= useSelector(state=>state.mycart.cart);
const cartLength= cartData.length;
const navigate = useNavigate();
    return (

        <>
      <Navbar bg="green" data-bs-theme="dark" className='navbar'>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <input className='navbarinput'  type="text"   placeholder='search products'    /> 
          </Nav>

           <span className='itemcount'> {cartLength} </span> 

          <FaShoppingCart className='carticon'
          onClick={()=>{navigate("/cartdata")}} style={{cursor:"pointer"}} /> 
        </Container>
      </Navbar>
     
        </>
    )
}

export default Header;

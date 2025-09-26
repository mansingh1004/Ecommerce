import { useState, useEffect } from "react";
import BackEndUrl from "../config/BackEndUrl";
import axios from "axios";
import Button from 'react-bootstrap/Button';

import { addtoCart } from "../cartSlice";
import { useDispatch } from "react-redux";
import Carousel from 'react-bootstrap/Carousel';

import { useNavigate } from "react-router-dom";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import { FaShoppingCart } from "react-icons/fa";
import ban1 from "../images/ban11.webp"
import ban2 from "../images/ban2.jpg"
import ban3 from "../images/ban3.webp"
const Home=()=>{

  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();
const navigate=useNavigate();
  const loadData=async()=>{
  
      let api=`${BackEndUrl}/product/homedisplay`;
      try {
            const response = await axios.get(api);
            console.log(response.data);
            setMydata(response.data);
          
      } catch (error) {
          console.log(error);
      }
  }

// const authCheck = async () => {
//       let api=`${BackEndUrl}/user/authuser`;
//       let token = localStorage.getItem("token");
//       if (token) { 
//       const tokenResponse = await axios.post(api, null, { headers: { "x-auth-token": token } });
//       console.log(tokenResponse.data);

//       if (tokenResponse.data) { 
//         localStorage.setItem("userValid", true); 
//         localStorage.setItem("username", tokenResponse.data.name );
//         localStorage.setItem("useremail", tokenResponse.data.email );
//         localStorage.setItem("userid", tokenResponse.data._id );
//       }
//       }
//     }




const authCheck = async () => {
  const api = `${BackEndUrl}/user/authuser`;
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const tokenResponse = await axios.post(api, null, {
        headers: { "x-auth-token": token }
      });

      if (tokenResponse.data && tokenResponse.data._id) {
        localStorage.setItem("userValid", true);
        localStorage.setItem("username", tokenResponse.data.name);
        localStorage.setItem("useremail", tokenResponse.data.email);
        localStorage.setItem("userid", tokenResponse.data._id);
      } else {
        localStorage.clear(); // or remove token if needed
        console.log("User not valid");
      }

    } catch (error) {
      console.error("Auth Check Failed:", error.response?.data || error.message);
      localStorage.clear(); // Remove invalid token
    }
  }
};









useEffect(()=>{
  loadData();
  authCheck()
}, []);


const ans=mydata.map((key)=>{
  return(
    <>
      



   <div className="card">
  <img src={key.defaultImage} className="cardimage" alt={key.name}   onClick={()=>{navigate(`/productdisplay/${key._id}`)}} />
  <h4><b>  {key.name} </b></h4>
  {/* <p>Description: {key.description}</p> */}
  <p>For - {key.category}</p>
  <h4 className="price" > Price: ₹{key.price}</h4>

  <Button variant="primary" onClick={() => {
    dispatch(addtoCart({
      id: key._id,
      name: key.name,
      description: key.description,
      price: key.price,
      category: key.category,
      images: key.images,
      defaultImage: key.defaultImage,
      qnty: 1
    }));
  }}>Add to Cart</Button>
</div>

    
    </>
  )
});

    return(
        <>



 <Carousel>
      <Carousel.Item>
       <img src={ban1} alt="" className="carousel"   />
        
      </Carousel.Item>
      <Carousel.Item>
     <img src={ban2} alt=""  className="carousel" />
       
      </Carousel.Item>
      <Carousel.Item>
         <img src={ban3} alt=""  className="carousel" />
        
      </Carousel.Item>
    </Carousel>

          <h1>   Products</h1>
          <div id="homedata"> 

               {ans} 

          </div>

         
         
        </>
    )
}

export default Home;
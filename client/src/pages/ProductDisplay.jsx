import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BackEndUrl from "../config/BackEndUrl";
import ReactImageMagnify from 'react-image-magnify';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import { addtoCart } from "../cartSlice";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { dataIncrease, dataDecrease} from "../cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ProductDisplay = () => {



  const cartData= useSelector(state=>state.mycart.cart);
//     const dispatch= useDispatch();
// const navigate=useNavigate();

//  const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);








//     const [show, setShow] = useState(false);
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(null);
//   const [email, setEmail] = useState("");
//   const [comment, setComment] = useState("");

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
// const handleSubmit = async () => {
//   let api = `${BackEndUrl}/user/userreview/`;
//   try {
//     const response = await axios.post(api, {
//       productid: id,
//       email: email,
//       comment: comment,
//       point: rating
//     });
//     console.log(response.data);
//     alert("Review saved!");
//   } catch (error) {
//     console.error("Error saving review:", error);
//     alert("Failed to save review");
//   }
//   handleClose();
// };






const navigate=useNavigate()
    const dispatch = useDispatch();
    const { id } = useParams();
    const [mydata, setMydata] = useState({});
    const [imglist, setimgList] = useState([]);
    const [DefaultImage, SetDefaultImage] = useState("");

    console.log(imglist);

    const loadData = async () => {
        let api = `${BackEndUrl}/product/productdisplay/?id=${id}`;
        try {
            const response = await axios.get(api);
            console.log(response);
            setMydata(response.data);
            setimgList(response.data.images);
            SetDefaultImage(response.data.defaultImage);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadData();
    }, [])

       

    const ans = imglist.map((key) => {
  
        return (
            <>
                <img src={key} width="100" height="100" style={{ border: "5px solid lightblue", margin: "5px" }}
                    onMouseOver={() => { SetDefaultImage(key) }} />
                <br />


               
            </>
        )
    })

    return (
        <>
            <h1> Product Display  </h1>

            <div id="prodisplay">
                <div className="proimg">
                    <div  >

                        {ans}

                    </div>
                    <div>
                        {/* <img src={DefaultImage} width="300" height="300" /> */}


                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: DefaultImage,

                            },
                            largeImage: {
                                src: DefaultImage,
                                width: 1500,
                                height: 1500,

                            }
                        }} />



 <Button variant="warning"     onClick={() => {
                        dispatch(addtoCart({
                            id: mydata._id,
                            name: mydata.name,
                            description: mydata.description,
                            price: mydata.price,
                            category: mydata.category,
                            images: mydata.images,
                            defaultImage: mydata.defaultImage,
                            qnty: 1
                        }));
                    }}>Add to Cart</Button>


                     {/* <Button variant="warning" className="buynow"     >Buy Now</Button> */}

                    </div>
                </div>
                <div className="productdescribyion">
                    <h4> Product Name: {mydata.name}</h4>
              
                    <p>For - {mydata.category}</p>










  {/* <Button variant="primary" onClick={handleShow}>
        Add Review
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label>Enter Email:</label>
            <input
              type="email"
              className="form-control mb-2"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
            <label>Enter Comment:</label>
            <input
              type="text"
              className="form-control mb-2"
              name="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <label>Rating:</label>
            <div style={{ display: "flex", gap: "5px", marginBottom: "10px" }}>
              {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                  <FaStar
                    key={starValue}
                    size={30}
                    style={{ cursor: "pointer" }}
                    color={starValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                    onClick={() => setRating(starValue)}
                    onMouseEnter={() => setHover(starValue)}
                    onMouseLeave={() => setHover(null)}
                  />
                );
              })}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={handleSubmit}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal> */}



                      {/* <FaPlusCircle 
    onClick={() => dispatch(dataIncrease({ id: mydata._id }))} 
  />
  {
    cartData.find(item => item.id === mydata._id)?.qnty || 0
  }   
  <FaMinusCircle 
    onClick={() => dispatch(dataDecrease({ id: mydata._id }))} 
  /> */}

                    
                    <h4><b>Price: ₹  {mydata.price}   </b></h4>
                   {/* {mydata.price} */}

                    {/* <Button variant="warning" onClick={() => {
                        dispatch(addtoCart({
                            id: mydata._id,
                            name: mydata.name,
                            description: mydata.description,
                            price: mydata.price,
                            category: mydata.category,
                            images: mydata.images,
                            defaultImage: mydata.defaultImage,
                            qnty: 1
                        }));
                    }}>Add to Cart</Button> */}


      <p>Description: {mydata.description}</p>

    

       
                </div>
            </div>

 

        </>
    )
}
export default ProductDisplay;
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import BackEndUrl from '../config/BackEndUrl';
import axios from 'axios';


const UploadProduct=()=>{

        const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [input,setInput]=useState({})
  const [selectedImage,setSelectedImage]=useState("")



const handleInput=(e)=>{
  let name=e.target.name;
  let value=e.target.value;
  setInput(values=>({...values,[name]:value}));
  console.log(input)

}


const handleImage=(e)=>{
  setSelectedImage(e.target.files);
  console.log(selectedImage)
}


const handleSubmit= async(e)=>{
  e.preventDefault();
  const formData= new FormData();

  for(var key in input)
  {
    formData.append(key,input[key])
  }

  for(let i=0;i<selectedImage.length;i++)
  {
    formData.append("selectedImage",selectedImage[i]);

  }

  let api=`${BackEndUrl}/admin/productsave`;
  const response= await axios.post(api,formData);
  console.log(response)

}

              return(

             <>
             <div className="uploaddata">

             <Button variant="success"  onClick={handleShow} >+Add Product</Button>


               <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Upload Product</Modal.Title> 
          </Modal.Header>
          <Modal.Body>
         <Form>
         <Form.Group className="mb-3" controlId="formBasicEmail"> 
          <Form.Label> Enter Product Name</Form.Label>
        <Form.Control type="text"  name='name' onChange={handleInput}  /> 
      </Form.Group>

       <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label> Enter Product Description</Form.Label>
       <Form.Control as="textarea" rows={3} name='description' onChange={handleInput} />

      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Enter Product Price</Form.Label>
        <Form.Control type="text"  name='price'  onChange={handleInput}  />

      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail">
       
         <Form.Select aria-label="Default select example"   name='category'   onChange={handleInput} >
    <option>Select Categor</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="kids">Kids</option>
    </Form.Select>
      
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail"   >
        <Form.Label>Upload Image</Form.Label>
        <Form.Control type="file"   onChange={handleImage} multiple  />
      </Form.Group>
     
      <Button variant="primary" type="submit"   onClick={handleSubmit} >
        Submit
      </Button>
    </Form>
        </Modal.Body>
        
      </Modal>
        </div>
        
        </>
    )
}

export default UploadProduct
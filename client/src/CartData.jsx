import { useSelector, useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { dataIncrease, dataDecrease,itemRemove } from "./cartSlice";
const CartData=()=>{
    const cartData= useSelector(state=>state.mycart.cart);
    const dispatch= useDispatch();
const navigate=useNavigate();
    let TotalAmount=0;

     const ans= cartData.map((key)=>{

      TotalAmount+=key.price*key.qnty
        return(
            <>
             <tr>
                <td> <img src={key.defaultImage} width="100" height="100" /></td>
                <td>{key.name}</td>
                 <td>{key.description}</td>
                  <td>{key.category}</td>
                  <td>{key.price}</td>
                  <td>
                   <FaPlusCircle onClick={()=>{dispatch(dataIncrease({id:key.id}))}} />
                    {key.qnty}   
                    <FaMinusCircle onClick={()=>{dispatch(dataDecrease({id:key.id}))}} />
                   </td>
                  <td> {key.qnty * key.price} </td>
                  <td>
 <Button variant="danger"  onClick={()=>{dispatch(itemRemove({id:key.id}))}}>Remove</Button>

                  </td>
             </tr>
            </>
        )
     })
    return(
        <>
          <h1> Our Cart Data</h1>
<h1 align="center" > Total Amount :{TotalAmount} </h1>
  <Button variant="warning"  onClick={()=>{navigate("/checkout")}} >Checkout</Button>

           <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Description</th>
           <th>Category</th>
          <th>Price</th>
          <th> Quantity</th>
          <th> Total Price</th>
          <th></th>
         
        </tr>
      </thead>
      <tbody>
            {ans} 

         <tr>
         
          <th colSpan="6">  <b>Total Amount</b> </th>                
          <th>  {TotalAmount}  </th>
          <th> </th>
          
          </tr>
      </tbody>
      </Table>
        </>
    )
}

export default CartData;
import { useSelector, useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { dataIncrease, dataDecrease } from "./cartSlice";
const CartData=()=>{
    const cartData= useSelector(state=>state.mycart.cart);
    const dispatch= useDispatch();

     const ans= cartData.map((key)=>{
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
                  
             </tr>
            </>
        )
     })
    return(
        <>
          <h1> Our Cart Data</h1>
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
         
        </tr>
      </thead>
      <tbody>
         {ans}
      </tbody>
      </Table>
        </>
    )
}

export default CartData;
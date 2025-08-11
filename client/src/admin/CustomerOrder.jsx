import { useState, useEffect } from "react";
import BackEndUrl from "../config/BackEndUrl";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import Table from 'react-bootstrap/Table';
const CustomerOrder = () => {
  const [currentPage, setCurrentPage] = useState(1);
   const recordsPerPage = 5;
    const [mydata, setMydata] = useState([]);

    const loadData = async () => {

        let api = `${BackEndUrl}/admin/order`;
        try {
            const response = await axios.get(api);
            console.log(response.data);
            setMydata(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        loadData();
    }, []);


    const Delete=async(id)=>{
    const api = `${BackEndUrl}/admin/deleteorder/?id=${id}`;
    const response= await axios.delete(api);
    console.log(response)
    loadData();
             }
  



  // Pagination logic
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = mydata.slice(firstIndex, lastIndex);
  const npage = Math.ceil(mydata.length / recordsPerPage);
  const numbers = [...Array(npage).keys()].map(i => i + 1);

  const prePage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage < npage) setCurrentPage(currentPage + 1);
  };

  const changePage = (n) => {
    setCurrentPage(n);
  };





    const ans = mydata.map((key, index) => {
        return (
            <>
                <tr>

                  
                    <td>{index+1}</td>
                    <td>{key.products}</td> 
                    <td>{key.amount}</td>
                    <td>{key.clientname}</td>
                    <td>{key.city}</td>
                    <td>{key.address}</td>
                    <td>{key.pincode}</td>
                    <td>{key.email}</td>
                     <td> <     AiFillDelete  onClick={()=>{Delete(key._id)}} />   </td>
                </tr>
            </>
        )
    })


    return (
        <>
            <h1>Our Orders</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Products</th>
                        <th>Amount</th>
                        <th>Customer name</th>
                        <th>City</th>
                        <th>Address</th>
                        <th>PinCode</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody> 
                 {ans}
                </tbody>
            </Table>




             <nav>
        <ul style={{ listStyle: "none", display: "flex", gap: "10px", padding: 0 }}>
          <li>
            <button onClick={prePage} disabled={currentPage === 1}>
              Prev
            </button>
          </li>
          {numbers.map((n) => (
            <li key={n}>

              <button
                onClick={() => changePage(n)}
                style={{
                  fontWeight: currentPage === n ? "bold" : "normal",
                  backgroundColor: currentPage === n ? "#007bff" : "#f8f9fa",
                  color: currentPage === n ? "#fff" : "#000",
                  border: "1px solid #ccc",
                  padding: "5px 10px",
                  borderRadius: "5px"
                }}
              >
                {n}
              </button>
            </li>
          ))}
          <li>
            <button onClick={nextPage} disabled={currentPage === npage}>
              Next
            </button>
          </li>
        </ul>
      </nav>

        </>
    )
}

export default CustomerOrder;
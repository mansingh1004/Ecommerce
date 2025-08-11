import { Link,Outlet } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

const AdminDashboard=()=>{

         function Sidebar() {
      return (
        <div className="sidebar">
          <h2>Admin Dashboard  {localStorage.getItem("adminid")}  </h2>
          
<Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link  as={Link} to="uploadproduct">UploadProduct</Nav.Link>
            <Nav.Link  as={Link} to="customerorder">Order</Nav.Link>

  
    </Nav>



          
        </div>
      );
    }

    function Header() {
      return (
        <div className="header">
          <h1>Dashboard Overview</h1>
          <div className="user-profile">
          
            <span>Admin User</span>
          </div>
        </div>
      );
    }

    function Card({ title, content }) {
      return (
        <div className="card">
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      );
    }




    return(
        <>
        
         <div className="dashboard-container">
          <Sidebar />
          <div className="main-content">
            <Header />
            <div className="content">
              <Card 
                title="Users"
                content="Total users: 1,234"
              />
              <Card 
                title="Revenue"
                content="This month: $12,345"
              />
              <Card 
                title="Orders"
                content="Pending orders: 56"
              />
              <Card 
                title="Products"
                content="Active products: 789"
              />
            </div>
 <Outlet/>
          </div>
        </div>
        
        </>
    )
}

export default AdminDashboard;


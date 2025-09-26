import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import AdminDashboard from "./admin/AdminDashboard";
import AdminLogin from "./admin/AdminLogin";
import UploadProduct from "./admin/UploadProduct";
import CartData from "./CartData";
import SignIn from "./pages/SignIn";
import Registration from "./pages/Registration";
import CheckOut from "./pages/CheckOut"; 
import CustomerOrder from "./admin/CustomerOrder";
import ProductDisplay from "./pages/ProductDisplay";
import SearchProduct from "./pages/SearchProduct";
import Productchart from "./admin/Productchart";
const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
<Route path="/"  element={<Layout/>}>
<Route index element={<Home/>}/>
<Route path="home" element={<Home/>}/>


<Route path="adminlogin" element={<AdminLogin/>}/>
<Route path="cartdata"  element={<CartData/>}/>
<Route path="signin" element={<SignIn/>}/>
<Route path="registration" element={<Registration/>}/>
<Route path="checkout" element={<CheckOut/>}/>
<Route path="productdisplay/:id" element={<ProductDisplay/>}/>
<Route path="searchproduct" element={<SearchProduct/>}/>
<Route path="productchart" element={<Productchart/>}/>

</Route>

    </Routes>
    
    <Routes>
<Route path="admindashboard" element={<AdminDashboard/>}>
<Route path="uploadproduct" element={<UploadProduct/>}/>
<Route path="customerorder" element={<CustomerOrder/>}/>


</Route>

    </Routes>
    
    
    
    </BrowserRouter>
    
    
    </>
  )
}


export  default App;
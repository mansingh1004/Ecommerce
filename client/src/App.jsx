import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import AdminDashboard from "./admin/AdminDashboard";
import AdminLogin from "./admin/AdminLogin";
import UploadProduct from "./admin/UploadProduct";
const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
<Route path="/"  element={<Layout/>}>
<Route index element={<Home/>}/>


<Route path="adminlogin" element={<AdminLogin/>}/>

</Route>

    </Routes>
    
    <Routes>
<Route path="admindashboard" element={<AdminDashboard/>}>
<Route path="uploadproduct" element={<UploadProduct/>}/>


</Route>

    </Routes>
    
    
    
    </BrowserRouter>
    
    
    </>
  )
}


export  default App;
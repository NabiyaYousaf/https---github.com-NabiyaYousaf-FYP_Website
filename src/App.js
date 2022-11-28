import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {Routes,Route} from 'react-router-dom';
import About from './LinkPages/AboutUs';
import OurServices from './LinkPages/OurServices';
import Error from './LinkPages/Error';
import ContactUs from './LinkPages/ContactUs';
import Home from './pages/Home';
import LogReg from './pages/LogReg';
import { useLocation } from 'react-router-dom';
import {useState,useEffect} from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import Loader from './Loader';
import ForgotPassword from './pages/ForgotPassword';
import Subscription from './pages/Subscription';
const App = () => {
  const [loading,setLoading]=useState(true);
  const location=useLocation();
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },2500 )
  },[]);
  
 if(loading){
  
 }
  return (
    <>
      {
        loading == true?
          <Loader loading={loading} />:
      
    <Routes location={location} key={location.key}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="about" element={<About/>}></Route>
    <Route path="/services" element={<OurServices/>}></Route>
    <Route path="/contact" element={<ContactUs/>}></Route>
    <Route path="/logsign" element={<LogReg/>}></Route>
    <Route path="/forgetpass" element={<ForgotPassword/>}></Route>
    <Route path="/subscription" element={<Subscription/>}></Route>
    <Route path="*" element={<Error/>}></Route>
    {/* <Route path="*" element={<Error/>}></Route> */}
  </Routes>
        
}
    </>
  )
  
    
}

export default App

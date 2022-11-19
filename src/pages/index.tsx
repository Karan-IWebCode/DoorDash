import React from "react"
import Header from "../Components/Header"
import Feature from '../Components/Feature/Feature'
import '../styles/global.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Details from "../Components/Details/Details";
import Details2 from "../Components/Details2/Details2";
import Footer from "../Components/Footer/Footer";



const page = () => {
  
  return(

    <div>
      <Header />
      <Feature />
      <Details />
      <Details2 />
      <Footer/>
    </div>
  )
}

export default page
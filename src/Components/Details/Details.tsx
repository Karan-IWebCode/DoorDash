import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Details.css"
import pic1 from "../../images/picture1.avif"

export default function Details() {
  return (
    <div className='container row container-md d-flex flex-column flex-md-row'>
        
  
  <div className=" col-7 col-md-3  mx-5 mb-3">
    <div className='text-left my-auto'>
        <h4 className='text-left w-100'>It’s all here.
All in one app.</h4>
<p>Discover local, on-demand delivery or Pickup from restaurants, nearby grocery and convenience stores, and more.</p>
    <button className='buttondis text-left'>Get the app</button>
    </div>
  </div>
    <div className="col-md-7 col-12 ">
        <img src={pic1} className="imgalt" alt="" />
    </div>
    
  

    </div>
  )
}

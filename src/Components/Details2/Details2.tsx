import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Details2.css"
import pic2 from "../../images/picture2.avif"

export default function Details() {

  return (
    <div className=' col-md background pb-5'>
      <div className='container container-md d-flex flex-column flex-md-row'>
        
    <div className="col-md-7 col-12 py-5">
        <img src={pic2} className="imgalt2" alt="" />
    </div>

  <div className="col-7 col-md-3  mx-5">
    <div className='text-left content'>
        <h4 className='text-left w-100'>Every Flavor Welcome</h4>
<p>From your neighborhood sushi spot to the burger and fries you crave, choose from over 300,000 local and national favorites across the U.S., Canada and Australia.</p>
    <button className='buttondis align-self-start'>Find Restaurants</button>
    </div>
  </div>
   
    
  

    </div>
        </div>
  )
}

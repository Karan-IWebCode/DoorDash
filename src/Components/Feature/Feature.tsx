import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../Feature/Feature.css"
//@ts-ignore
import logo1 from '../../images/logo1.svg';
import logo2 from '../../images/logo2.svg';
import logo3 from '../../images/logo3.svg';

import styled from "styled-components"


export default function Header() {
 
    
    
  return (
    <div className="container">
  <div className="row ">
    <div className="col-sm mx-5 text-center">
      <img className='icon' src ={logo1}/>
      <h2>Become a Dasher</h2>
      <h3 className='text-justify'>As a delivery driver, you'll make reliable money—working anytime, anywhere.</h3>
      <button className='linecontent'>
        <span>Sign up your store</span>
        <div style={{marginLeft:"25px"}}></div>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="styles__StyledInlineSvg-sc-12l8vvi-0 djCUZq"><path d="M8.29289 11.2929C7.90237 11.6834 7.90237 12.3166 8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289L9.70711 3.29289C9.31658 2.90237 8.68342 2.90237 8.29289 3.29289C7.90237 3.68342 7.90237 4.31658 8.29289 4.70711L10.5858 7L3 7C2.44772 7 2 7.44771 2 8C2 8.55228 2.44772 9 3 9L10.5858 9L8.29289 11.2929Z" fill="#EB1700"></path></svg>
      </button>
     
    </div>
    <div className="col-sm mx-5 text-center">
    <img className='icon' src ={logo2}/>
      <h2>Become a Partner</h2>
      <h3>Grow your business and reach new customers by partnering with us.</h3>
      <button className='linecontent'>
        <span>Start earning</span>
        <div style={{marginLeft:"25px"}}></div>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="styles__StyledInlineSvg-sc-12l8vvi-0 djCUZq"><path d="M8.29289 11.2929C7.90237 11.6834 7.90237 12.3166 8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289L9.70711 3.29289C9.31658 2.90237 8.68342 2.90237 8.29289 3.29289C7.90237 3.68342 7.90237 4.31658 8.29289 4.70711L10.5858 7L3 7C2.44772 7 2 7.44771 2 8C2 8.55228 2.44772 9 3 9L10.5858 9L8.29289 11.2929Z" fill="#EB1700"></path></svg>
      </button>

      
    </div>
    <div className="col-sm mx-5 text-center">
      

      <img className='icon' src ={logo3}/>
      <h2>Try the App</h2>
      <h3>Experience the best your neighborhood has to offer, all in one app.</h3>
      <button className='linecontent'>
        <span>Get the app</span>
        <div style={{marginLeft:"25px"}}></div>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="styles__StyledInlineSvg-sc-12l8vvi-0 djCUZq"><path d="M8.29289 11.2929C7.90237 11.6834 7.90237 12.3166 8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289L9.70711 3.29289C9.31658 2.90237 8.68342 2.90237 8.29289 3.29289C7.90237 3.68342 7.90237 4.31658 8.29289 4.70711L10.5858 7L3 7C2.44772 7 2 7.44771 2 8C2 8.55228 2.44772 9 3 9L10.5858 9L8.29289 11.2929Z" fill="#EB1700"></path></svg>
      </button>
    </div>
  </div>
</div>
  )
}



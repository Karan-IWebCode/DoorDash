import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import '../Components/Header.css'
//@ts-ignore
import back from '../images/back.avif';
import styled from "styled-components";


export default function Header() {
    const Main=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: red;
    height:580px;
    position: relative;
    `

    const SearchBox=styled.div`
    height:40px;
    width:300px;
    border:none;
    border-radius:100px;
    background-color:white;
    &:hover{
        border:1px solid blue;
        outline: 1px solid blue;
    }
    &:active{
        border:blue;
    }

    `
    const Searchbox=styled.input`
    height:38px;
    width:300px;
    border:none;
    border-radius:100px;
    outline:none
    `
    const Backimg=styled.img`
    width:100%;
    height: 100%;
    object-fit: cover;
    position:absolute;
    `
    const Sign = styled.div`
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    margin-top: 16px;
    `
    const Signs = styled.div`
    flex: 1 1 0%;
    padding-right: 24px;
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    align-items: center;
    ` 

    const SignLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    color:white;
    min-height: 40px;
    display: flex;
    align-items: center;
    margin-right:10px;
    font-weight:700;
    `
    const Signlink2 = styled.span`
    background-color: white;
    color:rgb(73, 73, 73);
    border-radius: 100px;
    min-height: inherit;
    padding: 6px 16px;
    `

    const Buttonarrow = styled.button`
    /* position: absolute; */
    border-radius: 110px;
    width: 40px;
    height: 32px;
    margin: 3px;
    padding: 4px;
    background: rgb(235, 23, 0);
    
    `
  return (
    <Main >
    
    <Backimg src={back} alt="no" ></Backimg>
    <Sign >
        <Signs  >
            <SignLink><span className='me-3'>Sign In</span></SignLink>
            <SignLink><Signlink2 className='signlink2'>Sign Up</Signlink2></SignLink>
        </Signs>
    </Sign>
    <div className='content'>
        <div className='content1 d-none d-lg-flex'>
        
            <svg width="56" height="32" viewBox="0 0 99.5 56.5" fill="#ffffff"><path d="M95.64,13.38A25.24,25.24,0,0,0,73.27,0H2.43A2.44,2.44,0,0,0,.72,4.16L16.15,19.68a7.26,7.26,0,0,0,5.15,2.14H71.24a6.44,6.44,0,1,1,.13,12.88H36.94a2.44,2.44,0,0,0-1.72,4.16L50.66,54.39a7.25,7.25,0,0,0,5.15,2.14H71.38c20.26,0,35.58-21.66,24.26-43.16"></path></svg>    
            <div style={{marginLeft:"20px"}}></div>
            <svg width="155" height="18" viewBox="0 0 361.1 42" fill="#ffffff"><path d="M8.62,8.66V33.38h6.32A12.21,12.21,0,0,0,27,21,12,12,0,0,0,14.94,8.66ZM14.94.91C26.72.91,35.63,9.81,35.63,21S26.72,41.14,14.94,41.14H1a1,1,0,0,1-1-1V1.95a1,1,0,0,1,1-1Z"></path><path d="M66,34.24A13.22,13.22,0,1,0,52.82,21,13.24,13.24,0,0,0,66,34.24M66,0C78.4,0,87.88,9.53,87.88,21S78.4,42,66,42,44.2,32.52,44.2,21,53.68,0,66,0"></path><path d="M118,34.24A13.22,13.22,0,1,0,104.75,21,13.24,13.24,0,0,0,118,34.24M118,0c12.36,0,21.84,9.48,21.84,21S130.32,42,118,42,96.12,32.52,96.12,21,105.6,0,118,0"></path><path d="M168.75,8.66h-8.91V19.3h8.91a5.22,5.22,0,0,0,5.46-5.17,5.28,5.28,0,0,0-5.46-5.46M151.22,1.95a1,1,0,0,1,1-1H169c8,0,13.79,5.86,13.79,13.22a13,13,0,0,1-7.18,11.78l7.74,13.68a1,1,0,0,1-.91,1.56h-6.79a1,1,0,0,1-.91-.54l-7.46-13.54h-7.47v13a1,1,0,0,1-1,1h-6.54a1,1,0,0,1-1-1Z"></path><path d="M205.26,8.85V33.57h6.32a12.21,12.21,0,0,0,12.07-12.36A12,12,0,0,0,211.58,8.85Zm6.32-7.76c11.78,0,20.69,8.91,20.69,20.12s-8.91,20.12-20.69,20.12h-13.9a1,1,0,0,1-1-1V2.14a1,1,0,0,1,1-1Z"></path><path d="M258.56,10.92l-4.89,13.22h9.77Zm-7.76,20.69-3.2,8.8a1,1,0,0,1-1,.69h-6.94a1,1,0,0,1-1-1.42l15-38.15a1,1,0,0,1,1-.66h7.77a1,1,0,0,1,1,.66l15,38.15a1,1,0,0,1-1,1.42h-6.94a1,1,0,0,1-1-.69l-3.2-8.8Z"></path><path d="M286.48,11.78C286.48,5.46,291.94,0,300.56,0a17.84,17.84,0,0,1,12.51,4.71,1,1,0,0,1,0,1.47L309.22,10a1,1,0,0,1-1.42,0,10.12,10.12,0,0,0-6.67-2.63c-3.45,0-6,2-6,4.31,0,7.47,20.38,3.16,20.38,17.53C315.5,36.49,310,42,300.27,42a20.41,20.41,0,0,1-14.54-5.84,1,1,0,0,1,0-1.47l3.72-3.72a1,1,0,0,1,1.45,0,12.85,12.85,0,0,0,8.79,3.58c4.31,0,7.15-2.3,7.15-5.18,0-7.47-20.37-3.16-20.37-17.53"></path><path d="M352.47,1.9V17H335.22V1.9a1,1,0,0,0-1-1h-6.54a1,1,0,0,0-1,1V40.05a1,1,0,0,0,1,1h6.54a1,1,0,0,0,1-1V24.71h17.24V40.05a1,1,0,0,0,1,1H360a1,1,0,0,0,1-1V1.9a1,1,0,0,0-1-1h-6.54A1,1,0,0,0,352.47,1.9Z"></path></svg>
        </div>
        <div className='  d-lg-none'>
        
            <svg width="56" height="32" viewBox="0 0 99.5 56.5" fill="#ffffff"><path d="M95.64,13.38A25.24,25.24,0,0,0,73.27,0H2.43A2.44,2.44,0,0,0,.72,4.16L16.15,19.68a7.26,7.26,0,0,0,5.15,2.14H71.24a6.44,6.44,0,1,1,.13,12.88H36.94a2.44,2.44,0,0,0-1.72,4.16L50.66,54.39a7.25,7.25,0,0,0,5.15,2.14H71.38c20.26,0,35.58-21.66,24.26-43.16"></path></svg>    
        </div>
        <div className='content2 w-50 text-center'>
            <h2 className=''>Restaurants and more, delivered to your door</h2>
        </div>
        <div className='content3 text-center'>
            <SearchBox className='d-flex align-items-center'>
                <div>
                    <svg style={{marginLeft:"4px"}}width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" ><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5257 21.3514L12 20L13.4743 21.3514C13.0955 21.7647 12.5606 22 12 22C11.4394 22 10.9045 21.7647 10.5257 21.3514ZM13.2949 18.4463C12.5464 19.4039 12 20 12 20C12 20 11.4535 19.4039 10.7051 18.4463C9.07919 16.3658 6.5 12.5792 6.5 9.49242C6.5 6.45904 8.96243 4 12 4C15.0376 4 17.5 6.45904 17.5 9.49242C17.5 12.5792 14.9208 16.3658 13.2949 18.4463ZM13.4743 21.3514C13.4743 21.3514 13.4743 21.3514 12 20C10.5257 21.3514 10.5257 21.3514 10.5257 21.3514L10.5227 21.3482L10.5177 21.3427L10.5018 21.3252L10.4474 21.2647C10.4014 21.2133 10.3363 21.1398 10.2548 21.0461C10.0919 20.8589 9.86301 20.5903 9.59004 20.2553C9.04587 19.5873 8.31764 18.6441 7.58566 17.5456C6.85705 16.4522 6.10151 15.1704 5.5227 13.8275C4.95169 12.5026 4.5 10.9984 4.5 9.49242C4.5 5.35187 7.86046 2 12 2C16.1395 2 19.5 5.35187 19.5 9.49242C19.5 10.9984 19.0483 12.5026 18.4773 13.8275C17.8985 15.1704 17.1429 16.4522 16.4143 17.5456C15.6824 18.6441 14.9541 19.5873 14.41 20.2553C14.137 20.5903 13.9081 20.8589 13.7452 21.0461C13.6637 21.1398 13.5986 21.2133 13.5526 21.2647L13.4982 21.3252L13.4823 21.3427L13.4773 21.3482L13.4743 21.3514Z" fill="#767676"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 11C12.8284 11 13.5 10.3284 13.5 9.5C13.5 8.67157 12.8284 8 12 8C11.1716 8 10.5 8.67157 10.5 9.5C10.5 10.3284 11.1716 11 12 11ZM12 13C13.933 13 15.5 11.433 15.5 9.5C15.5 7.567 13.933 6 12 6C10.067 6 8.5 7.567 8.5 9.5C8.5 11.433 10.067 13 12 13Z" fill="#767676"></path></svg></div>
                <Searchbox className="ms-2 ps-2 " placeholder={"Enter delivery address"} ></Searchbox>
                <Buttonarrow>
                <svg  style={{color:"white"}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="styles__StyledInlineSvg-sc-12l8vvi-0 jFpckg"><path d="M12.2929 17.2929C11.9024 17.6834 11.9024 18.3166 12.2929 18.7071C12.6834 19.0976 13.3166 19.0976 13.7071 18.7071L19.1578 13.2564C19.242 13.1722 19.3427 13.0717 19.4241 12.9758C19.5183 12.8648 19.6439 12.6962 19.7195 12.4635C19.8174 12.1623 19.8174 11.8377 19.7195 11.5365C19.6439 11.3038 19.5183 11.1352 19.4241 11.0242C19.3427 10.9283 19.242 10.8278 19.1578 10.7436L13.7071 5.29289C13.3166 4.90237 12.6834 4.90237 12.2929 5.29289C11.9024 5.68342 11.9024 6.31658 12.2929 6.70711L16.5858 11L5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44771 13 5 13L16.5858 13L12.2929 17.2929Z" fill="currentColor"></path>
                </svg>
                </Buttonarrow>
            </SearchBox>
            <a href=""><span>Sign in for saved address</span></a>
            
        </div>
    </div>
  
  
</Main>
  )
}

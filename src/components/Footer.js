import React from 'react'
import './Footer.css'
import {BsInstagram,BsFacebook,BsTwitter} from 'react-icons/bs';
const Footer = () => {
  return (
    <div className='footer' style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly',color:'white'}}>
   
        <div classname='footer1' style={{display:'inline-flex'}}>
            <div style={{marginRight:'2rem',marginLeft:'10rem'}}><BsInstagram /></div>
            <div style={{marginRight:'2rem',marginLeft:'2rem'}}><BsFacebook /></div>
            <div style={{marginLeft:'2rem'}}><BsTwitter /></div>
        </div>
        <div style={{marginLeft:'10rem',display:'flex',flexWrap:'wrap'}}><h1>We are all Elemental</h1></div>
        <div>
            <ul className='footlinks'>
                <li><a href='#'>About us</a></li>
                
                <li ><a href='#'> Contact us</a></li>
                
                <li><a href='#'>terms and conditions</a></li>
                
                <li><a href='#'>privacy policy</a></li>
                <a></a>
                <li><a href='#'>Designed and built by SDRC</a></li>
                
            </ul>
        </div>
        
    </div>
  )
}

export default Footer
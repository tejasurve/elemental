
import Logo from '../assets/images/Logo.png'
import './Navbar.css'
import {MdShoppingCart} from 'react-icons/md'

import React, {useState, useEffect} from 'react'
import Body from './Body'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth)
  }

  }, [])

  return (
    <>
     <nav style={{display:'flex',width:'100%',marginBottom:'10px'}}>
       <ul ><li className="list" > <img src={Logo} style={{width:'5rem', height:'2rem'}}/></li></ul>
      
       {(toggleMenu || screenWidth > 861) && (
      <ul className="list list2" style={{width:'800px',marginTop:'1rem'}}>
          <li className="items">Home</li>
          <li className="items">Services</li>
          <li className="items">Contact</li>
          <li className="items"><button className='login'>Log in</button></li>
          <li className="items"><button className='signin'>Sign up</button></li>
        </ul>)}
      <ul>
        <li className="list">
          <a>
          <MdShoppingCart />
          </a>
        
        </li>
      </ul>  
      <button onClick={toggleNav} className="btn">BTN</button>
    </nav>
    
    </>
    
  );
};

export default Navbar;


/* CSS */

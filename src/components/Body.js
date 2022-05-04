import React from 'react'

import GreenCircle from '../assets/images/GreenCircle.png'
import BlueCircle from '../assets/images/BlueCircle.png'
import Male from '../assets/images/Male.png'
import './Body.css'
import Selection from '../Selection'

const Body = () => {
  return (
    
    <div className='mainbody'>
        <div className='vector1'style={{height:'40rem'}}  >
            <img className='GreenCircle' src={GreenCircle} alt=''/>
            <img className='BlueCircle' src={BlueCircle} alt=''/>
            <img className='Male' src={Male} alt=''/> 
            <h1 className='vectortext1'>Easy Peasy Lemon Squeezy</h1>
            <h2 className='vectortext2'>Master Chemistry with our online workbooks</h2>
            <h1 className='vectortext3'>Self-driven learning has never been so easy</h1>
            <img className='img1' alt=''/>
            
           
        </div>
        <div className='selectiondiv' >
        <Selection  />
        </div>
    </div>
    
  )
}

export default Body
import React from 'react'
import bluecircle from '../assets/body4/bluecircle.png';
import card1 from '../assets/body4/card1.png'
import card2 from '../assets/body4/card2.png'
import card3 from '../assets/body4/card3.png'
import logo1 from '../assets/body4/logo1.png'
import logo2 from '../assets/body4/logo2.png'
import logo3 from '../assets/body4/logo3.png'
import './Body4.css'


const Body4 = () => {
  return (
      <>
    <div  className='maindiv'>
        <div >
        <img src={bluecircle} className='bluecircle'/>
        <img src={card1} className='card1'/>
        <img src={card2} className='card2'/>
        <img src={card3} className='card3'/>
        </div>

        <div>
            <h1 className='title'>
            Workbooks for your studies
            </h1>

            <h2 className='subtitle'>
            Discover workbooks by course and syllabus learning outcomes to fill your knowledge gaps. 
            </h2>

            <img src={logo1} className='logo1'/>
            <img src={logo2} className='logo2'/>
            <img src={logo3} className='logo3'/>
        </div>
        
    </div>
    
    </>
  )
}

export default Body4
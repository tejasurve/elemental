import React from 'react'
import bgimg from  '../assets/body3/bgimg.png'
import './Body3.css'
import Cardinfo from './Cardinfo'
import Cardinfo2 from './Cardinfo2'
const Body3 = () => {
  return (
    <div className='maindiv' >
         <div className='container'style={{height:'30rem'}}>
            <h1 className='heading1'>
            Study the way you like it
            </h1>

            <h2 className='heading2'>
            Choose between practice and exam modes to complete your workbooks.
            </h2>

        <div>
          <Cardinfo />
        <Cardinfo2 />
        </div>
        
        </div>
    </div>
    
  )
}

export default Body3
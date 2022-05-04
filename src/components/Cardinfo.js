import React from 'react'
import fire from '../assets/body3/fire.png'
import '../components/Cardinfo.css'
const Cardinfo = () => {
  return (
    <div className='main' >
       
        <img src={fire} className='fire'/>
        <h1 className='title'>PRACTICE</h1>
        <h2 className='subtitle'>Check your answers and learn as you go. Build a streak for every correct answer.</h2>
        

    </div>
  )
}

export default Cardinfo
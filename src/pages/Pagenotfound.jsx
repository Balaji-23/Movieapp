import React from 'react'
import Error from '../assets/pagenotfound.png'
import { useNavigate } from 'react-router-dom'



export const Pagenotfound = () => {
  const navigate=useNavigate();
  return (
    <div className='container text-center'>  
      <img src={Error} className='img-fluid mt-5' alt='Errorpage'/>
      <button className='btn btn-danger mt-4 btn-center' onClick={()=>navigate('/')}>Go to Homepage</button>
    </div>
  )
}

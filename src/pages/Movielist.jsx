import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom';
import {Moviecard} from "../components/Moviecard"
import useFetch from '../hooks/useFetch';


export const Movielist = ({title,apipath}) => {

  const navigate=useNavigate();

  const {data:movies}=useFetch(apipath);

  useEffect(()=>{
document.title=title;

  },[title])


    
    
  return (
    <div>
      <main className='container mt-5'>
        {title==="Your Guide to Great Movies"?
        <div className=' border  p-5 bg-body-tertiary'>
<h5 className='text-primary '>Welcome to MovieHunt</h5>
<p className='lead text-bold'>Discover movies you'll love movies personal suggestions, curated collections and quick searches- your guides to finding great films. </p>
<button className='btn btn-primary' onClick={()=>navigate('/movies/upcoming')}>Explore Now</button>
        </div>:""}
        <h5 className='text-danger py-3 border-bottom'>{title}</h5>
     
      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2' >
     {/* <Moviecard/>
     <Moviecard/>
     <Moviecard/>
     <Moviecard/>
     <Moviecard/>
     <Moviecard/> */}
    {movies.map((movie)=>{
     return <Moviecard key={movie.id} movie={movie}/>
    }
      
    )}
    
</div> 
</main>
</div> 


   
  )
}


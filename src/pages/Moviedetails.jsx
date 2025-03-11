// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// export const Moviedetails = () => {
//     const [moviedata, setMoviedata] = useState(null); // Change from [] to null
//     const { id } = useParams();
//     const apikey = `7b1d31b9b2b1d44b983c6a710e39a6ac`;
//     const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`;

//     useEffect(() => {
//         const fetchmovies = async () => {
//             try {
//                 const response = await axios.get(url);
//                 console.log(response.data); // Check API response
//                 setMoviedata(response.data); // Set movie data correctly
//             } catch (error) {
//                 console.log("Error fetching movie details:", error);
//             }
//         };
//         fetchmovies();
//     }, [id]); // Depend on id instead of url to prevent unnecessary re-fetching

//     useEffect(() => {
//         if (moviedata) {
//             document.title = moviedata.title; // Update title only when moviedata is available
//         }
//     }, [moviedata]); // Depend on moviedata

//     return (
//         <div>
//             {moviedata ? (
//                 <>
//                     <h1>{moviedata.title}</h1>
//                     <p>{moviedata.overview}</p>
//                     <img src={`https://image.tmdb.org/t/p/w500${moviedata.poster_path}`} alt={moviedata.title} />
//                 </>
//             ) : (
//                 <p>Loading...</p> // Show loading state
//             )}
//         </div>
//     );
// };



import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export const Moviedetails = () => {

  const[moviedata,setMoviedata]=useState([])

  const {id}=useParams();
  const apikey=`7b1d31b9b2b1d44b983c6a710e39a6ac`;
  const url=`https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`
  // console.log("url is:",url)
  useEffect(()=>{
      const fetchmovies=async()=>{
          try{
              const response=await axios.get(url)
              // console.log(response.data)
              setMoviedata(response.data||[])
          
          }
          catch(error){
              console.log("Error fetching in url",error);
  
          }
         
      }
      fetchmovies()
  },[id])
  
  useEffect(()=>{
    document.title=`${moviedata.title}`;
    
  
  },[moviedata])
 
  

  const image=moviedata.poster_path?`https://image.tmdb.org/t/p/original/${moviedata.poster_path}`:"https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg"
  return (
    <div className='container'>
  <h5 className='text-danger py-3 border-bottom mt-5'>{moviedata.title}</h5>
<div className='row'>
  <div className='col-md-4'>
<img src={image} className='img-fluid img-thumbnail'/>
  </div>
  <div className='col-md-8'>
    <p className='text-primary'>{moviedata.title}</p>
<p className='text-justify'>{moviedata.overview}</p>
<p className='d-flex gap-2 '>
{moviedata.genres?

moviedata.genres.map((genre)=>(
  <span className="badge bg-danger" key={genre.id}>{genre.name}</span>
))

:"No Genre available"}
</p>
<p >
<i className='bi bi-star-fill text-warning'></i> {moviedata.vote_average} |
<i className='bi bi-people-fill text-success'></i> {moviedata.vote_count}
</p>
<table className='table table-bordered w-50'>
  <tbody>
    <tr>
    <th>Runtime</th>
    <td>{moviedata.runtime}</td>
    </tr>
    <tr>
    <th>Budget</th>
    <td>{moviedata.budget}</td>

    </tr>
    <tr>
    <th>Revenue</th>
    <td>{moviedata.revenue}</td>

    </tr>
    <tr>
    <th>Release Date</th>
    <td>{moviedata.release_date}</td>
    </tr>
    
  </tbody>
</table>
<a target='_blank' href={`https://www.imdb.com/title/${moviedata.imdb_id}/`} className='btn btn-warning'>View in IMDB</a>
  </div>
</div>
    </div>
  )
}


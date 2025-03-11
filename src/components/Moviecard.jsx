import React from 'react'
import { Link } from 'react-router-dom'


export const Moviecard = ({movie}) => {

 
  
  const {poster_path}=movie

  const image=poster_path?`https://image.tmdb.org/t/p/original/${poster_path}`:"https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg"
  return (
    <div>

<div className="card shadow-sm m-5 " title={movie.title} >
  <img
    src={image}
    className='card-img-top'
    alt=""
  />
  <div className="card-body">
    <h5 className="card-title">{movie.title}</h5>
    <p className="card-text text-overflow1">
      {/* Some quick example text to build on the card title and make up the bulk of the card's content. */}
      {movie.overview}
    </p>
    <div className='d-flex justify-content-between align-items-center'>
    <Link to={`/movie/${movie.id}`} className="btn btn-sm btn-outline-primary stretched-link">
      Read More
    </Link>
    
    <small>
    <i class="bi bi-star-fill text-warning"></i>
    {movie.vote_average} | {movie.vote_count} Reviews
    </small>
    </div>
   
   
  </div>
    </div>
    </div>
  )
}

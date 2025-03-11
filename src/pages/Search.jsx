import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Moviecard } from '../components'
import useFetch from '../hooks/useFetch'

export const Search = ({apipath}) => {


  const [searchparams]=useSearchParams();

  const queryterm=searchparams.get('q')
  const {data:movies}=useFetch(apipath,queryterm)

useEffect(()=>{
  document.title=`Search for ${queryterm}`
},[queryterm])

  return (
    <div className='container'>
     <h5 className='py-5 border-bottom text-danger'>{movies.length==0?`No results found for ${queryterm}`:`Search Results for ${queryterm}`}</h5> 
           
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
      </div>
  )
}


import React from 'react'
import {Moviedetails} from '../pages/Moviedetails'
import {Routes,Route} from 'react-router-dom'
import { Movielist } from '../pages/Movielist';
import {Search} from "../pages/Search"
import {Pagenotfound} from '../pages/Pagenotfound';

const Allroutes = () => {
  return (
   <>
   <Routes>
   <Route path="/" element={<Movielist title="Your Guide to Great Movies" apipath="movie/now_playing"/>} />
   <Route path="/movies/toprated" element={<Movielist title="Top Rated Movies" apipath="movie/top_rated"/>}/>
   <Route path="/movies/popular" element={<Movielist title="Popular movies" apipath="movie/popular"/>}/>
   <Route path="/movies/upcoming" element={<Movielist title="Upcoming Movies" apipath="movie/upcoming"/>}/>
   <Route path="movie/:id" element={<Moviedetails/>}/>
   <Route path="search" element={<Search apipath="search/movie"/>}></Route>
   <Route path="*" element={<Pagenotfound title="Page not Found"/>} />
   
   </Routes>
   
   </>
  )
}

export default Allroutes
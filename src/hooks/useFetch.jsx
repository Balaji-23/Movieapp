import { useState, useEffect  } from 'react'
import axios from 'axios';
const useFetch = (apipath ,queryterm="") => {

    // console.log("Api path:",apipath)

  const [data,setData]=useState([])
// const apikey=import.meta.env.VITE_API_KEY;
// console.log("Apikey:",apikey)
const apikey=`7b1d31b9b2b1d44b983c6a710e39a6ac`;
// console.log("Apikey:",apikey)
const url=`https://api.themoviedb.org/3/${apipath}?api_key=${apikey}&query=${queryterm}`
// console.log("url is:",url)
useEffect(()=>{
    const fetchmovies=async()=>{
        try{
            const response=await axios.get(url)
            // console.log(response.data.results)
            setData(response.data.results||[])
        
        }
        catch(error){
            console.log("Error fetching in url",error.message);

        }
       
    }
    fetchmovies()
},[url])


// useEffect(()=>{
//     const fetchmovies=async()=>{
//     fetch(url).then((res)=>res.json()).then((jsondata)=>setData(jsondata.results))
    
//     }
//     fetchmovies()
//     },[url])

return {data};

  
 
}

export default useFetch;
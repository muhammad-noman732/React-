import React, { useEffect, useState } from 'react'
import Card from '../card/Card';
const TrendingMovies = () => {
    const [movieDetail , setMovieDetail] = useState([]);
    const[error , setError] = useState("");
   
    
    const apiKey = import.meta.env.VITE_API_KEY
    const  getMovieDetail = async()=>{
             try {
                const response = await fetch (`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`);
                const data =await response.json();
                console.log(data);
                setMovieDetail(data.results);
                setError("");
             } catch (error) {
                console.error("error " , error);
                setError(error)
             }

    };

   useEffect(()=>{

          getMovieDetail();

   },[])

  return (
    <div className='movies-grid'>

      {
          movieDetail.map((item)=>(
            <Card  key={item.id} item={item}/>
          ))
      }

    </div>
  )
}

export default TrendingMovies

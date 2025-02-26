import React, { useEffect, useState } from 'react'
import { useParams , Link } from 'react-router-dom'
import Video from '../../components/videos/Video';
import LikeButton from '../../components/likeButton/LikeButton';
const MovieDetail = () => {
    const[detail , setDetail]= useState({});
    const[loading , setLoading] = useState(true)
    const[error , setError] = useState("")
    const params = useParams();
    const apiKey = import.meta.env.VITE_API_KEY
  
       const getMovieDetails = async () => { 
              try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}`);
                const data = await response.json();
                console.log('data ' , data);
                setDetail(data);
                setError("")
              } catch (error) {
                console.error("error " , error.toString());
                setError(error)
              }
              finally{
                setLoading(false)
              }
          }

    useEffect(()=>{
           getMovieDetails()
    } , [params])
  return (
    
    <div>
      <h3 className='movie'>Movie-Details</h3>
      <div className='movieDetail'>
      <img  src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`} alt="" />
       <div className='movieInfo'>
        <h2>{detail.title}</h2>
        <p>{detail.release_date}</p>
        <p>{detail.vote_average}</p>
        <p>{detail.overview}</p>
        
        <Link to='/'>
        <button className='close-btn'>Close</button>
        </Link>
        <Video MovieId={params.id} />
         <LikeButton movieId ={params.id}/>
        
       </div>

      </div>
    </div>
  )
}

export default MovieDetail

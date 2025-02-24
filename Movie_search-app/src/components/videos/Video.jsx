import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Video(props) {
  const [movieVideo, setMovieVideo] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const params = props.MovieId;
  const apiKey = import.meta.env.VITE_API_KEY
  const fetchMovieVideos = async () => {
    try {
        setLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params}/videos?api_key=${apiKey}`
      );

      const data = await response.json();
      setMovieVideo(data.results);
      console.log("video data " , data);
      
    } catch (error) {
        console.error(error);
        setError("error")
    }
    finally{
        setLoading(false)
    }
  };

  // find the trailer of movie
  const trailer = movieVideo.find(video=>{
   return video.type === "Trailer" && video.official
  })

  useEffect(() => {
    fetchMovieVideos();
  }, [params]);

  return(
    <div>
    {error && <p className="error">error</p>}
     
    {trailer ? (
  <div className="trailer-section">
    <h3>Official Trailer</h3>
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${trailer.key}`}
      title="YouTube video player"
      allowFullScreen
    ></iframe>
  </div>
) : (
  <p>No trailer available</p>
)}
   </div>
  )
}


export default Video;

import React, { useEffect, useState } from 'react'

const LikeButton = ({movieId}) => {
    const [liked , setLiked ] = useState(false);
    
   useEffect(()=>{
             const likedMovies = JSON.parse(localStorage.getItem("likedMovies")) ||{};
             setLiked(likedMovies[movieId])

   },[movieId])

   const handleLike = ()=>{
    const newLikedStatus = !liked;
    setLiked(newLikedStatus);
    
    // Update localStorage
    const likedMovies = JSON.parse(localStorage.getItem('likedMovies')) || {};
    likedMovies[movieId] = newLikedStatus;
    localStorage.setItem('likedMovies', JSON.stringify(likedMovies));
   }

  return (
    <div>
          <button 
      onClick={handleLike}
      style={{
        backgroundColor: liked ? '#ff4081' : '#f0f0f0',
        color: liked ? 'white' : 'black',
        padding: '8px 16px',
        borderRadius: '20px',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
    >
      {liked ? '❤️ Liked' : '🤍 Like'}
    </button>

    </div>
  )
}

export default LikeButton

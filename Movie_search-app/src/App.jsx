import { useState } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './pages/home/Home';
import Navigation from './components/navigation/Navigation';
function App() {
 
    // # Search movies
// https://api.themoviedb.org/3/search/movie?api_key={API_KEY}&query={SEARCH_TERM}
// # Get movie details
// https://api.themoviedb.org/3/movie/{MOVIE_ID}?api_key={API_KEY}
// # Get trending movies (for homepage)
// https://api.themoviedb.org/3/trending/movie/day?api_key={API_KEY}
         
  return (
    <div className='app'>
    <Navigation/>
    
    
    </div>
  )
}

export default App

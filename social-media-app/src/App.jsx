import { useDispatch } from 'react-redux'
import CreatePost from './components/createPost/CreatePost'
import Home from './pages/home/Home'
import Routing from './routing/Routing'
import { getCurrentUser } from './features/authSlice';
import { useEffect, useState } from 'react';

function App() {
  const[loading , setLoading ] = useState(false)
  const dispatch = useDispatch();

  useEffect(()=>{
    // jb page refresh ho to current user ko get krna h agar wo h to usko load krke home pr redirect krna h 
    dispatch(getCurrentUser(setLoading))
  },[])
  
  return (
    <>
  {loading ? <h1>Loading...</h1>:  <Routing />}
    </>
  )
}

export default App

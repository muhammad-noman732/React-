import React from 'react'
import CreatePost from '../../components/createPost/CreatePost'
import FeedListing from '../../components/feedListing/FeedListing'
import { useDispatch } from 'react-redux'
import { signout } from '../../features/authSlice'
const Home = () => {
   const dispatch = useDispatch()
  const handleLogout = ()=> {
            dispatch(signout())
  }
  return (
    <div>
      <button onClick={handleLogout}>logout</button>
      <CreatePost/>
      <FeedListing/>
    </div>
  )
}

export default Home

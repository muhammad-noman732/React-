import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    //  use navigate for navigation between pages
    const navigate = useNavigate();

    const  clickHandler = ()=>{
      navigate("/about")
    }
  return (
    <div>
     Home page
     <button onClick={clickHandler}>Move to About page</button>
    </div>
  )
}

export default Home

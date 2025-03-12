import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/home/Home'
import SignUp from '../pages/signup/SignUp'
import Login from '../pages/login/Login'
const Routing = () => {
    const router = createBrowserRouter([
        {
        path:'/',
        element:<Home/>
    },
     {
        path:"/signup",
        element:<SignUp/>
     },
     {
        path:"/login",
        element:<Login/>
     }
    ]
    )
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default Routing

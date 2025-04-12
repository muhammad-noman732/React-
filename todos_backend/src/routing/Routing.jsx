import React from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from '../pages/home/Home'
import LoginPage from '../pages/login/LoginPage'
import SignupPage from '../pages/signup/SignupPage'

const Routing = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/signup',
            element:<SignupPage/>
        },
        {
            path:'/login',
            element:<LoginPage/>
        },
    ])
  return (
    <div>
      <RouterProvider router ={router}/>
    </div>
  )
}

export default Routing

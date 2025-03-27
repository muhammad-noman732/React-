import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/home/Home'
import SignUp from '../pages/signup/SignUp'
import Login from '../pages/login/Login'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
const Routing = () => {
    const router = createBrowserRouter([
      {
        element: <PrivateRoute />, // Parent route for protected pages
        children: [
          {
            path: "/",
            element: <Home />
          }
        ]
      },
      {
        element: <PublicRoute />, // Parent route for public pages
        children: [
          {
            path: "/signup",
            element: <SignUp />
          },
          {
            path: "/login",
            element: <Login />
          }
        ]
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

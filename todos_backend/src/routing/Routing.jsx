import React from 'react'
import Signup from '../pages/signup/Signup'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'

const Routing = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            Element:<Home/>
        },
        {
            path:'/signup',
            Element:<Signup/>
        },
        {
            path:'/',
            Element:<Login/>
        },
    ])
  return (
    <div>
      <RouterProvider router ={router}/>
    </div>
  )
}

export default Routing

import React from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from '../../pages/home/Home'
import MovieDetail from '../../pages/movieDetail/MovieDetail'
const Navigation = () => {

  const router = createBrowserRouter([
    {
    path:'/',
    element:<Home/>
    },

    {
      path:'/movie/:id',
      element:<MovieDetail/>
    },

  ])
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  )
}

export default Navigation

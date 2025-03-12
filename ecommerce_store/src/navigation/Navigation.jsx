import React from 'react'
import Home from '../pages/home/Home'
import { createBrowserRouter  , RouterProvider} from 'react-router-dom'
import Products from '../pages/products/Products'

const Navigation = () => {

    const router = createBrowserRouter ([
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/add-product/:productId?',
            element:<Products/>
        },
    ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default Navigation

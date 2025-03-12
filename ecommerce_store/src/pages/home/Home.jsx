import React from 'react'
import { Link } from 'react-router-dom'
import AllProducts from '../../components/allProducts/AllProducts'
import AddProducts from '../../components/addProduct/AddProducts'

const Home = () => {
  return (
    <div>
  <Link to={'/add-product/'}>Add Product</Link>
     <h1>List of Products </h1>
     <AllProducts/>
    </div>
  )
}

export default Home

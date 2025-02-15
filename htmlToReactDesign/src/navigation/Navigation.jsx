import React from 'react'
import { Route, Router , Routes, Link } from 'react-router-dom';
import Contact from '../pages/contact/Contact'
import Home from '../pages/home/Home';
import About from '../pages/about/About';

function Navigation() {
  return (
    <div>
         <nav>
        {/* <Link to="/">Home</Link> | <Link to="/about">About</Link> */}
      </nav>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact/>} />
    </Routes>
      
    </div>
  )
}

export default Navigation

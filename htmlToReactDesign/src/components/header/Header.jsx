import React from 'react'
import logo from '../../assets/logo-light.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn } from '@fortawesome/free-solid-svg-icons';
import './header.css'
function Header() {
  return (
    <div className='header'>
      <img className='logo' src={logo} alt="logo" width={100}/>

      <nav>
        <ul className='navbar'>
            <li className='navbar-item'>Home</li>
            <li className='navbar-item'>About</li>
            <li className='navbar-item'>Contact</li>
            <li className ="navbar-item" style={{ background: 'none', border: 'none', cursor: 'pointer',listStyle:"none",}}>
      <FontAwesomeIcon icon={faToggleOn} size="2x"  />
    </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header

import React from 'react';
import Logo from '../images/logo.png';
import '../Style/Navbar.css';

export default function Navbar() {
  return (
    <div className='nav-bar'>
      <img src={Logo} alt="Error" className='logo' />
      <div className="pages">
        <div className="li">
            Home
        </div>
        <div className="li">
            About
        </div>
        <div className="li">
            Services
        </div>
        <div className="li">
            Blog
        </div>
        <div className="li">
            Contact Us
        </div>
      </div>
    </div>
  )
}

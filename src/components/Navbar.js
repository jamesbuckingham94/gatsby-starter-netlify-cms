import React, { useState } from 'react';
import './NavBar.css'; // Import your CSS file for the NavBar styles
import { navigate } from 'gatsby';

const NavBar = () => {
  // Simulated login state, replace this with your actual login logic
  const [showDropdown, setShowDropdown] = useState(false); // State to toggle the dropdown
  const [loggedIn, setLoggedIn] = useState(false)
  const handleLogin = () => {
    setShowDropdown(!showDropdown)
    setLoggedIn(!loggedIn)
    let path = '/blog'
    navigate(path)
  };

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <div className="logo"><a href='/'>
        <img  src="https://www.calledupcoaching.com/hosted/images/5d/821b6aaeb943c588e3ad98aa721f01/logo.png" alt="Logo" /> {/* Replace 'path_to_your_logo' with your logo's URL or source */}
        </a></div>

      <div className="links">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/blog">Blog</a>
      </div>

      <div className="login">
        {showDropdown && (
          <div className="dropdown">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </div>
        ) }
         {!loggedIn ?
          <button onClick={handleDropdown}>Login</button> : 
          <button onClick={()=>setLoggedIn(!loggedIn)}>Logout</button> 
          }
      </div>
    </nav>
  );
};

export default NavBar;

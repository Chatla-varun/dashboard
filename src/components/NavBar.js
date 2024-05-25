// NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './NavBar.css';

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Default to true if user is logged in

  const handleLogout = () => {
    // Perform logout actions (e.g., clear session, local storage)
    setIsLoggedIn(false); // Update authentication state to false (logged out)
  };

  return (
    <nav className="menu-bar">
      <div className="menu-logo">
        <Link to="/">
          <img src={logo} alt="Visys Cloud Technologies" className="logo-image" />
        </Link>
      </div>
      <div className="menu-links">
        <Link to="/home" className="nav-link">
          Home
        </Link>
        <Link to="/contact" className="nav-link">
          Contact Us
        </Link>
        <Link to="/issues" className="nav-link">
          Reported Issues
        </Link>
        {isLoggedIn ? (
          <Link to="/logout" className="nav-link" onClick={handleLogout}>
            Logout
          </Link>
        ) : (
          <Link to="/login" className="nav-link">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default NavBar;

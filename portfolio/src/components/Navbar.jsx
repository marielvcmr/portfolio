import React from 'react';
import './Navbar.css';

export default function Navbar({ onLogout }) {
  return (
    <nav className="portfolio-navbar">

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
      </div>

      <button onClick={onLogout} className="logout-link-btn">
        Logout
      </button>
      
    </nav>
  );
}

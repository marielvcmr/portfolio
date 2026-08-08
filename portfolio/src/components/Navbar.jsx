import React from 'react';
import './Navbar.css';

export default function Navbar({ onLogout, currentTab, setCurrentTab }) {
  return (
    <nav className="portfolio-navbar">

      <div className="nav-links">
        <button 
          onClick={() => setCurrentTab('home')} 
          className={`nav-tab-btn ${currentTab === 'home' ? 'active-tab' : ''}`}
        >Home</button>

        <button 
          onClick={() => setCurrentTab('projects')} 
          className={`nav-tab-btn ${currentTab === 'projects' ? 'active-tab' : ''}`}
        >Projects</button>
      </div>

      <button onClick={onLogout} className="logout-link-btn">
        Logout
      </button>
      
    </nav>
  );
}

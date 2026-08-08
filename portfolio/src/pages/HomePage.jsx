import React from 'react';
import Navbar from '../components/Navbar';
//import ProfileCard from './ProfileCard';
//import TechStack from './TechStack';
//import Footer from './Footer';
import './HomePage.css';

export default function HomePage({ onLogout }) {
  return (
    <div className="homepage-wrapper" id="home">
      <Navbar onLogout={onLogout} />
      
    </div>
  );
}

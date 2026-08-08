import React from 'react';
import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';
//import TechStack from './TechStack';
//import Footer from './Footer';
import './HomePage.css';

export default function HomePage({ onLogout }) {
  return (
    <div className="homepage-wrapper" id="home">
      <Navbar onLogout={onLogout} />

      <main className="homepage-main-content">
        <ProfileCard />
      </main>
      
    </div>
  );
}

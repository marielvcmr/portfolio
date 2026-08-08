import React from 'react';
import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';
import TechStack from '../components/TechStack';
import Footer from '../components/Footer';
import './HomePage.css';

export default function HomePage({ onLogout }) {
  return (
    <div className="homepage-wrapper" id="home">
      <Navbar onLogout={onLogout} />

      <main className="homepage-main-content">
        <ProfileCard />
      </main>


      <TechStack/>

      {/* Reserved block for stats*/}
      <section className="stats-placeholder-zone" id="projects">
        
        {/* Components for stats */}
      </section>

      <Footer/>
      
    </div>
  );
}

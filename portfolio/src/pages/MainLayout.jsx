import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './MainLayout.css';

export default function MainLayout({ children, onLogout, currentTab, setCurrentTab }) {
  return (
    <div className="main-layout-wrapper">
      
      <Navbar onLogout={onLogout} currentTab={currentTab} setCurrentTab={setCurrentTab} />
      
      <main className="main-layout-content">
        {children}
      </main>

      <Footer />
    </div>
  );
}

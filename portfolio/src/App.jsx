import React, { useState } from 'react';
import AuthPage from './components/AuthPage';
import MainLayout from './pages/MainLayout';
import HomeContent from './pages/content/HomeContent';

export default function App() {
  // Initialize state reading localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );

  // state to control what to show inside the screen
  const [currentTab, setCurrentTab] = useState('home');

  //  login in AuthPage is successful
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  // logout and clean localStorage
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsLoggedIn(false);
  };

  // Not logged show Auth page
  if (!isLoggedIn) {
    return <AuthPage onLoginSuccess={handleLoginSuccess} />;
  }

  // Logged User see main content of portfolio
  return (
    <MainLayout onLogout={handleLogout} currentTab={currentTab} setCurrentTab={setCurrentTab}>
      {currentTab === 'home' ? <HomeContent /> : <ProjectsContent />}
    </MainLayout>
  );
}

import React, { useState } from 'react';
import AuthPage from './components/AuthPage';
import HomePage from './pages/HomePage';

export default function App() {
  // Initialize state reading localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );

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
  return <HomePage onLogout={handleLogout} />;
}

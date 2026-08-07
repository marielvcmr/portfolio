import React, { useState } from 'react';
import AuthPage from './components/AuthPage';

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
  return (
    <div style={{ padding: '40px', fontFamily: 'Inter, sans-serif', textAlign: 'center' }}>
      <h1 style={{ fontFamily: "'Days One', sans-serif" }}>
        ¡Welcome to Portfolio!
      </h1>
      <p style={{ fontFamily: "'JetBrains Mono', monospace", marginTop: '20px' }}>
        Main Content
      </p>
      
      <button 
        onClick={handleLogout} 
        style={{ 
          marginTop: '30px', 
          padding: '10px 20px', 
          cursor: 'pointer',
          fontFamily: "'Inter', sans-serif",
          borderRadius: '8px',
          border: '1px solid #ccc'
        }}
      >
        Log Out
      </button>
    </div>
  );
}

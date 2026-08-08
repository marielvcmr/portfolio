import React, { useState } from 'react';
import AuthPage from './components/AuthPage';
import MainLayout from './pages/MainLayout';
import HomeContent from './pages/content/HomeContent';
import ProjectsContent from './pages/content/ProjectsContent';
import ProjectDetailContent from './pages/content/ProjectDetailContent';

export default function App() {
  // Initialize state reading localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );

  // state to control what to show inside the screen
  const [currentTab, setCurrentTab] = useState('home');

  const [activeProject, setActiveProject] = useState(null);

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
 // function to control whether we show the whole project list or the details in one
  const renderProjectsTabFlow = () => {
    if (activeProject) {
      return (
        <ProjectDetailContent 
          project={activeProject} 
          onBack={() => setActiveProject(null)} 
        />
      );
    }
    return <ProjectsContent onSelectProject={(project) => setActiveProject(project)} />;
  };

  // Logged User see main content of portfolio
  return (
    <MainLayout onLogout={handleLogout} currentTab={currentTab} setCurrentTab={setCurrentTab}>
      {currentTab === 'home' ? <HomeContent /> : renderProjectsTabFlow()}
    </MainLayout>
  );
}

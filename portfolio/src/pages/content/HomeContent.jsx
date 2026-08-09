import React from 'react';
import ProfileCard from '../../components/ProfileCard';
import TechStack from '../../components/TechStack';
import MyStats from '../../components/MyStats';

export default function HomeContent() {
  return (
    <div className = "home-view-container">
      <ProfileCard />
      <TechStack />
      <MyStats />
    </div>
  );
}

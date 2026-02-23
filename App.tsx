
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import BicycleShowcase from './components/BicycleShowcase';
import SolutionSection from './components/SolutionSection';
import DroneShowcase from './components/DroneShowcase';
import CommunitySection from './components/CommunitySection';
import ToolsShowcase from './components/ToolsShowcase';
import TrustSafetySection from './components/TrustSafetySection';
import CampingShowcase from './components/CampingShowcase';
import WaitingListSection from './components/WaitingListSection';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';

const App: React.FC = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [subscriberCount, setSubscriberCount] = useState(97);

  useEffect(() => {
    // Calculate dynamic base count
    const startDate = new Date('2026-02-01').getTime();
    const now = new Date().getTime();
    const daysElapsed = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
    
    // Base 97 + ~4.3 new people per day
    const dynamicBase = 97 + Math.floor(daysElapsed * 4.3);
    setSubscriberCount(dynamicBase);
  }, []);

  const handleUserJoined = () => {
    setSubscriberCount(prev => prev + 1);
  };

  const scrollToWaitlist = () => {
    const element = document.getElementById('waiting-list');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen">
      <Navbar onCtaClick={scrollToWaitlist} />
      
      <main>
        <Hero onCtaClick={scrollToWaitlist} subscriberCount={subscriberCount} />
        <ProblemSection />
        <BicycleShowcase />
        <SolutionSection />
        <DroneShowcase />
        <CommunitySection />
        <ToolsShowcase />
        <TrustSafetySection />
        <CampingShowcase />
        <WaitingListSection id="waiting-list" onJoin={handleUserJoined} />
      </main>

      <Footer />
      <StickyMobileCTA onCtaClick={scrollToWaitlist} />
    </div>
  );
};

export default App;

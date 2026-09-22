import React from 'react';
import ParticleBackground from './components/ParticleBackground.jsx';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';

function App() {
  return (
    <main className="relative w-full min-h-screen bg-transparent text-white overflow-hidden flex flex-col justify-between">
      <ParticleBackground />
      <Navbar />
      <HeroSection />
    </main>
  );
}

export default App;

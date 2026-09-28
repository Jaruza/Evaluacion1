import React from 'react';
import ParticleBackground from './components/ParticleBackground.jsx';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import CoursesSection from './components/CoursesSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import PricingSection from './components/PricingSection.jsx';
import { useData } from './hooks/useData.js';

function App() {
  const { cursos, loading } = useData();

  return (
    <main className="relative w-full min-h-screen bg-transparent text-white overflow-hidden flex flex-col justify-between">
      <ParticleBackground />
      <Navbar />
      <HeroSection />
      <CoursesSection cursos={cursos} loading={loading} />
      <AboutSection />
      <PricingSection />
      
      {/* Añadimos un padding final para que respire al final del scroll */}
      <div className="h-24"></div>
    </main>
  );
}

export default App;

import React from 'react';
import ParticleBackground from './components/ParticleBackground.jsx';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import CoursesSection from './components/CoursesSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import PricingSection from './components/PricingSection.jsx';
import LoginModal from './components/LoginModal.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import { useData } from './hooks/useData.js';

function App() {
  const { cursos, planes, loading } = useData();

  return (
    <main className="relative w-full min-h-screen bg-transparent text-white overflow-hidden flex flex-col justify-between">
      <ParticleBackground />
      <Navbar />
      
      <LoginModal />
      <CartDrawer />

      <HeroSection />
      <CoursesSection cursos={cursos} loading={loading} />
      <AboutSection />
      <PricingSection planes={planes} loading={loading} />
      
      <footer id="contacto" className="w-full py-6 text-center text-sm text-gray-400 bg-black/40 backdrop-blur-md border-t border-white/10 z-10 mt-12">
        <p>Jomni Ruiz y Harold Mora.</p>
        <p>+56 925684775</p>
        <p>Ingeniería Civil Informática</p>
        <p>Universidad Autónoma de Temuco</p>
      </footer>
    </main>
  );
}

export default App;

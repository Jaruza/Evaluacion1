import React from 'react';
import { Instagram } from 'lucide-react';
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
      
      <footer id="contacto" className="w-full py-8 text-center text-sm text-gray-400 bg-black/40 backdrop-blur-md border-t border-white/10 z-10 mt-12 flex flex-col items-center gap-1">
        <p className="text-white font-medium text-base mb-1">Jomni Ruiz y Harold Morón</p>
        <div className="flex justify-center gap-6 mb-2">
          <a href="https://instagram.com/jomniantonio" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 hover:underline transition-all flex items-center gap-1.5 font-medium">
            <Instagram className="w-4 h-4" /> @jomniantonio
          </a>
          <a href="https://instagram.com/har0oold" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 hover:underline transition-all flex items-center gap-1.5 font-medium">
            <Instagram className="w-4 h-4" /> @har0oold
          </a>
        </div>
        <p>+56 9 2568 4775</p>
        <p className="mt-1">Ingeniería Civil Informática • Universidad Autónoma de Temuco</p>
      </footer>
    </main>
  );
}

export default App;

// src/App.jsx
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

// Componente principal de la aplicación. Orquesta todos los demás.
function App() {
  // Extrae los datos falsos y el estado de carga desde nuestro hook personalizado.
  const { cursos, planes, loading } = useData();

  return (
    <main className="relative w-full min-h-screen bg-transparent text-white overflow-hidden flex flex-col justify-between">
      {/* Contenedor raíz de la app. Modificar 'min-h-screen' o 'bg-transparent' si queremos cambiar el comportamiento de fondo o altura mínima. */}
      
      {/* Fondo animado de partículas. */}
      <ParticleBackground />
      {/* Barra de navegación superior fija. */}
      <Navbar />
      
      {/* Modales globales ocultos por defecto que se abren mediante sus respectivos Contextos. */}
      <LoginModal />
      <CartDrawer />

      {/* Hero Section principal (el gran título). */}
      <HeroSection />
      {/* Sección de cursos (grilla principal). Le pasamos los props. */}
      <CoursesSection cursos={cursos} loading={loading} />
      {/* Sección sobre nosotros. */}
      <AboutSection />
      {/* Sección de tabla de precios. */}
      <PricingSection planes={planes} loading={loading} />
      
      {/* Footer de la página. Modificar 'bg-black/40' para oscurecer el pie de página o 'mt-12' para darle más espacio arriba. */}
      <footer id="contacto" className="w-full py-8 text-center text-sm text-gray-400 bg-black/40 backdrop-blur-md border-t border-white/10 z-10 mt-12 flex flex-col items-center gap-1">
        <p className="text-white font-medium text-base mb-1">Jomni Ruiz y Harold Morón</p>
        <div className="flex justify-center gap-6 mb-2">
          {/* Enlace IG 1. Modificar el texto '@jomniantonio' y el 'href' respectivo. */}
          <a href="https://instagram.com/jomniantonio" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 hover:underline transition-all flex items-center gap-1.5 font-medium">
            <Instagram className="w-4 h-4" /> @jomniantonio
          </a>
          {/* Enlace IG 2. */}
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

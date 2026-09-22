import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

const particlesOptions = {
  fullScreen: {
    enable: true,
    zIndex: -10,
  },
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        // Eliminamos "grab" por completo. Solo repulse ultra suave.
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 80,   // Radio muy corto para que no dispersa medio universo
        duration: 1.2,  // Recuperación orgánica
        speed: 0.1,     // Empuje suave como una onda en el agua
      },
    },
  },
  particles: {
    color: {
      // Estrellas blancas y azules pálidas con algún destello lavanda sutil
      value: ["#ffffff", "#e0e7ff", "#c7d2fe", "#a5b4fc"],
    },
    links: {
      // APAGADO: Esta es la clave del video 1. Cero cables atravesando la pantalla.
      enable: false, 
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "out",
      },
      random: true,
      speed: 0.6, // Deriva tranquila y constante en segundo plano
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 100, // Al ser estrellas diminutas, 100 generan profundidad sin saturar
    },
    opacity: {
      // Variabilidad de brillo para simular estrellas lejanas y cercanas
      value: { min: 0.15, max: 0.75 },
      animation: {
        enable: true,
        speed: 0.8,
        minimumValue: 0.1,
        sync: false,
      },
    },
    shape: {
      type: "circle",
    },
    size: {
      // Nodos pequeños (estrellas reales, no pelotas flotantes)
      value: { min: 0.6, max: 2 },
    },
  },
  detectRetina: true,
};

  return (
    <div 
      className="fixed inset-0 w-full h-full -z-10 pointer-events-auto"
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -10 }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="w-full h-full"
      />
    </div>
  );
};

export default ParticleBackground;

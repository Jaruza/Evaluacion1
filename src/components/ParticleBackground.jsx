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
        mode: ["grab", "repulse"],
      },
      resize: true,
    },
    modes: {
      grab: {
        // Distancia corta y enlaces tenues para que la tela de araña no sature la vista
        distance: 120,
        links: {
          opacity: 0.15,
          color: "#c084fc",
        },
      },
      repulse: {
        // Radio pequeño: solo afecta a partículas inmediatamente bajo el cursor
        distance: 70,
        // Duración breve: absorbe el empujón y vuelve al flujo sin elasticidad brusca
        duration: 0.8,
        // Velocidad mínima: un toque suave en lugar de una expulsión violenta
        speed: 0.08,
      },
    },
  },
  particles: {
    color: {
      // Tonos discretos: lavanda, violeta e índigo apagado
      value: ["#a78bfa", "#818cf8", "#c084fc"],
    },
    links: {
      color: "#818cf8",
      distance: 120,
      enable: true,
      // Opacidad reducida para no competir con el Hero
      opacity: 0.08,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "out",
      },
      random: true,
      // Velocidad de crucero lenta y constante
      speed: 0.35,
      straight: false,
      // decay en 0 (o ausente) para evitar que la partícula se frene artificialmente
      decay: 0,
    },
    number: {
      density: {
        enable: true,
        area: 900,
      },
      value: 60,
    },
    opacity: {
      // Opacidad baja y variable para dar sensación de fondo profundo
      value: { min: 0.15, max: 0.45 },
    },
    shape: {
      type: "circle",
    },
    size: {
      // Nodos diminutos: el tamaño máximo no supera los 1.8px
      value: { min: 0.6, max: 1.8 },
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

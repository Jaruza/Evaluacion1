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
    // Reemplaza dentro de interactivity:
interactivity: {
  events: {
    onHover: {
      enable: true,
      mode: ["grab", "repulse"], // Mantiene ambos activos a la vez
    },
    resize: true,
  },
  modes: {
    grab: {
      distance: 220, // Qué tan lejos llega la tela de araña del mouse
      links: {
        opacity: 0.35, // Opacidad de los hilos que salen de tu cursor
        color: "#a855f7", // Hilo púrpura hacia el mouse
      },
    },
    repulse: {
      distance: 140, // Radio en el que empuja las partículas
      duration: 3,   // Cuánto tardan en recuperarse (mayor número = más flotación residual)
      speed: 0.2,    // Suavidad del empuje (menor número = empuje más lento y elegante)
    },
  },
},
    particles: {
      color: {
        value: ["#f472b6", "#60a5fa", "#c084fc", "#4ade80"],
      },
      links: {
        color: "#ffffff",
        distance: 110,
        enable: true,
        opacity: 0.1,
        width: 1,
      },
      collisions: {
        enable: false,
      },
  move: {
  direction: "none",
  enable: true,
  outModes: {
    default: "out",
  },
  random: true,     // Alterna trayectorias para que no viajen en líneas duras
  speed: 0.4,       // Velocidad crucero base (calma y fluidez)
  straight: false,
  decay: 0.005,     // Fricción suave: da esa sensación de inercia y resistencia física
  },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 120,
      },
      opacity: {
        value: { min: 0.2, max: 0.6 },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 0.5, max: 1.5 },
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

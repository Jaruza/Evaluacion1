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
      // Se amplía a 200 para que la tela de araña siga conectada 
      // al mouse mientras las partículas son empujadas hacia afuera
      distance: 200, 
      links: {
        opacity: 0.2,
        color: "#a855f7",
      },
    },
    repulse: {
      // 1. Distancia de empuje: las aleja bastante del cursor
      distance: 180, 

      // 2. Movimiento residual: tardan casi 3 segundos en recuperar 
      // su velocidad normal, flotando suavemente por el impulso
      duration: 2.8, 

      // 3. Velocidad del desplazamiento hacia el exterior
      speed: 0.35, 
    },
  },
},
  particles: {
    color: {
      value: ["#a855f7", "#818cf8", "#c084fc"],
    },
    links: {
      color: "#818cf8",
      distance: 115,
      enable: true,
      opacity: 0.15,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "out",
      },
      random: false,
      speed: 0.7, // Velocidad base solicitada
      straight: false,
      decay: 0,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 60,
    },
    opacity: {
      value: { min: 0.2, max: 0.7 },
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 2.2 },
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

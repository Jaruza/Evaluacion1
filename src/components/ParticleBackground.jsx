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
        // Solo 'grab': conecta hilos al cursor SIN empujar ni desarmar la constelación
        mode: "grab", 
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140, // Radio moderado de conexión al mouse
        links: {
          opacity: 0.25, // Hilo visible pero no invasivo
          color: "#a855f7",
        },
      },
    },
  },
  particles: {
    color: {
      // Púrpura, violeta y azul suave
      value: ["#a855f7", "#818cf8", "#c084fc"],
    },
    links: {
      color: "#818cf8",
      distance: 110, // Mantiene la constelación agrupada en racimos compactos
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
      random: false, // Trayectoria uniforme y natural
      speed: 1.4,    // Velocidad constante y claramente perceptible
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 65, // Densidad balanceada sin sobrecargar la pantalla
    },
    opacity: {
      value: { min: 0.2, max: 0.7 },
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 2.5 },
    },
  },
  detectRetina: true,
};;

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

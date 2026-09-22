import React from 'react';
import { Galaxy } from 'react-stars-particles';

export default function ParticleBackground() {
  return (
    <div 
      className="fixed inset-0 w-full h-full -z-10 pointer-events-auto"
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -10 }}
    >
      <Galaxy 
        quantity={300}    // Número de estrellas en pantalla
        attract={0.3}     // Suavidad con la que interactúan (prueba entre 0.2 y 0.5)
        repulse={0.2}     // Qué tan sutil es la recuperación
        color="white"     // Color base de las estrellas
      />
    </div>
  );
}
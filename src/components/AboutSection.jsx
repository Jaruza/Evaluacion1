import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import nosotrosImg from '../assets/nosotros.jpg';

const AboutSection = () => {
  return (
    <section id="conocenos" className="relative z-10 max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-16 tracking-tight">
        ¿Quieres saber más de nosotros?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-white font-bold text-lg">Estudiantes de 3er año de informática</h3>
              <p className="text-gray-400 mt-1">Conocemos el camino, los profesores y exactamente qué necesitas para aprobar.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-white font-bold text-lg">Material directo al grano</h3>
              <p className="text-gray-400 mt-1">Sin rodeos. Te enseñamos lo que realmente se evalúa y cómo resolverlo rápido.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-white font-bold text-lg">Ejercicios de certámenes pasados</h3>
              <p className="text-gray-400 mt-1">Práctica real con pruebas de semestres anteriores para que vayas a la segura.</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-[320px] h-64 md:h-72 rounded-2xl overflow-hidden border border-purple-500/30 shadow-[0_0_30px_rgba(124,58,237,0.15)] group">
            <img 
              src={nosotrosImg} 
              alt="Equipo InforUAT" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-purple-900/10 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

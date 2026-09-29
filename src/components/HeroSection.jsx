import React from 'react';
import StatBadge from './StatBadge.jsx';
import { CheckCircle2, Users, ArrowRight, HelpCircle } from 'lucide-react';
import logoUA from '../assets/UA.png';

const HeroSection = ({
  stats = [
    {
      id: 1,
      value: "+98%",
      label: "Tasa de Aprobación",
      icon: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
    },
    {
      id: 2,
      value: "+25",
      label: "Casos de éxito",
      icon: <Users className="w-4 h-4 text-indigo-400" />,
    },
  ],
}) => {
  return (
    <section className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 max-w-5xl mx-auto text-center pt-24 pb-12">
      {/* Logo superior ligeramente más grande */}
      <div className="mb-6 z-10">
        <img 
          src={logoUA} 
          alt="Logo Universidad Autónoma" 
          className="h-20 sm:h-24 md:h-28 w-auto object-contain drop-shadow-2xl mx-auto" 
        />
      </div>



      {/* Título principal centrado */}
      <div className="flex flex-col items-center justify-center gap-5 mx-auto w-full z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-300 leading-tight max-w-4xl w-full">
          ¡Aprueba todos tus ramos!
        </h1>
      </div>

      <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl sm:max-w-3xl text-center leading-relaxed font-normal z-10">
        Te aportamos nuestro plan de estudio con el cual aprobamos todas nuestras asignaturas y te ayudamos a encontrar tu especialidad.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8">
        {stats.map((stat) => (
          <StatBadge
            key={stat.id}
            value={stat.value}
            label={stat.label}
            icon={stat.icon}
          />
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto px-4 sm:px-0">
        <button
          type="button"
          onClick={() => document.getElementById('precios')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold text-white bg-purple-600 hover:bg-indigo-600 transition-colors duration-500 hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-[#0D0F16]"
        >
          <span>Ver suscripciones</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

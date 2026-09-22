import React from 'react';
import StatBadge from './StatBadge.jsx';
import { CheckCircle2, Users, ArrowRight, HelpCircle } from 'lucide-react';

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
      <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-900/30 border border-green-500/30 text-green-400 text-xs sm:text-sm font-semibold backdrop-blur-md">
        <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        Ingeniería Civil Informática • Universidad Autónoma de Temuco
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-300 leading-[1.15] max-w-4xl">
        Aprueba todos tus Ramos en la UA
      </h1>

      <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl sm:max-w-3xl text-center leading-relaxed font-normal">
        Te aportamos nuestro plan de estudio con el cual aprobamos todos nuestras asignaturas y te ayudamos a encontrar tu especialidad
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
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold text-white bg-purple-600 hover:bg-indigo-600 transition-colors duration-500 hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-[#0D0F16]"
        >
          <span>Ver suscripciones</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>

        <button
          type="button"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold text-gray-200 bg-white/10 hover:bg-indigo-900/40 border border-white/10 transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-[#0D0F16]"
        >
          <HelpCircle className="w-4 h-4 text-gray-300" />
          <span>Preguntas frecuentes</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

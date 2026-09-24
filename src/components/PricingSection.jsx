import React from 'react';

const PricingSection = () => {
  return (
    <section id="precios" className="relative z-10 max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-16 tracking-tight">
        Elige el plan que te hará aprobar
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
        
        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 flex flex-col text-center backdrop-blur-sm">
          <h3 className="text-xl font-medium text-gray-300 mb-2">Mensual</h3>
          <div className="text-4xl font-bold text-white mb-6">
            $25.000<span className="text-sm font-normal text-gray-500">/mes</span>
          </div>
          <ul className="text-gray-400 text-sm space-y-4 mb-8 text-left">
            <li>✓ Acceso a todos los cursos</li>
            <li>✓ Ejercicios resueltos</li>
            <li>✓ Soporte por comunidad</li>
          </ul>
          <button className="mt-auto w-full py-3 rounded-full font-semibold text-purple-400 border border-purple-500/50 hover:bg-purple-500/10 transition-colors">
            Comenzar plan
          </button>
        </div>

        <div className="relative bg-[#131722]/80 border-2 border-[#a855f7] rounded-2xl p-8 flex flex-col text-center shadow-[0_0_30px_rgba(168,85,247,0.2)] md:scale-105 z-10 backdrop-blur-md">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#a855f7] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide whitespace-nowrap">
            El más elegido
          </div>
          <h3 className="text-xl font-medium text-purple-300 mb-2 mt-2">Bimestral</h3>
          <div className="text-5xl font-extrabold text-white mb-6">
            $40.000<span className="text-sm font-normal text-gray-400">/2 meses</span>
          </div>
          <ul className="text-gray-300 text-sm space-y-4 mb-8 text-left">
            <li>✓ Acceso total e ilimitado</li>
            <li>✓ Ejercicios de certámenes reales</li>
            <li>✓ Tutorías grupales semanales</li>
            <li>✓ Ahorro del 20%</li>
          </ul>
          <button className="mt-auto w-full py-3 rounded-full font-bold text-white bg-[#a855f7] hover:bg-purple-500 transition-colors shadow-lg shadow-purple-500/30">
            Quiero aprobar
          </button>
        </div>

        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 flex flex-col text-center backdrop-blur-sm">
          <h3 className="text-xl font-medium text-gray-300 mb-2">Semestral</h3>
          <div className="text-4xl font-bold text-white mb-6">
            $80.000<span className="text-sm font-normal text-gray-500">/6 meses</span>
          </div>
          <ul className="text-gray-400 text-sm space-y-4 mb-8 text-left">
            <li>✓ Para todo el semestre universitario</li>
            <li>✓ Todo lo del plan Bimestral</li>
            <li>✓ Contacto directo 1 a 1</li>
            <li>✓ Pase libre a maratones de estudio</li>
          </ul>
          <button className="mt-auto w-full py-3 rounded-full font-semibold text-purple-400 border border-purple-500/50 hover:bg-purple-500/10 transition-colors">
            Plan intensivo
          </button>

        </div>

      </div>
    </section>
  );
};

export default PricingSection;

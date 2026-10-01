import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

// Muestra las suscripciones/planes de la BD. Recibe los planes por prop.
const PricingSection = ({ planes, loading }) => {
  const { addToCart } = useCart();
  // Estado para desactivar un botón individual mientras la API mock responde.
  const [processingId, setProcessingId] = useState(null);

  // Pega al context para añadirlo y simula un retraso con el processingId.
  const handleAdd = async (plan) => {
    setProcessingId(plan.id);
    await addToCart(plan);
    setProcessingId(null);
  };

  return (
    <section id="precios" className="relative z-10 max-w-7xl mx-auto px-6 py-24">
      {/* Contenedor principal de precios. Modificar 'py-24' para separar del Navbar o footer. */}
      
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-16 tracking-tight">
        Elige el plan que te hará aprobar
      </h2>

      {/* Grilla principal de 3 columnas para PC y 1 para móvil. */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
        {loading ? (
          <p className="text-white text-center col-span-3">Cargando planes...</p>
        ) : (
          planes.map((plan) => (
            <div 
              key={plan.id}
              // Si plan.popular es true, le aplica un borde morado iluminado (shadow-[0_0_30px_rgba(168,85,247,0.2)]) y hace que escale un poco (scale-105).
              className={`relative rounded-2xl p-8 flex flex-col text-center backdrop-blur-sm transition-transform duration-300
                ${plan.popular 
                  ? 'bg-[#131722]/80 border-2 border-[#a855f7] shadow-[0_0_30px_rgba(168,85,247,0.2)] md:scale-105 z-10' 
                  : 'bg-white/[0.02] border border-white/10'
                }`}
            >
              {/* Etiqueta superior flotante para el plan popular. Modificar '-top-4' para subirla/bajarla respecto a la caja. */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#a855f7] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide whitespace-nowrap">
                  El más elegido
                </div>
              )}
              
              <h3 className={`text-xl font-medium mb-2 ${plan.popular ? 'text-purple-300 mt-2' : 'text-gray-300'}`}>
                {plan.title}
              </h3>
              
              <div className={`font-bold mb-6 ${plan.popular ? 'text-5xl text-white' : 'text-4xl text-white'}`}>
                ${plan.price.toLocaleString('es-CL')}
                {/* Texto "/1 mes", "/6 meses". */}
                <span className={`text-sm font-normal ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                  /{plan.interval}
                </span>
              </div>
              
              {/* Lista de beneficios sacados del arreglo features de la BD. Modificar 'text-left' a 'text-center' si preferimos los beneficios centrados. */}
              <ul className={`text-sm space-y-4 mb-8 text-left ${plan.popular ? 'text-gray-300' : 'text-gray-400'}`}>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
              
              {/* Botón de suscribirse inferior. Forzado abajo con 'mt-auto'. */}
              <button 
                onClick={() => handleAdd(plan)}
                disabled={processingId === plan.id}
                className={`mt-auto w-full py-3 rounded-full font-bold transition-colors disabled:opacity-50 disabled:cursor-wait ${
                  plan.popular 
                    ? 'text-white bg-[#a855f7] hover:bg-purple-500 shadow-lg shadow-purple-500/30' 
                    : 'text-purple-400 border border-purple-500/50 hover:bg-purple-500/10'
                }`}
              >
                {processingId === plan.id ? 'Cargando...' : 'Suscribirse'}
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default PricingSection;

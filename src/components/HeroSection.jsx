import React from 'react';
import StatBadge from './StatBadge.jsx';
import { CheckCircle2, Users, ArrowRight, HelpCircle } from 'lucide-react';
import logoUA from '../assets/UA.png';

// Define el componente HeroSection. Recibe props de stats por defecto, por si queremos sobreescribirlas desde App.jsx en el futuro.
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
      {/* Contenedor del Hero. Modificar 'min-h-screen' si no queremos que ocupe el 100% del alto de la pantalla al cargar. */}
      
      {/* Contenedor del logo de la UA. Modificar el 'mb-6' para acercarlo o alejarlo del texto principal. */}
      <div className="mb-6 z-10">
        <img 
          src={logoUA} 
          alt="Logo Universidad Autónoma" 
          // Ajustes responsivos de la altura de la imagen. Cambiar 'h-20 sm:h-24 md:h-28' para hacerla más grande en móviles o PC.
          className="h-20 sm:h-24 md:h-28 w-auto object-contain drop-shadow-2xl mx-auto" 
        />
      </div>

      {/* Contenedor del título principal */}
      <div className="flex flex-col items-center justify-center gap-5 mx-auto w-full z-10">
        {/* Título gigante. Modificar 'bg-gradient-to-b from-white via-white to-gray-300' para cambiarle el color degradado al texto. */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-300 leading-tight max-w-4xl w-full">
          ¡Aprueba todos tus ramos!
        </h1>
      </div>

      {/* Subtítulo descriptivo. Modificar 'text-gray-400' para hacerlo más blanco o de otro color secundario. */}
      <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl sm:max-w-3xl text-center leading-relaxed font-normal z-10">
        Te aportamos nuestro plan de estudio con el cual aprobamos todas nuestras asignaturas y te ayudamos a encontrar tu especialidad.
      </p>

      {/* Fila de insignias estadísticas. Cambiar 'gap-3 sm:gap-4' para separarlas más entre sí. */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8">
        {/* Mapea el arreglo stats que viene por prop y renderiza un componente hijo StatBadge por cada uno. */}
        {stats.map((stat) => (
          <StatBadge
            key={stat.id}
            value={stat.value}
            label={stat.label}
            icon={stat.icon}
          />
        ))}
      </div>

      {/* Botón Call To Action (Llamado a la acción) */}
      <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto px-4 sm:px-0">
        <button
          type="button"
          // Al hacer clic, scrollea suavemente hacia el div con id 'precios'. Modificar el id aquí y en la sección correspondiente si queremos anclarlo a otro lado.
          onClick={() => document.getElementById('precios')?.scrollIntoView({ behavior: 'smooth' })}
          // Estilos del botón primario. Modificar 'bg-purple-600 hover:bg-indigo-600' para cambiar el color base y el color en hover.
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold text-white bg-purple-600 hover:bg-indigo-600 transition-colors duration-500 hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-[#0D0F16]"
        >
          <span>Ver suscripciones</span>
          {/* Flecha lateral. Cambiar 'hover:translate-x-1' si queremos que salte hacia la derecha más fuerte. */}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

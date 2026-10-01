import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import nosotrosImg from '../assets/nosotros.jpg';

// Define el componente AboutSection que muestra la información "sobre nosotros". No recibe props.
const AboutSection = () => {
  return (
    <section id="conocenos" className="relative z-10 max-w-7xl mx-auto px-6 py-24">
      {/* Contenedor principal de la sección. Modificar 'py-24' para cambiar el padding vertical (espacio arriba y abajo) o 'max-w-7xl' para el ancho máximo en PC. */}

      {/* Título principal. Cambiar 'text-3xl md:text-4xl' si queremos que sea más grande o más chico en móvil/PC. */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-16 tracking-tight">
        ¿Quieres saber más de nosotros?
      </h2>
      
      {/* Grilla principal de 2 columnas. Modificar 'grid-cols-1 md:grid-cols-2' a 'md:grid-cols-1' si queremos que texto e imagen queden uno arriba del otro siempre. */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Contenedor de la lista de características. Cambiar 'gap-6' para separar más o menos los ítems. */}
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-4">
            {/* Ícono de check. Cambiar 'text-purple-500' por 'text-green-500' para cambiar el color del check. */}
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

        {/* Contenedor de la imagen. Cambiar 'justify-center' por 'justify-end' si queremos pegar la imagen a la derecha. */}
        <div className="flex justify-center items-center">
          {/* Marco de la imagen. Modificar 'rounded-2xl' para hacerla más cuadrada o más redonda, y 'border-purple-500/30' para cambiar el color del borde. */}
          <div className="relative w-full max-w-[320px] h-64 md:h-72 rounded-2xl overflow-hidden border border-purple-500/30 shadow-[0_0_30px_rgba(124,58,237,0.15)] group">
            {/* Imagen principal. Modificar 'group-hover:scale-105' a 'group-hover:scale-110' si queremos que el zoom al pasar el mouse sea más exagerado. */}
            <img 
              src={nosotrosImg} 
              alt="Equipo InforUAT" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            {/* Capa oscura sobre la imagen. Cambiar 'bg-purple-900/10' a '/30' para oscurecerla más. */}
            <div className="absolute inset-0 bg-purple-900/10 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

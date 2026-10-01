import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

// Define el componente de la tarjeta individual de curso. Recibe la prop 'course' con los datos inyectados.
const CourseCard = ({ course }) => {
  // Maneja si el mouse está encima (hover) para mostrar los detalles superpuestos. Cambiar 'false' a 'true' dejaría los detalles siempre visibles por defecto.
  const [showDetails, setShowDetails] = useState(false);
  // Bloquea el botón mientras simula agregarlo al carrito.
  const [isProcessing, setIsProcessing] = useState(false);
  const { addToCart } = useCart();

  // Busca el texto "EV-" seguido de un número para etiquetar la imagen. Modificar la regex /EV-\d/ si el formato cambia a "Eval-1" etc.
  const evMatch = course.title.match(/EV-\d/);
  const evTag = evMatch ? evMatch[0] : null;

  // Función asíncrona que añade al carrito y simula carga. Modificar el setIsProcessing si no queremos que haya bloqueo visual del botón.
  const handleAdd = async (e) => {
    e.stopPropagation();
    setIsProcessing(true);
    await addToCart(course);
    setIsProcessing(false);
  };

  return (
    <div 
      className="border border-zinc-800 bg-black/40 backdrop-blur-md rounded-xl overflow-hidden relative cursor-pointer hover:scale-[1.02] transition-transform duration-300 w-full group"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      {/* Contenedor principal de la tarjeta. Modificar 'hover:scale-[1.02]' a 'scale-[1.05]' para que salte más al pasar el mouse, o 'bg-black/40' para cambiar la transparencia del fondo. */}
      
      {/* Contenido Frontal de la tarjeta (lo que se ve antes del hover). Modificar 'opacity-10' a 'opacity-0' si queremos que el frente desaparezca 100% al poner el mouse. */}
      <div className={`transition-opacity duration-300 flex flex-col h-full ${showDetails ? 'opacity-10' : 'opacity-100'}`}>
        {/* Contenedor relativo de la imagen para poder superponer la etiqueta EV. */}
        <div className="relative">
          {/* Imagen del curso. Modificar 'h-48' para hacer la foto más alta o más baja. */}
          <img src={course.image} alt={course.title} className="h-48 w-full object-cover" />
          
          {/* Renderizado condicional del badge EV. Modificar 'bg-purple-600' para cambiarle el color al badge en Tailwind. */}
          {evTag && (
            <div className="absolute top-3 right-3 bg-purple-600 text-white font-black px-3 py-1 rounded-full shadow-[0_0_10px_rgba(124,58,237,0.7)] text-sm z-10 border border-purple-400">
              {evTag}
            </div>
          )}
        </div>
        
        {/* Contenedor de textos (Título, precio, stats). Cambiar 'p-5' para dar más o menos margen interior. */}
        <div className="p-5 flex-grow flex flex-col justify-between">
          <div>
            {/* Título. Modificar 'text-lg' a 'text-xl' si los títulos quedan muy chicos. */}
            <h3 className="text-white font-bold text-lg mb-2">{course.title}</h3>
            {/* Stats de duración y clases. Modificar 'text-gray-400' para cambiarles el color base. */}
            <div className="flex justify-between items-center text-sm text-gray-400 mb-3">
              <span>{course.duration}</span>
              <span>{course.lessons} Clases</span>
            </div>
          </div>
          {/* Precio. Modificar 'text-green-400' al color deseado o quitar 'toLocaleString' si no queremos formato con puntos (ej. 10.000). */}
          <div className="text-green-400 font-semibold text-lg mt-1">
            ${course.price.toLocaleString('es-CL')}
          </div>
        </div>
      </div>

      {/* Contenido Superpuesto (Detalles sobre el curso). Modificar 'bg-black/90' si en vez de transparencia de tarjeta agregamos un fondo opaco o tocar 'duration-300' para controlar la velocidad del hover. */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-opacity duration-300 ${showDetails ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'}`}>
        <h4 className="text-purple-400 font-bold text-sm mb-3 uppercase tracking-wider">Sobre el curso</h4>
        <p className="text-white font-medium text-sm md:text-base leading-relaxed mb-6">
          {course.description}
        </p>
        {/* Botón de compra. Modificar 'bg-purple-600' para cambiar el color base, o 'hover:bg-purple-500' para el color al pasar el mouse. */}
        <button 
          onClick={handleAdd}
          disabled={isProcessing}
          className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-6 rounded-full transition-colors shadow-[0_0_15px_rgba(124,58,237,0.4)] disabled:opacity-50 disabled:cursor-wait"
        >
          {isProcessing ? 'Cargando...' : 'Agregar al Carrito'}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;

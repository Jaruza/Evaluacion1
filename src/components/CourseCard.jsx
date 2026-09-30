import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const CourseCard = ({ course }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const { addToCart } = useCart();

  const evMatch = course.title.match(/EV-\d/);
  const evTag = evMatch ? evMatch[0] : null;

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
      {/* Contenido Frontal */}
      <div className={`transition-opacity duration-300 flex flex-col h-full ${showDetails ? 'opacity-10' : 'opacity-100'}`}>
        <div className="relative">
          <img src={course.image} alt={course.title} className="h-48 w-full object-cover" />
          {evTag && (
            <div className="absolute top-3 right-3 bg-purple-600 text-white font-black px-3 py-1 rounded-full shadow-[0_0_10px_rgba(124,58,237,0.7)] text-sm z-10 border border-purple-400">
              {evTag}
            </div>
          )}
        </div>
        <div className="p-5 flex-grow flex flex-col justify-between">
          <div>
            <h3 className="text-white font-bold text-lg mb-2">{course.title}</h3>
            <div className="flex justify-between items-center text-sm text-gray-400 mb-3">
              <span>{course.duration}</span>
              <span>{course.lessons} Clases</span>
            </div>
          </div>
          <div className="text-green-400 font-semibold text-lg mt-1">
            ${course.price.toLocaleString('es-CL')}
          </div>
        </div>
      </div>

      {/* Contenido Superpuesto (Detalles) */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-opacity duration-300 ${showDetails ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'}`}>
        <h4 className="text-purple-400 font-bold text-sm mb-3 uppercase tracking-wider">Sobre el curso</h4>
        <p className="text-white font-medium text-sm md:text-base leading-relaxed mb-6">
          {course.description}
        </p>
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

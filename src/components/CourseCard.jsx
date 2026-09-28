import React, { useState } from 'react';

const CourseCard = ({ course }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div 
      className="border border-zinc-800 bg-black/40 backdrop-blur-md rounded-xl overflow-hidden relative cursor-pointer hover:scale-[1.02] transition-transform duration-300 w-full"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      {/* Contenido Frontal */}
      <div className={`transition-opacity duration-300 flex flex-col h-full ${showDetails ? 'opacity-10' : 'opacity-100'}`}>
        <img src={course.image} alt={course.title} className="h-48 w-full object-cover" />
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
        <p className="text-white font-medium text-sm md:text-base leading-relaxed">
          {course.description}
        </p>
      </div>
    </div>
  );
};

export default CourseCard;

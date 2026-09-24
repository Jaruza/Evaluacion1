import React, { useState } from 'react';

const CourseCard = ({ title, duration, classes, description, image }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div 
      className="relative w-full rounded-2xl bg-white/[0.03] backdrop-blur-md border border-purple-500/20 overflow-hidden cursor-pointer transition-all duration-300 hover:border-purple-500/40"
      onMouseEnter={() => setIsRevealed(true)}
      onMouseLeave={() => setIsRevealed(false)}
      onClick={() => setIsRevealed(!isRevealed)}
    >
      <div className={`transition-opacity duration-300 ${isRevealed ? 'opacity-10' : 'opacity-100'}`}>
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-5">
          <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
          <div className="flex justify-between items-center text-sm text-gray-400">
            <span>{duration}</span>
            <span>{classes}</span>
          </div>
        </div>
      </div>

      <div className={`absolute inset-0 flex items-center justify-center p-6 text-center transition-opacity duration-300 ${isRevealed ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <p className="text-white font-medium text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CourseCard;

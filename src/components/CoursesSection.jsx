import React from 'react';
import CourseCard from './CourseCard.jsx';

const SkeletonCard = () => (
  <div className="border border-zinc-800 bg-zinc-900/40 backdrop-blur-md rounded-xl overflow-hidden animate-pulse flex flex-col h-full w-full">
    <div className="h-48 bg-zinc-800 rounded-t-xl w-full"></div>
    <div className="p-5 flex flex-col gap-3">
      <div className="bg-zinc-700/50 h-5 rounded w-3/4"></div>
      <div className="flex justify-between mt-2">
        <div className="bg-zinc-700/50 h-4 rounded w-1/3"></div>
        <div className="bg-zinc-700/50 h-4 rounded w-1/3"></div>
      </div>
      <div className="bg-zinc-700/50 h-6 rounded w-1/2 mt-2"></div>
    </div>
  </div>
);

const CoursesSection = ({ cursos, loading }) => {
  return (
    <section id="cursos" className="relative z-10 w-full py-24">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-12 tracking-tight">
        Nuestros cursos más comprados
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : cursos.map((curso) => (
              <CourseCard key={curso.id} course={curso} />
            ))}
      </div>
    </section>
  );
};

export default CoursesSection;

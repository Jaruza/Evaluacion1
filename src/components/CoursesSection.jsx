import React, { useState } from 'react';
import { Search } from 'lucide-react';
import CourseCard from './CourseCard.jsx';

// Función pura auxiliar para normalizar textos (remover tildes y mayúsculas)
const normalizeText = (text) => {
  if (!text) return '';
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

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
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');

  const categories = ['Todos', 'Matemáticas', 'Física', 'Preparación Certámenes'];

  // Array derivado con el Filtro Matemático de Búsqueda Difusa
  const filteredCursos = cursos.filter(curso => {
    const query = searchQuery.trim();
    
    // Regla 1: Búsqueda Multicampo y Multitérmino
    if (query !== '') {
      // 1. Dividimos la búsqueda del usuario en un array de palabras normalizadas
      const searchTerms = normalizeText(query).split(/\s+/);
      
      // 2. Concatenamos toda la info útil del curso en una gran cadena normalizada
      const courseData = normalizeText(`${curso.title} ${curso.category} ${curso.description}`);
      
      // 3. Exigimos que *cada* palabra de la búsqueda exista en alguna parte del courseData
      return searchTerms.every(term => courseData.includes(term));
    }
    
    // Regla 2: Vitrina Principal ('Todos' excluye micro-cursos)
    if (activeCategory === 'Todos') {
      return curso.category !== 'Preparación Certámenes';
    }
    
    // Regla 3: Filtro Específico por Categoría
    return curso.category === activeCategory;
  });

  return (
    <section id="cursos" className="relative z-10 w-full py-24">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-8 tracking-tight">
        Nuestros cursos más comprados
      </h2>
      
      <div className="max-w-6xl mx-auto px-4 mb-12">
        {/* Input de Búsqueda */}
        <div className="max-w-2xl mx-auto mb-8 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
          <input 
            type="text" 
            placeholder="Busca por ramo, tema o evaluación (Ej. calculo derivadas ev-1)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-zinc-900/60 backdrop-blur-md border border-zinc-800 text-white rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-purple-500 focus:shadow-[0_0_15px_rgba(124,58,237,0.2)] transition-all"
          />
        </div>

        {/* Píldoras de Filtro por Categoría */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => { setActiveCategory(cat); setSearchQuery(''); }}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
                ${activeCategory === cat && searchQuery === '' 
                  ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(124,58,237,0.4)] border border-purple-500' 
                  : 'bg-zinc-900/40 text-gray-300 border border-zinc-800 hover:bg-zinc-800 hover:text-white'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)
        ) : filteredCursos.length > 0 ? (
          filteredCursos.map((curso) => <CourseCard key={curso.id} course={curso} />)
        ) : (
          <div className="col-span-1 md:col-span-3 text-center py-16 bg-zinc-900/20 rounded-xl border border-zinc-800/50 backdrop-blur-sm">
            <Search className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-white mb-2">Sin resultados</h3>
            <p className="text-gray-400">No se encontraron cursos con tu criterio de búsqueda.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoursesSection;

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import CourseCard from './CourseCard.jsx';

// Función pura para normalizar textos. Quita tildes y pasa todo a minúscula. Modificar la regex si requerimos una limpieza de texto diferente.
const normalizeText = (text) => {
  if (!text) return '';
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

// Skeleton de carga para simular las tarjetas mientras llegan de la BD. Modificar las clases 'bg-zinc-800' o 'h-48' para que coincidan visualmente con los tamaños reales del CourseCard.
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

// Contenedor principal del catálogo. Recibe 'cursos' (array) y 'loading' (booleano).
const CoursesSection = ({ cursos, loading }) => {
  // Estado para el texto del input de búsqueda. Modificar el string inicial '' si queremos arrancar con una búsqueda precargada.
  const [searchQuery, setSearchQuery] = useState('');
  // Estado para la categoría activa. Cambiar 'Todos' por otra si queremos iniciar filtrando en una pestaña específica.
  const [activeCategory, setActiveCategory] = useState('Todos');

  // Arreglo de píldoras/pestañas. Agregar más strings aquí si creamos nuevas clasificaciones en la BD.
  const categories = ['Todos', 'Matemáticas', 'Física', 'Preparación Certámenes'];

  // Lógica principal: Devuelve un nuevo array 'filteredCursos' aplicando la búsqueda y la categoría en tiempo real.
  const filteredCursos = cursos.filter(curso => {
    const query = searchQuery.trim();
    
    // Regla 1: Búsqueda Multicampo y Multitérmino.
    if (query !== '') {
      const searchTerms = normalizeText(query).split(/\s+/);
      // Concatena todo lo buscable en una sola string sucia. Modificar agregando curso.price u otro campo si queremos que el buscador lo agarre.
      const courseData = normalizeText(`${curso.title} ${curso.category} ${curso.description}`);
      return searchTerms.every(term => courseData.includes(term));
    }
    
    // Regla 2: Vitrina Principal ('Todos' oculta los certámenes para no saturar el inicio). Modificar si queremos que 'Todos' literalmente muestre TODO lo que hay.
    if (activeCategory === 'Todos') {
      return curso.category !== 'Preparación Certámenes';
    }
    
    // Regla 3: Filtro Específico por Categoría seleccionada.
    return curso.category === activeCategory;
  });

  return (
    <section id="cursos" className="relative z-10 w-full py-24">
      {/* Contenedor global de la sección. Modificar 'py-24' para dar más o menos margen exterior. */}
      
      {/* Título de la sección. Modificar 'text-3xl' para ajustar el tamaño tipográfico. */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-8 tracking-tight">
        Nuestros cursos más comprados
      </h2>
      
      <div className="max-w-6xl mx-auto px-4 mb-12">
        {/* Contenedor del Input de Búsqueda. Modificar 'max-w-2xl' para hacer la barra del buscador más ancha o angosta. */}
        <div className="max-w-2xl mx-auto mb-8 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
          <input 
            type="text" 
            placeholder="Busca por ramo, tema o evaluación (Ej. calculo derivadas ev-1)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-zinc-900/60 backdrop-blur-md border border-zinc-800 text-white rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-purple-500 focus:shadow-[0_0_15px_rgba(124,58,237,0.2)] transition-all"
          />
          {/* Estilos del buscador. Modificar 'focus:border-purple-500' para cambiar el color del borde cuando se hace clic dentro. */}
        </div>

        {/* Contenedor de Píldoras de Filtro. Modificar 'gap-3' para dar más o menos espacio entre los botones. */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {categories.map(cat => (
            <button 
              key={cat}
              // Al hacer clic, cambia la categoría e interrumpe/borra la búsqueda escrita. Modificar borrando el setSearchQuery('') si queremos cruzar texto y categoría a la vez.
              onClick={() => { setActiveCategory(cat); setSearchQuery(''); }}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
                ${activeCategory === cat && searchQuery === '' 
                  ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(124,58,237,0.4)] border border-purple-500' 
                  : 'bg-zinc-900/40 text-gray-300 border border-zinc-800 hover:bg-zinc-800 hover:text-white'
                }`}
            >
              {/* Lógica de estilos activa vs inactiva. Modificar el bloque 'bg-purple-600' para el estilo del botón pulsado, y 'bg-zinc-900/40' para los apagados. */}
              {cat}
            </button>
          ))}
        </div>
      </div>
      
      {/* Grilla principal de productos. Modificar 'md:grid-cols-3' a 'md:grid-cols-4' si queremos tarjetas más angostas y meter 4 por fila en monitor grande. */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {loading ? (
          // Si la API está cargando, imprime 6 tarjetas vacías de skeleton. Modificar 'length: 6' si queremos mostrar una cantidad distinta.
          Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)
        ) : filteredCursos.length > 0 ? (
          // Mapeo iterativo. Crea un componente CourseCard real por cada objeto dentro del array ya filtrado.
          filteredCursos.map((curso) => <CourseCard key={curso.id} course={curso} />)
        ) : (
          // Estado de vacío (empty state) si no hay coincidencias. Modificar todo este div para alterar la gráfica del mensaje "Sin resultados".
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

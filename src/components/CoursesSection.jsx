import React from 'react';
import CourseCard from './CourseCard.jsx';

const courses = [
  { id: 1, title: 'Cálculo Diferencial', duration: '4 Semanas', classes: '12 Clases', description: 'Domina los límites, derivadas y aplicaciones prácticas con ejercicios de certámenes pasados.', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=400' },
  { id: 2, title: 'Álgebra Lineal', duration: '5 Semanas', classes: '15 Clases', description: 'Matrices, espacios vectoriales y transformaciones lineales explicados paso a paso.', image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=400' },
  { id: 3, title: 'Física Clásica', duration: '6 Semanas', classes: '18 Clases', description: 'Mecánica newtoniana y cinemática. Prepárate para aprobar sin problemas.', image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=400' },
  { id: 4, title: 'Programación Básica', duration: '4 Semanas', classes: '12 Clases', description: 'Fundamentos de algoritmos y lógica de programación en Python y C.', image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=400' },
  { id: 5, title: 'Ecuaciones Diferenciales', duration: '5 Semanas', classes: '15 Clases', description: 'Métodos de resolución y aplicaciones en la ingeniería.', image: 'https://images.unsplash.com/photo-1614113489855-66422ad300a4?auto=format&fit=crop&q=80&w=400' },
  { id: 6, title: 'Estructuras de Datos', duration: '6 Semanas', classes: '20 Clases', description: 'Listas, árboles, grafos y análisis de algoritmos avanzados.', image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=400' },
];

const CoursesSection = () => {
  return (
    <section id="cursos" className="relative z-10 max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-12 tracking-tight">
        Nuestros cursos más comprados
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
        {courses.map(course => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;

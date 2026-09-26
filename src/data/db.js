export const cursos = [
  {
    id: "c1",
    title: "Cálculo I",
    category: "Matemáticas",
    price: 10000,
    duration: "4 Semanas",
    lessons: 12,
    description: "Domina los límites, derivadas y aplicaciones prácticas con ejercicios de certámenes pasados.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "c2",
    title: "Álgebra Lineal",
    category: "Matemáticas",
    price: 10000,
    duration: "5 Semanas",
    lessons: 15,
    description: "Matrices, espacios vectoriales y transformaciones lineales explicados paso a paso.",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "c3",
    title: "Física Mecánica",
    category: "Física",
    price: 10000,
    duration: "6 Semanas",
    lessons: 18,
    description: "Mecánica newtoniana y cinemática. Prepárate para aprobar sin problemas.",
    image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "c4",
    title: "Electromagnetismo",
    category: "Física",
    price: 10000,
    duration: "6 Semanas",
    lessons: 16,
    description: "Leyes de Maxwell, campo eléctrico y magnético explicados de forma clara y directa.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "c5",
    title: "Ecuaciones Diferenciales",
    category: "Matemáticas",
    price: 10000,
    duration: "5 Semanas",
    lessons: 15,
    description: "Métodos de resolución y aplicaciones prácticas aplicadas a la ingeniería moderna.",
    image: "https://images.unsplash.com/photo-1614113489855-66422ad300a4?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "c6",
    title: "Termodinámica",
    category: "Física",
    price: 10000,
    duration: "5 Semanas",
    lessons: 14,
    description: "Leyes de la termodinámica, ciclos de energía y transferencia de calor sin complicaciones.",
    image: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=400"
  }
];

export const planes = [
  {
    id: "p1",
    title: "Mensual",
    price: 25000,
    interval: "1 mes",
    description: "Acceso básico ideal para preparar certámenes específicos.",
    features: [
      "Acceso a todos los cursos",
      "Ejercicios resueltos",
      "Soporte por comunidad"
    ],
    popular: false
  },
  {
    id: "p2",
    title: "Bimestral",
    price: 40000,
    interval: "2 meses",
    description: "Ahorra un 20% y asegura tu preparación para las pruebas parciales.",
    features: [
      "Acceso total e ilimitado",
      "Ejercicios de certámenes reales",
      "Tutorías grupales semanales"
    ],
    popular: true
  },
  {
    id: "p3",
    title: "Semestral",
    price: 80000,
    interval: "6 meses",
    description: "Asegura todo tu semestre y enfócate solo en obtener las mejores notas.",
    features: [
      "Para todo el semestre universitario",
      "Todo lo del plan Bimestral",
      "Contacto directo 1 a 1"
    ],
    popular: false
  }
];

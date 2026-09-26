import { useState, useEffect } from 'react';
import { getCursos, getPlanes } from '../services/api.js';

export const useData = () => {
  const [cursos, setCursos] = useState([]);
  const [planes, setPlanes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [cursosData, planesData] = await Promise.all([
          getCursos(),
          getPlanes()
        ]);
        setCursos(cursosData);
        setPlanes(planesData);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { cursos, planes, loading };
};

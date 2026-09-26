import { cursos, planes } from '../data/db.js';

export const getCursos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cursos);
    }, 1000);
  });
};

export const getPlanes = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(planes);
    }, 1000);
  });
};

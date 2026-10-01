import React, { createContext, useState, useContext } from 'react';
import { simulatePost } from '../services/apiMock';

// Define el contexto para compartir el usuario autenticado a toda la app sin pasar props manuales.
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  // Estado local para mantener al usuario activo persistente revisando localStorage. Cambiar 'uat_user' si cambiamos el dominio o nombre de app.
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('uat_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  // Controla si la ventana modal superpuesta de login está visible o no.
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // Función asíncrona de Login falso.
  const login = async (username, password) => {
    // Llama al endpoint de mentira.
    await simulatePost('/api/auth/login', { username, password });
    const newUser = { name: username || 'Estudiante' };
    setUser(newUser);
    // Guarda los datos en el disco para no perder el login con F5.
    localStorage.setItem('uat_user', JSON.stringify(newUser));
    setIsLoginOpen(false); // Cierra el modal solo si el login es exitoso.
  };

  // Función asíncrona de Logout. Borra todo.
  const logout = async () => {
    await simulatePost('/api/auth/logout');
    setUser(null);
    localStorage.removeItem('uat_user');
  };
  
  // Abre y cierra el modal mediante negación del valor previo (false/true).
  const toggleLogin = () => setIsLoginOpen((prev) => !prev);

  return (
    <AuthContext.Provider value={{ user, isLoginOpen, login, logout, toggleLogin }}>
      {/* Expone todo a la aplicación. */}
      {children}
    </AuthContext.Provider>
  );
};

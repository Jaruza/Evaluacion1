import React, { createContext, useState, useContext } from 'react';

import { simulatePost } from '../services/apiMock';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('uat_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const login = async (username, password) => {
    await simulatePost('/api/auth/login', { username, password });
    const newUser = { name: username || 'Estudiante' };
    setUser(newUser);
    localStorage.setItem('uat_user', JSON.stringify(newUser));
    setIsLoginOpen(false);
  };

  const logout = async () => {
    await simulatePost('/api/auth/logout');
    setUser(null);
    localStorage.removeItem('uat_user');
  };
  const toggleLogin = () => setIsLoginOpen((prev) => !prev);

  return (
    <AuthContext.Provider value={{ user, isLoginOpen, login, logout, toggleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

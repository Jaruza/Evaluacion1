import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const login = (username, password) => {
    setUser({ name: username || 'Estudiante' });
    setIsLoginOpen(false);
  };

  const logout = () => setUser(null);
  const toggleLogin = () => setIsLoginOpen((prev) => !prev);

  return (
    <AuthContext.Provider value={{ user, isLoginOpen, login, logout, toggleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

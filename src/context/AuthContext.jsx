// src/context/AuthContext.jsx
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // Estado para armazenar os dados do usuário

  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData); // Salva os dados do usuário no estado
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null); // Remove os dados do usuário no logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); // Hook para usar o AuthContext
export { AuthContext };


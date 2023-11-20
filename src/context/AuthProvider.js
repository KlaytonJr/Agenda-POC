import React, { useState, createContext, useContext } from 'react'

const AuthContext = createContext(undefined);

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState(localStorage.getItem('token') || '');

  // Função para definir o token e armazená-lo no localStorage
  const setAuthToken = (newToken) => {
    setAuth(newToken);
    localStorage.setItem('token', newToken);
  };

  // Função para remover o token e removê-lo do localStorage
  const removeAuthToken = () => {
    setAuth('');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ auth, setAuthToken, removeAuthToken }}>
      { children }
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Para usar o useAuth seu componente precisa estar dentro do AuthProvider');
  }

  return context;
}
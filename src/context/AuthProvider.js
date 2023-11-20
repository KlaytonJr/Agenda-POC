import React, { useState, createContext, useContext } from 'react'

const AuthContext = createContext(undefined);

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState(undefined);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
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
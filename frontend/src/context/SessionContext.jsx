// context/SessionContext.js
import React, { createContext, useState, useContext } from 'react';

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false); // Estado de carga

  // Función para loguear al usuario
  const login = async (email, password) => {
    setLoading(true);  // Inicia la carga
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        throw new Error('Credenciales incorrectas');
      }

      const data = await res.json();
      setUser(data.user);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Error de autenticación:", error);
      alert(error.message);
    } finally {
      setLoading(false);  // Finaliza la carga
    }
  };

  // Función para desloguear al usuario
  const logout = () => {
    setLoading(true);  // Inicia la carga
    setUser(null);
    setIsAuthenticated(false);
    setTimeout(() => setLoading(false), 2000);  // Simulación de espera
  };

  return (
    <SessionContext.Provider value={{ isAuthenticated, user, login, logout, loading }}>
      {children}
    </SessionContext.Provider>
  );
};

// Hook para usar el contexto de sesión
export const useSession = () => useContext(SessionContext);

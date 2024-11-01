// components/Home.js
import React from 'react';
import { useSession } from '../context/SessionContext.jsx';
import Loader from './Loader'; // Importa el componente Loader

const Home = () => {
  const { user, logout, loading } = useSession();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-blue-100 to-white relative overflow-hidden">
      {/* Fondo animado con degradado */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-200 to-white opacity-25 animate-bg-flow"></div>

        {loading.status && loading.type === 'logout' ? (
          <Loader message="Cerrando sesión..." />
        ) : (
        <div className="relative z-10 text-center">
          {/* Mensaje de bienvenida */}
          <h1 className="text-4xl font-bold mb-6 p-6 rounded-2xl bg-white shadow-lg text-blue-700 animate-fade-in border border-blue-200">
            Bienvenido, {user.name}!
          </h1>
          {/* Botón de cerrar sesión */}
          <button
            onClick={logout}
            className="mt-4 py-3 px-6 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95 animate-button-pop"
          >
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;

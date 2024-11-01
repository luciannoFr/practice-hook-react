// components/Login.js
import React, { useState } from 'react';
import { useSession } from '../context/SessionContext.jsx';
import { Mail, Lock } from 'lucide-react';
import Loader from './Loader'; // Importa el componente Loader

const Login = () => {
  const { login, loading } = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-white opacity-25 animate-bg-flow"></div>

        {loading.status && loading.type === 'login' ? (
          <Loader message="Iniciando sesión..." />
        ) : (
        <div className="relative z-10 w-full max-w-md px-6">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-lg p-10 space-y-6 relative overflow-hidden border border-blue-200 animate-card-pop"
          >
            {/* Borde animado */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-100 opacity-20 animate-pulse pointer-events-none rounded-2xl"></div>

            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
              Iniciar Sesión
            </h2>

            {/* Email Input */}
            <div className="relative">
              <div
                className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-all duration-300 ${
                  isEmailFocused ? 'text-blue-600' : 'text-gray-400'
                }`}
              >
                <Mail className="w-5 h-5" />
              </div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}
                className={`w-full pl-12 pr-4 py-4 text-gray-800 border-b-2 ${
                  isEmailFocused ? 'border-blue-600' : 'border-gray-300'
                } focus:outline-none transition-all duration-300 bg-transparent text-base`}
              />
            </div>

            {/* Password Input */}
            <div className="relative mt-6">
              <div
                className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-all duration-300 ${
                  isPasswordFocused ? 'text-blue-600' : 'text-gray-400'
                }`}
              >
                <Lock className="w-5 h-5" />
              </div>
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
                className={`w-full pl-12 pr-4 py-4 text-gray-800 border-b-2 ${
                  isPasswordFocused ? 'border-blue-600' : 'border-gray-300'
                } focus:outline-none transition-all duration-300 bg-transparent text-base`}
              />
            </div>

            {/* Botón de envío */}
            <button
              type="submit"
              className="w-full mt-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              Iniciar sesión
            </button>

            {/* Animación de subrayado */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-line-flow"></div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;

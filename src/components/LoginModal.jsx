import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { X } from 'lucide-react';

// Modal flotante para iniciar sesión.
const LoginModal = () => {
  // Llama las propiedades globales del contexto.
  const { isLoginOpen, login, toggleLogin } = useAuth();
  // Estados para capturar los inputs del formulario. Cambiar por objeto {} si crece mucho.
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Bloquea el botón visualmente simulando una espera a la Base de Datos.
  const [isProcessing, setIsProcessing] = useState(false);

  // Regla de React: Si no está abierto, no renderices nada (early return).
  if (!isLoginOpen) return null;

  // Intercepta el recargo de la página del submit del formulario HTML.
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    // Delega el login al contexto.
    await login(username, password);
    setIsProcessing(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md px-4">
      {/* Fondo oscuro del modal (overlay). Modificar 'bg-black/60' para oscurecer la página entera más o menos. */}
      
      {/* Caja principal del login. Cambiar 'max-w-md' por 'max-w-lg' para hacerlo más ancho. */}
      <div className="bg-[#131722] border border-zinc-800 p-8 rounded-2xl w-full max-w-md relative shadow-2xl">
        {/* Botón de cerrar cruz "X". Cambiar top-4 y right-4 para arrimarlo a la esquina. */}
        <button 
          onClick={toggleLogin} 
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        {/* Título modal. */}
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Iniciar Sesión</h2>
        
        {/* Formulario HTML. Muta el estado interno con onChange. */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-sm text-gray-400 mb-1 block">Usuario</label>
            <input 
              type="text" 
              value={username} 
              onChange={e => setUsername(e.target.value)} 
              required 
              placeholder="Ej. Pepe"
              // Estilos de caja de texto. Modificar 'focus:border-purple-500' para el color del delineado al escribir.
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white outline-none focus:border-purple-500 transition-colors" 
            />
          </div>
          
          <div>
            <label className="text-sm text-gray-400 mb-1 block">Contraseña</label>
            <input 
              type="password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              required 
              placeholder="••••••••"
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white outline-none focus:border-purple-500 transition-colors" 
            />
          </div>
          
          {/* Botón enviar. */}
          <button 
            type="submit" 
            disabled={isProcessing}
            // Cambia fondo a morado si está listo, o morado con opacidad si está cargando.
            className={`mt-4 w-full text-white font-bold py-3 rounded-lg transition-colors ${
              isProcessing ? 'bg-purple-600/50 cursor-wait' : 'bg-purple-600 hover:bg-purple-500'
            }`}
          >
            {isProcessing ? 'Cargando...' : 'Ingresar'}
          </button>
          
          <p className="text-xs text-center text-zinc-500 mt-2">Demo: pepe / 1234</p>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { X } from 'lucide-react';

const LoginModal = () => {
  const { isLoginOpen, login, toggleLogin } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isProcessing, setIsProcessing] = useState(false);

  if (!isLoginOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    await login(username, password);
    setIsProcessing(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md px-4">
      <div className="bg-[#131722] border border-zinc-800 p-8 rounded-2xl w-full max-w-md relative shadow-2xl">
        <button 
          onClick={toggleLogin} 
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Iniciar Sesión</h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-sm text-gray-400 mb-1 block">Usuario</label>
            <input 
              type="text" 
              value={username} 
              onChange={e => setUsername(e.target.value)} 
              required 
              placeholder="Ej. Pepe"
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
          
          <button 
            type="submit" 
            disabled={isProcessing}
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

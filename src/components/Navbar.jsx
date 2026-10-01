import React, { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import logoInfor from '../assets/LOGO.png';

// Navbar principal de la aplicación.
const Navbar = () => {
  // Estado que controla si el menú hamburguesa (móvil) está abierto.
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Trae los datos de usuario y las funciones de login/logout desde AuthContext.
  const { user, toggleLogin, logout } = useAuth();
  // Trae estado y acciones del carrito.
  const { cart, toggleCart, clearCart } = useCart();

  // Estado para bloquear el botón de salir durante la simulación asíncrona.
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // Cierra sesión, vacía el carrito por seguridad, y resetea el botón. Modificar quitando clearCart() si queremos mantener compras guardadas al salir.
  const handleLogout = async () => {
    setIsLoggingOut(true);
    await logout();
    clearCart();
    setIsLoggingOut(false);
  };

  // Función de scroll suave hacia los identificadores (ej. #cursos).
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Cierra el menú móvil al clickear.
  };

  // Arreglo centralizado de los links. Agregar objetos aquí si metemos nuevas secciones a la landing page.
  const navLinks = [
    { name: 'Cursos', href: '#cursos' },
    { name: 'Conócenos', href: '#conocenos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10 transition-colors duration-300">
      {/* Contenedor principal anclado al techo (fixed top-0). Modificar 'bg-black/40' para oscurecer el fondo o tocar el backdrop-blur para el efecto cristal. */}
      
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-8 py-4">
        
        {/* Zona Izquierda: Logo y nombre */}
        <div className="flex items-center gap-3">
          {/* Logo. Cambiar 'h-16' para hacerlo más alto o bajo. */}
          <img src={logoInfor} alt="Logo Infor UAT" className="h-16 w-auto object-contain"/>
          <div className="flex flex-col">
            <span className="font-extrabold text-2xl tracking-tight text-white flex items-center gap-1.5">
              INFOR<span className="text-purple-400">UAT</span>
            </span>
            <span className="text-[10px] uppercase tracking-wider text-purple-300/80 font-semibold -mt-1 hidden sm:block">
              Ingeniería Civil Informática
            </span>
          </div>
        </div>

        {/* Zona Derecha PC: Links, Usuario y Carrito. Modificar 'hidden md:flex' si queremos forzar que esto se vea en pantallas chicas. */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              {/* Enlaces de menú. La clase 'after:' dibuja la línea morada al hacer hover. */}
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-300 hover:text-white font-medium text-sm transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-purple-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
          
          {/* Lógica dinámica: ¿Está logueado o no? */}
          <li>
            {!user ? (
              // Botón de iniciar sesión para usuarios visitantes.
              <button 
                onClick={toggleLogin}
                className="px-5 py-2 text-sm font-semibold rounded-full bg-purple-600/20 text-purple-300 border border-purple-500/40 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(124,58,237,0.4)]"
              >
                Login
              </button>
            ) : (
              // Saludo y botón de salir para usuarios con sesión activa.
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-300">Hola, <span className="font-bold text-white">{user.name}</span></span>
                <button 
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="text-xs text-gray-400 hover:text-red-400 transition-colors disabled:opacity-50 disabled:cursor-wait"
                >
                  {isLoggingOut ? 'Saliendo...' : 'Salir'}
                </button>
              </div>
            )}
          </li>

          {/* Icono del Carrito (versión Escritorio). */}
          <li>
            <button onClick={toggleCart} className="relative p-2 text-gray-300 hover:text-white transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {/* Badge rojo con contador flotante. Se dibuja si cart.length > 0. Modificar 'bg-red-500' a otro color si se prefiere. */}
              {cart.length > 0 && (
                <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cart.length}
                </div>
              )}
            </button>
          </li>
        </ul>

        {/* Zona Mobile Toggle: Hamburguesa y carrito para celular */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleCart} className="relative p-2 text-gray-300">
            <ShoppingCart className="w-6 h-6" />
            {cart.length > 0 && (
              <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cart.length}
              </div>
            )}
          </button>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 focus:outline-none"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-purple-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menú Desplegable Móvil. Si isMenuOpen es true, dibuja este bloque debajo de la navbar. */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0D0F16]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all duration-300">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block py-2 text-base text-gray-300 font-medium border-b border-white/5"
                >
                  {link.name}
                </a>
              </li>
            ))}
            {!user ? (
              <li>
                <button onClick={() => { toggleLogin(); setIsMenuOpen(false); }} className="block text-center w-full py-2.5 rounded-xl font-semibold bg-purple-600 text-white">
                  Login
                </button>
              </li>
            ) : (
              <li className="flex justify-between items-center py-2">
                <span className="text-gray-300">Hola, {user.name}</span>
                <button 
                  onClick={() => { handleLogout(); setIsMenuOpen(false); }} 
                  disabled={isLoggingOut}
                  className="text-red-400 font-semibold disabled:opacity-50 disabled:cursor-wait"
                >
                  {isLoggingOut ? 'Saliendo...' : 'Salir'}
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import logoInfor from '../assets/LOGO.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Cursos', href: '#cursos' },
    { name: 'Precios', href: '#precios' },
    { name: 'Conócenos', href: '#conocenos' },
    { name: 'contacto', href: '#contacto' },
    { name: 'login', href: '#login' },
  ];

  const handleToggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-8 py-4">
        <div className="flex items-center gap-3">
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

        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            const isLogin = link.name.toLowerCase() === 'login';
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={
                    isLogin
                      ? "px-5 py-2 text-sm font-semibold rounded-full bg-purple-600/20 text-purple-300 border border-purple-500/40 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(124,58,237,0.4)]"
                      : "text-gray-300 hover:text-white font-medium text-sm transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-purple-500 hover:after:w-full after:transition-all after:duration-300"
                  }
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="md:hidden flex items-center">
          <button
            onClick={handleToggleMenu}
            type="button"
            aria-label="Alternar navegación"
            aria-expanded={isMenuOpen}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-purple-400" />
            ) : (
              <Menu className="w-6 h-6 text-gray-200" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#0D0F16]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all duration-300 animate-fadeIn">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isLogin = link.name.toLowerCase() === 'login';
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className={
                      isLogin
                        ? "block text-center w-full py-2.5 rounded-xl font-semibold bg-purple-600 text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]"
                        : "block py-2 text-base text-gray-300 hover:text-white font-medium transition-colors border-b border-white/5"
                    }
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

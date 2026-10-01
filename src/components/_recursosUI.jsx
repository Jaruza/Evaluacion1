import React from 'react';

const ElementosBase = () => {
  return (
    <div className="bg-dark-base min-h-screen p-8 flex flex-col gap-8 text-white">
      
      {/* Botón primario - Útil para acciones fuertes como enviar formularios o pagar. Modificar clases: bg-brand-600 a bg-brand-500 si lo quieres más brillante, o quitar shadow-glow-purple si molesta el brillo */}
      {/* Ubicación recomendada: CourseCard.jsx (reemplazar botón de "Agregar al carrito"), PricingSection.jsx (botón de suscripción) o HeroSection.jsx (botón principal). */}
      <button className="bg-brand-600 hover:bg-brand-500 text-white font-bold py-3 px-6 rounded-xl shadow-glow-purple transition-all duration-300 active:scale-95 w-max">
        Botón Principal
      </button>

      {/* Botón secundario - Útil para cancelar o acciones menos importantes. Modificar clases: border-dark-border a border-brand-500 para darle más peso visual, o hover:bg-dark-surface a hover:bg-white/5 para aclarar el fondo */}
      {/* Ubicación recomendada: LoginModal.jsx (botón de cancelar/cerrar) o Navbar.jsx (botón de login alternativo). */}
      <button className="bg-transparent border border-dark-border text-gray-300 hover:text-white hover:bg-dark-surface font-semibold py-3 px-6 rounded-xl transition-colors duration-300 w-max">
        Botón Secundario
      </button>

      {/* Input de texto - Útil para búsquedas, login o registro. Modificar clases: focus:border-brand-500 a focus:border-brand-600 para un borde más oscuro al escribir, o bg-dark-surface a bg-dark-card para hacerlo más o menos transparente */}
      {/* Ubicación recomendada: LoginModal.jsx (inputs de usuario/pass) o CoursesSection.jsx (para reemplazar o escalar la barra de búsqueda). */}
      <input 
        type="text" 
        placeholder="Escribe algo aquí..." 
        className="w-full max-w-md bg-dark-surface border border-dark-border text-white placeholder-gray-500 rounded-lg px-4 py-3 outline-none focus:border-brand-500 focus:shadow-glow-purple transition-all"
      />

      {/* Etiqueta de estado - Útil para mostrar si algo está activo, agotado o pendiente. Modificar clases: bg-brand-500/20 a bg-green-500/20 para cambiar el color de fondo, y text-brand-500 a text-green-400 para las letras */}
      {/* Ubicación recomendada: CourseCard.jsx (para marcar cursos "Nuevos" o "Actualizados") o CartDrawer.jsx (para indicar si un curso es suscripción). */}
      <div className="inline-flex items-center gap-2 bg-brand-500/20 border border-brand-500/30 px-3 py-1 rounded-full w-max">
        <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
        <span className="text-brand-500 text-xs font-bold uppercase tracking-wider">Activo</span>
      </div>

      {/* Tarjeta base - Útil para listar productos, posts o perfiles rápidos. Modificar clases: bg-dark-card a bg-dark-surface si quieres que sea menos opaca, o p-6 a p-4 para achicar los márgenes internos */}
      {/* Ubicación recomendada: AboutSection.jsx (si queremos tarjetas con las caras del equipo en vez de una sola foto) o un nuevo BlogSection.jsx. */}
      <div className="bg-dark-card border border-dark-border rounded-2xl p-6 flex flex-col gap-4 max-w-sm hover:border-brand-500/50 transition-colors">
        <h3 className="text-xl font-bold text-white">Título de la Tarjeta</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Texto descriptivo genérico para ver cómo queda el contraste del gris sobre el fondo oscuro de la card.
        </p>
        <button className="mt-auto bg-dark-surface border border-dark-border hover:bg-brand-600 text-white text-sm font-semibold py-2.5 rounded-lg transition-all">
          Acción menor
        </button>
      </div>

      {/* Fila de lista - Útil para armar tablas rápidas, historiales de compra o listas de usuarios. Modificar clases: border-b border-dark-border a bg-dark-card rounded-lg si prefieres que cada item sea una caja separada en lugar de una lista plana */}
      {/* Ubicación recomendada: CartDrawer.jsx (para rediseñar cómo se ven los ítems dentro del carrito) o si a futuro metemos un panel de "Mis Cursos". */}
      <div className="flex items-center justify-between py-4 border-b border-dark-border hover:bg-white/[0.02] transition-colors px-2 max-w-2xl">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center text-brand-500 font-bold">
            1
          </div>
          <div className="flex flex-col">
            <span className="text-white font-medium">Elemento de lista</span>
            <span className="text-gray-500 text-xs">Descripción corta debajo del título</span>
          </div>
        </div>
        <button className="text-brand-500 hover:text-brand-400 font-medium text-sm">
          Ver detalle
        </button>
      </div>

    </div>
  );
};

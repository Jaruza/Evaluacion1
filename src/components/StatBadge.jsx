import React from 'react';

// Etiqueta visual de estadística. Usada en el Hero. Recibe un icono, valor numérico o texto, y un label.
const StatBadge = ({ label, value, icon }) => {
  return (
    <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-sm transition-all duration-300 hover:border-purple-500/40 hover:bg-white/[0.08] hover:shadow-[0_0_15px_rgba(124,58,237,0.2)]">
      {/* Contenedor principal de la píldora. Modificar 'rounded-full' por 'rounded-md' si queremos píldoras más cuadradas. */}
      {icon && (
        // Icono inyectado como SVG.
        <span className="text-purple-400 flex items-center justify-center text-sm">
          {icon}
        </span>
      )}
      <div className="flex items-center gap-1.5 text-xs sm:text-sm">
        {value && (
          // Número grueso (Ej. "+98%"). Modificar text-white para teñir los números.
          <span className="font-bold text-white tracking-wide">
            {value}
          </span>
        )}
        {/* Etiqueta menor (Ej. "Casos de éxito"). Modificar 'text-gray-300' para cambiar el color del texto secundario. */}
        <span className="text-gray-300 font-medium">
          {label}
        </span>
      </div>
    </div>
  );
};

export default StatBadge;

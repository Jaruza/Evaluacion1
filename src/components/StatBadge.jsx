import React from 'react';

const StatBadge = ({ label, value, icon }) => {
  return (
    <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-sm transition-all duration-300 hover:border-purple-500/40 hover:bg-white/[0.08] hover:shadow-[0_0_15px_rgba(124,58,237,0.2)]">
      {icon && (
        <span className="text-purple-400 flex items-center justify-center text-sm">
          {icon}
        </span>
      )}
      <div className="flex items-center gap-1.5 text-xs sm:text-sm">
        {value && (
          <span className="font-bold text-white tracking-wide">
            {value}
          </span>
        )}
        <span className="text-gray-300 font-medium">
          {label}
        </span>
      </div>
    </div>
  );
};

export default StatBadge;

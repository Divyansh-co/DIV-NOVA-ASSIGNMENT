import React from 'react';

export default function Card({
  children,
  className = '',
  hoverEffect = true,
  glow = false,
  ...props
}) {
  return (
    <div
      className={`relative rounded-2xl transition-all duration-300 ${
        glow ? 'shadow-glow-sm hover:shadow-glow' : ''
      } ${
        hoverEffect ? 'hover:-translate-y-1 hover:border-emerald-500/50 dark:hover:border-emerald-400/50 hover:shadow-glow-sm' : ''
      } bg-white dark:bg-[#0E271F]/90 border border-slate-200/90 dark:border-emerald-800/50 backdrop-blur-md shadow-card dark:shadow-card-dark ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

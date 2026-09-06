import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  onClick,
  type = 'button',
  disabled = false,
  ariaLabel,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer active:scale-[0.98] select-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-4.5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3 gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary: 'bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 border border-emerald-400/30',
    sunrise: 'bg-gradient-to-r from-amber-500 via-orange-500 to-emerald-600 hover:from-amber-400 hover:to-emerald-500 text-white shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 border border-amber-400/30',
    secondary: 'bg-white dark:bg-[#0B2019] text-slate-700 dark:text-emerald-100 hover:bg-emerald-50/50 dark:hover:bg-[#102D23] border border-slate-200 dark:border-emerald-800/60 shadow-sm',
    outline: 'border border-emerald-500/50 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40',
    ghost: 'text-slate-600 dark:text-emerald-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#0F2921]',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-x-0.5" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />}
    </button>
  );
}

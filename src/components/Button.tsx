import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const base =
  'px-6 py-2 rounded-full font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
const variants = {
  primary:
    'bg-black text-white hover:bg-neutral-800 focus:ring-black',
  secondary:
    'bg-white text-black border border-black hover:bg-neutral-100 focus:ring-black',
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => (
  <button className={`${base} ${variants[variant]} ${className}`} {...props}>
    {children}
  </button>
);

import React from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  return (
    <span className={`inline-block animate-fade-in-up ${className}`}>{text}</span>
  );
};

// Add this to your tailwind.config.mjs for the animation:
// theme: {
//   extend: {
//     keyframes: {
//       'fade-in-up': {
//         '0%': { opacity: 0, transform: 'translateY(20px)' },
//         '100%': { opacity: 1, transform: 'translateY(0)' },
//       },
//     },
//     animation: {
//       'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.4,0,0.2,1) both',
//     },
//   },
// },

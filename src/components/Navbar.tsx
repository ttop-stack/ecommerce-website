import React from 'react';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => (
  <nav className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
    <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
      <span className="font-bold text-lg tracking-widest text-black">Taylor Topa</span>
      <ul className="flex gap-6 text-sm font-medium">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="hover:text-black/80 text-neutral-700 transition-colors duration-150"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar;

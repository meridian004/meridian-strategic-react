import React, { useState } from 'react';

// Primary navigation component with responsive mobile menu
export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);
  return (
    <header className="fixed top-0 left-0 w-full bg-darkBlue/70 backdrop-blur-md border-b border-white/10 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center space-x-3">
          <img
            src="/src/assets/logo_ms_gradient.png"
            alt="Meridian Strategic logo"
            className="h-8 w-8" />
          <span className="font-semibold text-xl tracking-wide uppercase">Meridian Strategic</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#capabilities" className="hover:text-primary transition-colors">Capabilities</a>
          <a href="#industries" className="hover:text-primary transition-colors">Industries</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <button
          className="md:hidden flex items-center justify-center focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </nav>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-darkBlue border-t border-white/10">
          <div className="px-4 py-4 space-y-2 flex flex-col">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#capabilities" className="hover:text-primary transition-colors">Capabilities</a>
            <a href="#industries" className="hover:text-primary transition-colors">Industries</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}

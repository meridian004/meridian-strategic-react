import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
// Import both WebP and PNG versions of the logo. The WebP is preferred for modern browsers
// while the PNG serves as a fallback for older browsers that do not support WebP.
// Import the final Meridian Strategic logo (shield + leaf) assets.
// WebP is preferred for modern browsers while PNG serves as a fallback for older ones.
// Import the consolidated Meridian Strategic logo (shield + wordmark).  This asset
// contains the gradient shield alongside the lowercase "meridian strategic" logotype
// exactly as provided by the client.  We use the PNG exclusively per brand
// instructions; no WebP or alternative formats are loaded to avoid unintended
// substitutions or styling changes.
// Import the official Meridian Strategic shield and wordmark provided by the client.
// These assets must be used as‑is without any modifications or stacking.  The shield
// represents the defence and sustainability mission, and the wordmark spells out
// the company name.  They are stored in src/assets with the original filenames
// the client supplied.  Despite the long names, Vite will handle them correctly.
import logoShield from '../assets/ChatGPT Image Jul 30, 2025, 10_51_23 PM.png';
import logoWordmark from '../assets/ChatGPT Image Jul 30, 2025, 11_31_08 PM.png';

/**
 * Header component renders the top navigation bar with a logo and navigation links.
 * It collapses into a hamburger menu on small screens.
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { to: '/about', label: 'About' },
    { to: '/sectors', label: 'Sectors' },
    { to: '/insights', label: 'Insights' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-charcoal/70 backdrop-blur border-b border-charcoal-700">
      {/* The header background is slightly more transparent (bg-charcoal/70) to improve contrast
          against the dark logo asset.  Maintaining a backdrop blur and border for visual
          separation while ensuring the gradient shield and wordmark remain legible. */}
      <nav className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center" aria-label="Go to homepage">
          {/* Render the official shield icon followed by the wordmark.  We preserve the
              individual assets exactly as provided (no AI re‑mixing or restyling).  The
              images are aligned horizontally with a small gap to create a single
              unified logo. */}
          <div className="flex items-center space-x-2">
            <img
              src={logoShield}
              alt="Meridian Strategic shield logo"
              className="h-10 w-auto select-none"
              draggable="false"
              loading="eager"
            />
            <img
              src={logoWordmark}
              alt="Meridian Strategic wordmark"
              className="h-10 w-auto select-none"
              draggable="false"
              loading="eager"
            />
          </div>
        </Link>
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `transition-colors font-medium ${isActive ? 'text-emerald' : 'text-white hover:text-emerald'}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <Link
            to="/contact"
            className="hidden md:inline-block bg-emerald text-charcoal font-medium px-5 py-2 rounded shadow-lg hover:scale-105 hover:underline transition-transform duration-150"
          >
            Request Consultation
          </Link>
          <button
            onClick={() => setOpen(prev => !prev)}
            className="md:hidden inline-flex items-center justify-center p-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald rounded"
            aria-label="Toggle navigation"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-charcoal border-t border-charcoal-700 px-4 py-3 space-y-2">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-2 px-3 rounded transition-colors ${isActive ? 'bg-emerald text-charcoal' : 'text-white hover:bg-charcoal-800 hover:text-emerald'}`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block bg-emerald text-charcoal text-center py-2 rounded font-medium hover:scale-105 hover:underline transition-transform duration-150"
          >
            Request Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
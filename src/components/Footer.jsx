import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer component provides company description, navigation links and contact info
 * along with trust badges/registration identifiers. It spans full width and
 * adjusts to multiple columns on larger screens.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-charcoal-900 border-t border-charcoal-700 text-sm">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-12 px-4">
        <div>
          <h3 className="font-serif text-xl mb-4">Meridian Strategic</h3>
          <p className="text-gray-400">
            We deliver resilient AI‑driven solutions across defence, infrastructure and
            logistics. Our mission is to build a safer world through responsible
            technology and ESG‑conscious innovation.
          </p>
          {/* Corporate information from official filings */}
          <div className="mt-4 text-gray-500 space-y-1">
            <p>Meridian Strategic Resources, LLC</p>
            <p>EIN: 39‑3020645</p>
            <p>Formed: Jul 3 2025 (CA)</p>
          </div>
          <div className="mt-3 space-y-1 text-gray-500">
            <p>UEI: QWERT1234</p>
            <p>CAGE: 1A2B3</p>
            <p>SDVOSB Certified</p>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-3">Navigate</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-emerald">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-emerald">About</Link>
            </li>
            <li>
              <Link to="/sectors" className="hover:text-emerald">Sectors</Link>
            </li>
            <li>
              <Link to="/insights" className="hover:text-emerald">Insights</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-emerald">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-3">Contact</h4>
          <p className="text-gray-400">
            8175 Limonite Avenue STE A<br />
            Riverside, CA 92509
          </p>
          <p className="text-gray-400 mt-2">Phone: (951) 636‑1145</p>
          <p className="text-gray-400">Alt: (844) 674‑7577</p>
          <p className="text-gray-400 mt-2">info@meridianstrategic.io</p>
        </div>
      </div>
      <div className="border-t border-charcoal-700 py-4 text-center text-gray-600">
        &copy; {year} Meridian Strategic. All rights reserved.
      </div>
    </footer>
  );
}
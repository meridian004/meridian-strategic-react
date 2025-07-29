import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-darkBlue border-t border-white/10 py-10" id="contact">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold text-lg mb-4">Meridian Strategic</h3>
          <p className="text-gray-400 text-sm">
            AI‑driven strategy, data and defence support. We partner with public and private sector organisations to deliver mission‑critical outcomes through innovation and technology.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#about" className="hover:text-primary">About Us</a></li>
            <li><a href="#capabilities" className="hover:text-primary">Capabilities</a></li>
            <li><a href="#industries" className="hover:text-primary">Industries</a></li>
            <li><a href="#trust" className="hover:text-primary">Trust & Certifications</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-sm text-gray-400 mb-4">
            123 Innovation Way<br />
            Riverside, CA 92501<br />
            United States
          </p>
          <p className="text-sm text-gray-400">
            Email: <a href="mailto:info@meridianstrategic.io" className="hover:text-primary">info@meridianstrategic.io</a>
          </p>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Meridian Strategic. All rights reserved.
      </div>
    </footer>
  );
}

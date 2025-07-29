import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import TrustSection from './components/TrustSection.jsx';
import Footer from './components/Footer.jsx';

// Main application component
export default function App() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <Hero />
        {/* Capabilities Section */}
        <section id="capabilities" className="py-20 bg-darkBlue">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-12">Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-darkBlue border border-white/10 p-6 rounded-lg shadow-sm backdrop-filter backdrop-blur-lg">
                <h3 className="text-xl font-semibold mb-4">AI & Analytics</h3>
                <p className="text-gray-400 text-sm">
                  Leveraging machine learning, computer vision and predictive analytics to uncover insights and drive autonomous operations across domains.
                </p>
              </div>
              <div className="bg-darkBlue border border-white/10 p-6 rounded-lg shadow-sm backdrop-filter backdrop-blur-lg">
                <h3 className="text-xl font-semibold mb-4">Secure Platforms</h3>
                <p className="text-gray-400 text-sm">
                  Building secure data platforms and cyber‑resilient architectures that meet rigorous compliance standards for government and industry.
                </p>
              </div>
              <div className="bg-darkBlue border border-white/10 p-6 rounded-lg shadow-sm backdrop-filter backdrop-blur-lg">
                <h3 className="text-xl font-semibold mb-4">Logistics & Procurement</h3>
                <p className="text-gray-400 text-sm">
                  Optimising supply chains with advanced optimisation algorithms, real‑time tracking and integrated support to ensure mission readiness.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Industries Section */}
        <section id="industries" className="py-20 bg-darkBlue/90">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-12">Industries</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Defence</h3>
                <p className="text-gray-400 text-sm">Autonomous systems, situational awareness and decision support for militaries.</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Energy</h3>
                <p className="text-gray-400 text-sm">Optimising grid management, predictive maintenance and asset integrity.</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Transport</h3>
                <p className="text-gray-400 text-sm">Smart logistics, autonomous vehicles and urban mobility solutions.</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Public Safety</h3>
                <p className="text-gray-400 text-sm">AI‑enabled emergency response, surveillance and disaster relief coordination.</p>
              </div>
            </div>
          </div>
        </section>
        <TrustSection />
      </main>
      <Footer />
    </>
  );
}

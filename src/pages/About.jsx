import React from 'react';
import ceoImg from '../assets/ceo.jpg';

/**
 * About page introduces the company mission and history. It features a CEO
 * portrait, an animated quote and a simple timeline of milestones.
 */
export default function About() {
  const timeline = [
    { year: 2010, text: 'Founded in Riverside, CA with a vision for resilient systems' },
    { year: 2015, text: 'Expanded to AI‑driven logistics and data analytics' },
    { year: 2020, text: 'Awarded major defence and infrastructure contracts' },
    { year: 2024, text: 'Certified SDVOSB and expanded global operations' },
  ];
  return (
    <section className="pt-24 pb-16 bg-charcoal-900">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl mb-8 text-center">About Meridian Strategic</h2>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-300">
            At Meridian Strategic we combine decades of experience with cutting‑edge AI to build smarter,
            safer and more sustainable systems. We are committed to ethical innovation and resilient
            design across defence, infrastructure and logistics.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <img
            src={ceoImg}
            alt="Portrait of the Meridian Strategic CEO"
            className="w-64 h-64 object-cover rounded-lg shadow-lg mx-auto md:mx-0"
          />
          <div className="flex-1 space-y-8">
            <blockquote className="text-emerald text-xl md:text-2xl font-serif italic relative pl-6">
              <span className="absolute left-0 top-0 text-4xl leading-none text-gold">“</span>
              Our mission is to harness strategic AI to create a resilient world where technology
              empowers humanity.
              <span className="absolute right-0 bottom-0 text-4xl leading-none text-gold">”</span>
            </blockquote>
            <div className="border-l-2 border-emerald pl-6 space-y-6">
              {timeline.map(item => (
                <div key={item.year} className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-3 w-3 bg-emerald rounded-full mt-2" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.year}</h3>
                    <p className="text-gray-400">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
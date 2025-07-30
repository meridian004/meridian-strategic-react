import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
// Import the latest hero images showcasing diverse defence and sustainability scenarios.
import heroScuba from '../assets/hero_scuba.webp';
import heroAmphibious from '../assets/hero_amphibious.webp';
import heroMarsColony from '../assets/hero_mars_colony.webp';
import heroSustainable from '../assets/hero_sustainable.webp';
import heroAirSea from '../assets/hero_air_sea.webp';

/**
 * Hero component renders the full‑screen landing section with a looping
 * animated background. Calls to action are emphasised with button micro
 * interactions and high contrast colours to maintain accessibility.
 */
export default function Hero() {
  // Define slides for the hero carousel. Using WebP images keeps file size small.
  // Define slides for the hero carousel using the new set of scenes.
  const slides = [
    {
      src: heroScuba,
      alt: 'Elite seal scuba team emerging from the surf with AI sentry robots, quadruped support units and a scanning drone',
    },
    {
      src: heroAmphibious,
      alt: 'Amphibious AI boats escorting a naval destroyer with aerial drones providing overwatch',
    },
    {
      src: heroSustainable,
      alt: 'Sustainable construction site with versatile robotic attachments building green infrastructure alongside engineers',
    },
    {
      src: heroMarsColony,
      alt: 'Mars colony under construction as robots and astronauts build habitats powered by solar arrays',
    },
    {
      src: heroAirSea,
      alt: 'Stealth aircraft hovering above the coast with amphibious AI support units emerging from the sea',
    },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Respect user preference for reduced motion: if set, do not cycle slides.
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    const interval = setInterval(() => {
      setIndex(i => (i + 1) % slides.length);
    }, 8000); // change slide every 8 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.src}
          alt={slide.alt}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${i === index ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      {/* overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/70 to-charcoal/90 pointer-events-none" />
      <div className="relative z-10 text-center px-4" role="presentation">
        <h1 className="font-serif text-4xl md:text-6xl mb-6 leading-tight" id="home-title">
          Strategic AI for a Resilient World
        </h1>
        <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-300 mb-8" id="home-subtitle">
          Harnessing data, autonomy and logistics to transform defence and infrastructure.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/contact"
            className="bg-emerald text-charcoal font-medium px-8 py-3 rounded shadow-lg transition-all duration-150 hover:scale-105 hover:underline focus:ring-2 focus:ring-emerald"
            aria-label="Request a consultation"
          >
            Request Consultation
          </Link>
          <Link
            to="/about"
            className="bg-transparent border border-emerald text-emerald font-medium px-8 py-3 rounded transition-all duration-150 hover:bg-emerald hover:text-charcoal focus:ring-2 focus:ring-emerald"
            aria-label="Learn more about Meridian Strategic"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
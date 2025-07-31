import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
// Import the latest hero images showcasing diverse defence and sustainability scenarios.
// Import a new suite of hero images aligned to Meridian Strategic’s latest narrative.
import heroConstruction from '../assets/hero_construction.webp';
import heroMarsAI from '../assets/hero_mars_ai.webp';
import heroSealDrones from '../assets/hero_seal_drones.webp';
import heroDatacenter from '../assets/hero_datacenter.webp';
import heroSemiconductor from '../assets/hero_semiconductor.webp';

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
      src: heroConstruction,
      alt: 'AI-powered construction site with autonomous robots and solar panels building sustainable infrastructure',
    },
    {
      src: heroMarsAI,
      alt: 'Mars colony under construction with autonomous robots, solar arrays and holographic AI interface lines over a red landscape',
    },
    {
      src: heroSealDrones,
      alt: 'Special forces silhouettes arriving on a beach at dusk with amphibious vehicles and autonomous sentry drones overhead',
    },
    {
      src: heroDatacenter,
      alt: 'Futuristic warehouse combining data centre racks and conveyor belts sorting fresh produce with robotic arms',
    },
    {
      src: heroSemiconductor,
      alt: 'Modern semiconductor fabrication facility with robotic arms and AI sensors monitoring wafers',
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
      {/* overlay gradient for readability: lighten slightly to showcase hero imagery while maintaining contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/60 to-charcoal/80 pointer-events-none" />
      <div className="relative z-10 text-center px-4" role="presentation">
        {/* Updated headline and tagline for Meridian Strategic */}
        <h1
          className="font-display text-4xl md:text-6xl mb-6 leading-tight"
          id="home-title"
        >
          <span className="text-emerald">Strategic Excellence</span> for Sustainable Growth
        </h1>
        <p
          className="max-w-xl mx-auto text-lg md:text-xl text-gray-300 mb-8"
          id="home-subtitle"
        >
          Driving intelligent infrastructure, AI-enabled systems, and sustainable public-sector innovation.
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
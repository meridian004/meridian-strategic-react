import React from 'react';

// Import hero background image so Vite can process it
import heroImage from '../assets/hero.jpg';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center pt-24" id="home">
      {/* Background image */}
      <img
        src={heroImage}
        alt="Autonomous drones over ocean"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-lightBlue/60 via-darkBlue/70 to-emerald/70" />
      {/* Content */}
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          AI Strategies for a Safer World
        </h1>
        <p className="mb-8 text-lg sm:text-xl text-gray-300">
          Harnessing artificial intelligence, data analytics and defence expertise to deliver mission‑critical solutions across land, sea and air.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#contact"
            className="bg-primary text-darkBlue font-medium px-6 py-3 rounded-md hover:bg-emerald transition-colors"
          >
            Schedule a Consultation
          </a>
          <a
            href="#capabilities"
            className="border border-primary text-primary font-medium px-6 py-3 rounded-md hover:bg-primary hover:text-darkBlue transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
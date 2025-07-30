import React from 'react';
import Hero from '../components/Hero';
import KpiSection from '../components/KpiSection';
import TrustBadges from '../components/TrustBadges';

/**
 * Home page composed of the hero, KPI counter section and trust badges.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <KpiSection />
      <TrustBadges />
    </>
  );
}
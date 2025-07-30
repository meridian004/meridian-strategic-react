import React from 'react';

/**
 * TrustBadges displays a row of compliance and registration identifiers to
 * establish credibility with potential clients. Replace identifiers with
 * actual values as necessary.
 */
export default function TrustBadges() {
  const badges = [
    { label: 'UEI: QWERT1234' },
    { label: 'CAGE: 1A2B3' },
    { label: 'SDVOSB Certified' },
    { label: 'ISO 27001 Ready' },
  ];
  return (
    <section className="py-12 bg-charcoal-800">
      <div className="container mx-auto px-4 flex flex-wrap justify-center gap-6">
        {badges.map((badge) => (
          <div
            key={badge.label}
            className="flex items-center space-x-2 bg-charcoal-700 px-4 py-2 rounded shadow hover:shadow-emerald/40 transition-shadow"
          >
            <span className="w-2 h-2 bg-emerald rounded-full" />
            <span className="text-gray-300 text-sm whitespace-nowrap">{badge.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
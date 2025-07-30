import React from 'react';

/**
 * Sectors page highlights our focus on Federal, State and City clients with
 * succinct descriptions. Each card uses a gradient border and subtle hover
 * effect to align with the overall design language.
 */
export default function Sectors() {
  const sectors = [
    {
      title: 'Federal',
      description:
        'Secure AI and automation for federal agencies and defence operations. From autonomous surveillance to logistics planning, we deliver mission‑critical capabilities.',
    },
    {
      title: 'State',
      description:
        'Modernise infrastructure and emergency management with predictive analytics, intelligent transportation and resilient energy systems built for states.',
    },
    {
      title: 'City',
      description:
        'Empower smart cities with real‑time data fusion, autonomous drones for inspection and responsive services that enhance quality of life.',
    },
  ];
  return (
    <section className="pt-24 pb-16 bg-charcoal-900">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl mb-10 text-center">Sectors We Serve</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sectors.map((sector) => (
            <div
              key={sector.title}
              className="relative p-6 border border-charcoal-700 rounded-lg bg-charcoal-800 hover:border-emerald transition-colors"
            >
              <h3 className="font-serif text-2xl mb-4 text-emerald">{sector.title}</h3>
              <p className="text-gray-300 leading-relaxed">{sector.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
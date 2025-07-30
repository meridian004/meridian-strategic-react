import React from 'react';

/**
 * Custom hook to animate a numeric value from 0 to the target over a given
 * duration. Uses requestAnimationFrame for smoothness and resets when the
 * target changes.
 */
function useCountUp(target, duration = 2500) {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    let startTime;
    function tick(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [target, duration]);
  return count;
}

function CountUpCard({ title, target }) {
  const count = useCountUp(target);
  return (
    <div className="bg-charcoal-800 rounded-lg p-6 shadow-lg hover:shadow-emerald/40 transition-shadow duration-300">
      <div className="text-4xl font-semibold text-emerald mb-2">{count}+</div>
      <div className="text-gray-300 font-medium">{title}</div>
    </div>
  );
}

/**
 * KpiSection displays key performance indicators with animated count up
 * effects. Icons can be added later if desired.
 */
export default function KpiSection() {
  const kpis = [
    { title: 'Years of Innovation', target: 15 },
    { title: 'Projects Delivered', target: 100 },
    { title: 'Countries Supported', target: 24 },
    { title: 'Domains Impacted', target: 5 },
  ];
  return (
    <section className="py-16 bg-charcoal-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {kpis.map(kpi => (
            <CountUpCard key={kpi.title} {...kpi} />
          ))}
        </div>
      </div>
    </section>
  );
}
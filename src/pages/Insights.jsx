import React from 'react';
import insights1 from '../assets/insights1.jpg';
import insights2 from '../assets/insights2.jpg';
import hero from '../assets/hero.webp';

/**
 * Insights page displays sample blog posts about AI, robotics and logistics.
 */
export default function Insights() {
  const posts = [
    {
      id: 1,
      title: 'The Future of AI‑Driven Defence',
      date: 'July 2025',
      image: insights1,
      excerpt:
        'Discover how strategic artificial intelligence is transforming national defence through predictive analytics and autonomous systems.',
    },
    {
      id: 2,
      title: 'Reinventing Logistics with Autonomous Drones',
      date: 'June 2025',
      image: insights2,
      excerpt:
        'A look at how drone swarms and intelligent routing are revolutionising supply chains and humanitarian aid.',
    },
    {
      id: 3,
      title: 'Building Resilient Infrastructure Through Data',
      date: 'May 2025',
      image: hero,
      excerpt:
        'Data fusion and machine learning models are enabling smarter infrastructure planning and disaster response.',
    },
  ];
  return (
    <section className="pt-24 pb-16 bg-charcoal-900">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl mb-10 text-center">Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-charcoal-800 rounded-lg overflow-hidden shadow-lg hover:shadow-emerald/40 transition-shadow">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-serif text-2xl mb-2 text-emerald">{post.title}</h3>
                <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                <p className="text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>
                <a href="#" className="text-emerald hover:underline font-medium">
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
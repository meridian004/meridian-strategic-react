import React from 'react';

/**
 * Contact page provides a simple contact form along with an embedded
 * Calendly scheduler. Replace the Calendly URL with your actual scheduling
 * link. The form does not submit anywhere but can be wired up to a backend
 * or third‑party service as needed.
 */
export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you shortly.');
  }
  return (
    <section className="pt-24 pb-16 bg-charcoal-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-serif text-3xl md:text-4xl mb-8 text-center">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full bg-charcoal-800 border border-charcoal-700 rounded px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-emerald"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full bg-charcoal-800 border border-charcoal-700 rounded px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-emerald"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                required
                className="w-full bg-charcoal-800 border border-charcoal-700 rounded px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-emerald"
                placeholder="Tell us about your project or inquiry"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-emerald text-charcoal font-medium px-6 py-3 rounded shadow hover:scale-105 hover:underline transition-transform duration-150"
            >
              Submit
            </button>
          </form>
          <div>
            {/* Contact details shown above the Calendly embed. These are sourced from official filings
               including the City of Riverside business license and EIN notice. */}
            <div className="space-y-1 text-gray-400 text-sm mb-4">
              <p>
                <strong>Address:</strong> 8175 Limonite Avenue STE A, Riverside, CA 92509
              </p>
              <p>
                <strong>Phone:</strong> (951) 636‑1145
              </p>
              <p>
                <strong>Alt&nbsp;Phone:</strong> (844) 674‑7577
              </p>
              <p>
                <strong>EIN:</strong> 39‑3020645
              </p>
            </div>
            {/* Embedded Calendly scheduler */}
            <div className="relative w-full h-0 pb-[75%] rounded overflow-hidden">
              <iframe
                src="https://calendly.com" // replace with actual Calendly link
                title="Schedule a consultation"
                className="absolute top-0 left-0 w-full h-full border-0"
              ></iframe>
            </div>
            <p className="mt-3 text-sm text-gray-500">
              Use our Calendly to book time with a Meridian Strategic specialist.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
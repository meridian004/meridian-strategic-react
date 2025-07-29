import React from 'react';

// Placeholder trust badges section
export default function TrustSection() {
  return (
    <section id="trust" className="py-16 bg-darkBlue">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-semibold mb-8">Trusted by Leading Organisations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/US_Department_of_Defense_seal.svg" alt="Department of Defense" className="h-12 mx-auto" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/NASA_Worm_logo.svg" alt="NASA" className="h-10 mx-auto" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/International_Energy_Agency_logo.svg" alt="IEA" className="h-10 mx-auto" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2b/DARPA_Logo.gif" alt="DARPA" className="h-8 mx-auto" />
        </div>
      </div>
    </section>
  );
}

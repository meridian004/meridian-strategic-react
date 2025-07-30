import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Sectors from './pages/Sectors';
import Contact from './pages/Contact';
import Insights from './pages/Insights';

export default function App() {
  const location = useLocation();
  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-charcoal text-white font-sans">
      <Header />
      <main className="flex-1 mt-16 sm:mt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/insights" element={<Insights />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
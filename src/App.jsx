import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Features from './components/Features';
import AboutProduct from './components/AboutProduct';
import HowItWorks from './components/HowItWorks';
import Statistics from './components/Statistics';
import Solutions from './components/Solutions';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import DemoModal from './components/DemoModal';
import Watermark from './components/Watermark';

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('nova_theme') || 'dark';
    } catch {
      return 'dark';
    }
  });

  const [isDemoOpen, setIsDemoOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('nova_theme', theme);
    } catch {
      // ignore storage errors
    }

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#061510] text-slate-900 dark:text-emerald-50 transition-colors duration-300">
      {/* 1. Navigation Bar */}
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onOpenDemo={() => setIsDemoOpen(true)} 
      />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero onOpenDemo={() => setIsDemoOpen(true)} />

        {/* 3. Trusted By */}
        <TrustedBy />

        {/* 4. Features */}
        <Features />

        {/* 5. Product / About Section */}
        <AboutProduct />

        {/* 6. How It Works */}
        <HowItWorks />

        {/* 7. Statistics */}
        <Statistics />

        {/* 8. Solutions / Use Cases */}
        <Solutions />

        {/* 9. Testimonials */}
        <Testimonials />

        {/* 10. Pricing */}
        <Pricing onOpenDemo={() => setIsDemoOpen(true)} />

        {/* 11. FAQ */}
        <FAQ />

        {/* 12. Final CTA */}
        <FinalCTA onOpenDemo={() => setIsDemoOpen(true)} />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* Interactive Floating Utilities, Modals & Watermark */}
      <BackToTop />
      <Watermark />
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
}

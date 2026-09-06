import React, { useState, useEffect } from 'react';
import { navLinks, siteConfig } from '../data/navigation';
import Button from './ui/Button';
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';

export default function Navbar({ theme, toggleTheme, onOpenDemo }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Add background shadow and blur when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smoothly scroll to a section on click
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navHeight = 76;
      const elementTop = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementTop - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'py-3 bg-white/90 dark:bg-[#061510]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-emerald-800/40 shadow-sm'
          : 'py-4.5 bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between" aria-label="Main Navigation">
        {/* Brand Logo with Tropical Jade Monogram */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 group focus:outline-none"
          aria-label="NOVA Home"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-600 via-teal-500 to-amber-400 text-white flex items-center justify-center font-display font-bold text-sm shadow-md shadow-emerald-600/25">
            N
          </div>
          <span className="text-lg font-display font-bold tracking-tight text-slate-900 dark:text-white">
            NOVA
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-emerald-100/80">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right CTA + Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          {/* Light / Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            type="button"
            className="p-2 rounded-lg text-slate-500 dark:text-emerald-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-emerald-950/60 transition-colors cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Nav CTA */}
          <Button
            variant="primary"
            size="sm"
            onClick={(e) => handleNavClick(e, '#pricing')}
            icon={ArrowRight}
          >
            {siteConfig.ctaPrimary}
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            type="button"
            className="p-2 rounded-lg text-slate-500 dark:text-emerald-400 hover:bg-slate-100 dark:hover:bg-emerald-950/60"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="p-2 rounded-lg text-slate-700 dark:text-emerald-200 hover:bg-slate-100 dark:hover:bg-emerald-950/60"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-white dark:bg-[#0B2019] border-b border-slate-200 dark:border-emerald-800/60 px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-emerald-100 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <div className="pt-3 border-t border-slate-200 dark:border-emerald-800/60 flex flex-col gap-2">
              <Button
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={(e) => handleNavClick(e, '#pricing')}
                icon={ArrowRight}
              >
                {siteConfig.ctaPrimary}
              </Button>
              <Button
                variant="secondary"
                size="md"
                className="w-full justify-center"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
              >
                {siteConfig.ctaSecondary}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

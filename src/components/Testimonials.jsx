import React, { useState, useEffect } from 'react';
import { testimonialsData } from '../data/testimonials';
import Card from './ui/Card';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = testimonialsData.length;

  // Autoplay through testimonials every 5 seconds, unless hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="py-20 sm:py-28 bg-slate-50/60 dark:bg-[#071912] border-t border-slate-200/80 dark:border-emerald-900/40 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-1.5 mb-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Real Customer Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mt-1 mb-3">
            Loved by leaders building core products
          </h2>
          <p className="text-base text-slate-600 dark:text-emerald-100/70">
            See how forward-thinking product teams accelerate their roadmap with NOVA.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="max-w-3xl mx-auto text-left"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Card className="p-7 sm:p-10 border-slate-200 dark:border-emerald-800/40 bg-white dark:bg-[#0E271F] shadow-xl relative">
            {/* 5-Star Rating */}
            <div className="flex items-center gap-1 mb-5">
              {[...Array(current.stars)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Key Quote Highlight */}
            <div className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white mb-3">
              "{current.highlight}"
            </div>

            {/* Full Quote Body */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-emerald-100/80 leading-relaxed mb-8">
              {current.content}
            </p>

            {/* Author details */}
            <div className="flex items-center justify-between pt-5 border-t border-slate-100 dark:border-emerald-900/40">
              <div className="flex items-center gap-3">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-11 h-11 rounded-full object-cover border border-slate-200 dark:border-emerald-700/60"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                      {current.name}
                    </h4>
                    {current.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" title="Verified Customer" />
                    )}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-emerald-400/70">
                    {current.role} · <span className="font-medium text-slate-700 dark:text-emerald-200">{current.company}</span>
                  </p>
                </div>
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-lg border border-slate-200 dark:border-emerald-800/60 text-slate-600 dark:text-emerald-200 hover:bg-slate-100 dark:hover:bg-[#13352A] transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-lg border border-slate-200 dark:border-emerald-800/60 text-slate-600 dark:text-emerald-200 hover:bg-slate-100 dark:hover:bg-[#13352A] transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </Card>

          {/* Dot Indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-200 rounded-full h-2 ${
                  currentIndex === idx 
                    ? 'w-6 bg-emerald-500' 
                    : 'w-2 bg-slate-300 dark:bg-emerald-950 hover:bg-amber-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { statsData } from '../data/stats';
import Card from './ui/Card';
import { Users, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

const icons = [Users, TrendingUp, ShieldCheck, Zap];

// A clean, easy-to-understand animated counter component
function StatCounter({ target, decimals = 0, prefix = '', suffix = '', isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = target;
    const duration = 1500; // 1.5 seconds
    const steps = 30;
    const increment = end / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(decimals > 0 ? parseFloat(start.toFixed(decimals)) : Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, target, decimals]);

  const formatted = decimals > 0 ? count.toFixed(decimals) : count.toLocaleString();

  return (
    <span>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export default function Statistics() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Trigger animation when the section is scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-16 sm:py-24 bg-slate-50/60 dark:bg-[#071912] border-y border-slate-200/80 dark:border-emerald-900/40 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Measurable Results
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white mt-1 mb-2">
            Proven velocity at real scale
          </h2>
          <p className="text-sm text-slate-600 dark:text-emerald-100/70">
            Average metrics recorded across fast-moving product and engineering organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((item, index) => {
            const Icon = icons[index] || Zap;
            return (
              <Card
                key={item.label}
                hoverEffect={true}
                className="p-6 text-center border-slate-200 dark:border-emerald-800/40 bg-white dark:bg-[#0E271F]"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-emerald-50 dark:bg-[#081C15] text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-200 dark:border-emerald-800/60">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mb-1">
                  <StatCounter 
                    target={item.value} 
                    decimals={item.decimals} 
                    prefix={item.prefix} 
                    suffix={item.suffix} 
                    isVisible={isVisible} 
                  />
                </div>

                <div className="text-sm font-semibold text-slate-800 dark:text-emerald-100 mb-1">
                  {item.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-emerald-400/60">
                  {item.sublabel}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

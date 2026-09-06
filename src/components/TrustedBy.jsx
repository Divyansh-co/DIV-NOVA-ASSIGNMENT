import React from 'react';
import { trustedCompanies } from '../data/trustedBy';

export default function TrustedBy() {
  return (
    <section className="py-12 border-y border-slate-200/80 dark:border-emerald-900/40 bg-white/50 dark:bg-[#081B14]/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold tracking-widest text-slate-400 dark:text-emerald-400/60 uppercase mb-8">
          Trusted by modern engineering teams at fast-growing innovators
        </p>

        {/* Logotypes row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 sm:gap-8 items-center justify-center">
          {trustedCompanies.map((company) => (
            <div
              key={company.id}
              className="flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 group cursor-default hover:bg-slate-100/50 dark:hover:bg-[#0E271F]/80"
            >
              <div className="flex items-center gap-2 text-slate-400 dark:text-emerald-400/50 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors duration-300">
                <span className="text-xl font-bold font-mono group-hover:scale-110 transition-transform duration-300">
                  {company.symbol}
                </span>
                <span className="font-display font-extrabold text-sm sm:text-base tracking-wider">
                  {company.name}
                </span>
              </div>
              <span className="text-[10px] text-slate-400 dark:text-emerald-400/40 tracking-tight font-medium mt-0.5 opacity-70 group-hover:opacity-100 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-all">
                {company.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Watermark() {
  return (
    <aside 
      aria-label="Creator attribution"
      className="fixed bottom-6 left-6 z-40 group select-none hidden sm:block"
    >
      <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white/90 dark:bg-[#0B2019]/90 backdrop-blur-md border border-slate-200 dark:border-emerald-800/60 shadow-lg shadow-emerald-950/20 hover:border-emerald-400/50 hover:shadow-glow-sm transition-all duration-300">
        {/* Monogram Badge in Tropical Jade Sunrise */}
        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-emerald-600 via-teal-500 to-amber-500 flex items-center justify-center text-white text-[10px] font-mono font-bold shadow-sm">
          DM
        </div>

        {/* Watermark Text */}
        <div className="flex items-center gap-1.5 text-xs">
          <span className="text-slate-500 dark:text-emerald-400/70 text-[11px] font-sans">
            Crafted by
          </span>
          <span className="font-semibold font-display tracking-tight text-slate-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
            Divyansh Mishra
          </span>
          <Sparkles className="w-3 h-3 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
        </div>
      </div>
    </aside>
  );
}

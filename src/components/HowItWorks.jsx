import React from 'react';
import { howItWorksSteps } from '../data/howItWorks';
import Card from './ui/Card';
import { Link2, Sliders, Bot, Rocket, Sparkles } from 'lucide-react';

const iconMap = {
  Link2: Link2,
  Sliders: Sliders,
  Bot: Bot,
  Rocket: Rocket
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-slate-50/50 dark:bg-[#061510] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-950/60 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Workflow Velocity
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            How NOVA turns intent into execution.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-emerald-100/70">
            From setup to shipping in four straightforward steps. No complex ML infrastructure or brittle glue code required.
          </p>
        </div>

        {/* Steps: Horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Tropical Jade Sunrise Connecting Line for Desktop */}
          <div 
            className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 -translate-y-6 bg-gradient-to-r from-emerald-500/20 via-teal-400 to-amber-400/40 -z-0"
            aria-hidden="true" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {howItWorksSteps.map((item, idx) => {
              const Icon = iconMap[item.icon] || Bot;
              return (
                <Card
                  key={item.step}
                  hoverEffect={true}
                  className="p-6 sm:p-7 flex flex-col justify-between group border-slate-200 dark:border-emerald-800/40 bg-white/95 dark:bg-[#0E271F]/90 hover:border-emerald-400/50 hover:shadow-glow-sm"
                >
                  <div>
                    {/* Step number badge & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-display font-black text-2xl text-slate-300 dark:text-emerald-900/80 group-hover:text-amber-400 transition-colors">
                        {item.step}
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-[#081C15] border border-emerald-200 dark:border-emerald-800/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-600 group-hover:text-white transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="text-[11px] font-mono uppercase tracking-wider text-amber-500 dark:text-amber-400 font-semibold mb-1">
                      {item.subtitle}
                    </div>

                    <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white mb-2.5">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-emerald-100/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Step visual indicator */}
                  <div className="pt-6 mt-6 border-t border-slate-100 dark:border-emerald-900/40 flex items-center justify-between text-xs text-slate-400 dark:text-emerald-400/50">
                    <span className="font-medium">Stage {idx + 1} of 4</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60 group-hover:bg-amber-400 group-hover:scale-125 transition-all" />
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

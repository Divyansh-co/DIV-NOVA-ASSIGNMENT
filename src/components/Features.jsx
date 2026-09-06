import React from 'react';
import { featuresData } from '../data/features';
import Card from './ui/Card';
import { 
  GitBranch, 
  Layers, 
  Cpu, 
  Sparkles, 
  ShieldCheck, 
  BarChart3,
  ArrowUpRight
} from 'lucide-react';

const iconMap = {
  GitBranch: GitBranch,
  Layers: Layers,
  Cpu: Cpu,
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck,
  BarChart3: BarChart3
};

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-slate-50/70 dark:bg-[#061510] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-950/60 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Core Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Engineered for teams that refuse to move slowly.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-emerald-100/70">
            NOVA combines deep contextual memory graphs with autonomous execution loops, turning tedious engineering and operational work into one-click automations.
          </p>
        </div>

        {/* 6 Feature Cards Grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuresData.map((feature) => {
            const IconComponent = iconMap[feature.icon] || Sparkles;
            return (
              <Card
                key={feature.id}
                hoverEffect={true}
                className="p-7 flex flex-col justify-between group border-slate-200 dark:border-emerald-800/40 bg-white/90 dark:bg-[#0E271F]/90 hover:border-emerald-500/50 dark:hover:border-emerald-400/50 hover:shadow-glow-sm"
              >
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/15 via-teal-500/20 to-amber-500/15 dark:from-emerald-500/20 dark:to-teal-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/30 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-600 group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-[#081C15] text-slate-600 dark:text-emerald-300/80 border border-slate-200 dark:border-emerald-800/60">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-emerald-100/70 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>

                {/* Metric Footer */}
                <div className="pt-4 border-t border-slate-100 dark:border-emerald-900/40 flex items-center justify-between text-xs">
                  <span className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <ArrowUpRight className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                    {feature.metric}
                  </span>
                  <span className="text-slate-400 dark:text-emerald-400/50 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                    Learn more &rarr;
                  </span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

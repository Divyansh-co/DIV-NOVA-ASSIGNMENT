import React, { useState } from 'react';
import { solutionsData } from '../data/solutions';
import Card from './ui/Card';
import Button from './ui/Button';
import { 
  Zap, 
  Briefcase, 
  Building2, 
  Globe2, 
  Check, 
  ArrowRight,
  Sparkles 
} from 'lucide-react';

const iconMap = {
  Zap: Zap,
  Briefcase: Briefcase,
  Building2: Building2,
  Globe2: Globe2
};

export default function Solutions() {
  const [activeTab, setActiveTab] = useState('startups');

  // Find the selected persona from our solutions array
  const current = solutionsData.find((item) => item.id === activeTab) || solutionsData[0];

  const handleScrollToPricing = () => {
    const element = document.querySelector('#pricing');
    if (element) {
      const navHeight = 76;
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementTop - navHeight, behavior: 'smooth' });
    }
  };

  return (
    <section id="solutions" className="py-20 sm:py-28 bg-white dark:bg-[#061510] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-1.5 mb-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Tailored Workflows
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mt-1 mb-3">
            Built for how modern teams work
          </h2>
          <p className="text-base text-slate-600 dark:text-emerald-100/70">
            Select your team size to see how NOVA integrates with your existing workflow.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {solutionsData.map((item) => {
            const Icon = iconMap[item.icon] || Zap;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white shadow-md shadow-emerald-700/20'
                    : 'bg-slate-100 dark:bg-[#0E271F] text-slate-600 dark:text-emerald-200/70 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-emerald-800/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Panel */}
        <Card className="p-6 sm:p-10 border-slate-200 dark:border-emerald-800/40 bg-slate-50/50 dark:bg-[#0B2019]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left">
            {/* Left Column: Details */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 px-2.5 py-1 rounded bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60">
                {current.badge}
              </span>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
                {current.headline}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-emerald-100/70 leading-relaxed">
                {current.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 pt-1">
                {current.metrics.map((m, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white dark:bg-[#0E271F] border border-slate-200/80 dark:border-emerald-800/40 shadow-sm">
                    <div className="text-2xl font-display font-bold text-gradient-sunrise">
                      {m.value}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-emerald-400/70 mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Checklist */}
              <div className="space-y-2.5 pt-1">
                {current.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-emerald-100/80">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleScrollToPricing}
                  icon={ArrowRight}
                >
                  Configure for {current.label}
                </Button>
              </div>
            </div>

            {/* Right Column: Simulated Preview */}
            <div className="lg:col-span-5">
              <div className="rounded-xl bg-white dark:bg-[#081813] p-5 sm:p-6 border border-slate-200 dark:border-emerald-800/60 shadow-sm text-left font-mono">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-emerald-800/60">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs text-slate-800 dark:text-emerald-100 font-sans font-semibold">{current.preview.type}</span>
                  </div>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/60">
                    {current.preview.status}
                  </span>
                </div>

                <div className="text-sm text-slate-900 dark:text-white font-sans font-medium mb-1">
                  {current.preview.title}
                </div>
                <div className="text-xs text-slate-500 dark:text-emerald-400/60 mb-5">
                  {current.preview.stepsCompleted}
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#0E271F] border border-slate-100 dark:border-emerald-800/40 text-slate-700 dark:text-emerald-200/80 flex items-center justify-between">
                    <span>Repository sync</span>
                    <span className="text-emerald-600 dark:text-emerald-400 text-[10px]">CONNECTED</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#0E271F] border border-slate-100 dark:border-emerald-800/40 text-slate-700 dark:text-emerald-200/80 flex items-center justify-between">
                    <span>Workflow routing</span>
                    <span className="text-amber-500 dark:text-amber-400 text-[10px]">OPTIMIZED</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#0E271F] border border-slate-100 dark:border-emerald-800/40 text-slate-700 dark:text-emerald-200/80 flex items-center justify-between">
                    <span>Governance audit</span>
                    <span className="text-emerald-600 dark:text-emerald-400 text-[10px]">ENFORCED</span>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-emerald-800/60 flex items-center justify-between text-[11px] text-slate-400 dark:text-emerald-400/60">
                  <span>Latency: 12ms</span>
                  <span>Health: 100%</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

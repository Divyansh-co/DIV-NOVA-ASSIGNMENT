import React from 'react';
import { aboutData } from '../data/about';
import { 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  Layers, 
  Lock, 
  GitFork 
} from 'lucide-react';

export default function AboutProduct() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white dark:bg-[#061510] border-t border-slate-200/80 dark:border-emerald-900/40 transition-colors duration-300 relative overflow-hidden">
      {/* Background Tropical Jade Sunrise soft glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-br from-emerald-500/15 via-teal-500/10 to-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative & Why it Matters */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-950/60 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              {aboutData.tag}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Traditional tools record your work.{' '}
              <span className="text-gradient">NOVA executes it.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-emerald-100/70 leading-relaxed">
              {aboutData.subheading}
            </p>

            {/* Highlights List */}
            <div className="space-y-4 pt-2">
              {aboutData.highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3.5 group">
                  <div className="mt-1 p-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-500/40 text-emerald-600 dark:text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-emerald-100/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Stats Callout with Sunrise highlight */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-amber-50/50 dark:from-[#0B2019] dark:via-[#0E271F] dark:to-[#13352A] border border-emerald-100 dark:border-emerald-700/40 flex items-center gap-4 mt-6">
              <div className="text-3xl font-display font-extrabold text-gradient-sunrise">
                {aboutData.statsSnippet.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-700 dark:text-emerald-200 font-medium">
                {aboutData.statsSnippet.label}
              </div>
            </div>
          </div>

          {/* Right Column: Split Visual / Interactive Mockup */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#0B2019] border border-slate-200 dark:border-emerald-800/60 shadow-2xl backdrop-blur-xl">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200 dark:border-emerald-800/60">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-sm">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">NOVA Reasoning Loop</h4>
                    <span className="text-[10px] text-slate-500 dark:text-emerald-400/60">Execution Phase: Synthesis & Verification</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-mono text-xs border border-emerald-500/30">
                  AUTONOMOUS
                </span>
              </div>

              {/* Step 1: Input Ingestion */}
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0E271F] border border-slate-200/80 dark:border-emerald-800/40">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-emerald-400/60 mb-1 font-mono">
                    <span>STEP 1: CONTEXT RETRIEVAL</span>
                    <span className="text-amber-500 dark:text-amber-400 font-semibold">14ms</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-emerald-100/90">
                    <Layers className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                    <span>Loaded schema & PR requirements from Notion + GitHub</span>
                  </div>
                </div>

                {/* Step 2: Agent Parallel Execution */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0E271F] border border-emerald-500/40 relative">
                  <div className="flex items-center justify-between text-xs text-emerald-600 dark:text-emerald-400 mb-1 font-mono">
                    <span>STEP 2: PARALLEL AGENT EXECUTION</span>
                    <span className="text-emerald-500 dark:text-emerald-400 font-semibold">COMPLETED</span>
                  </div>
                  <div className="space-y-2 mt-2">
                    <div className="flex items-center justify-between text-xs text-slate-600 dark:text-emerald-200/80">
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Security Linter Agent (Zero vulnerabilities detected)
                      </span>
                      <span className="font-mono text-[10px] text-emerald-500 dark:text-emerald-400">PASS</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-600 dark:text-emerald-200/80">
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        Performance Optimizer (Payload reduced 28%)
                      </span>
                      <span className="font-mono text-[10px] text-amber-500 dark:text-amber-400">PASS</span>
                    </div>
                  </div>
                </div>

                {/* Step 3: Human Approval Gate */}
                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-[#13352A] border border-emerald-200 dark:border-emerald-600/40 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-slate-900 dark:text-white flex items-center gap-1.5 mb-0.5">
                      <Lock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      Governance Approval Gate
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-emerald-200/70">
                      Signed off by Tech Lead token #7912
                    </p>
                  </div>
                  <button className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium transition-colors shadow-sm cursor-pointer">
                    Verified
                  </button>
                </div>
              </div>

              {/* Live Output Banner */}
              <div className="mt-5 pt-4 border-t border-slate-200 dark:border-emerald-800/60 flex items-center justify-between text-xs text-slate-500 dark:text-emerald-400/60 font-mono">
                <span className="flex items-center gap-1.5">
                  <GitFork className="w-3.5 h-3.5 text-slate-400 dark:text-emerald-500" />
                  Branch: feat/orchestration-v3
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-semibold">
                  Ready to Merge
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

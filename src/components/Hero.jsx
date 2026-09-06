import React from 'react';
import Button from './ui/Button';
import { siteConfig } from '../data/navigation';
import { 
  Play, 
  ArrowRight, 
  Check, 
  GitPullRequest, 
  ShieldCheck, 
  Clock,
  Sparkles 
} from 'lucide-react';

export default function Hero({ onOpenDemo }) {
  // Smoothly scroll down to the pricing table
  const scrollToPricing = () => {
    const element = document.querySelector('#pricing');
    if (element) {
      const navHeight = 76;
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementTop - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-slate-50/50 dark:bg-[#061510] transition-colors duration-200">
      {/* Background subtle grid & Sunrise ambient glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Header */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Release Badge with Sunrise Amber accent */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-700/60 text-emerald-800 dark:text-emerald-300 text-xs font-medium mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-sm shadow-amber-400/50" />
            <span className="font-semibold tracking-wide">NOVA 3.0</span>
            <span className="text-slate-300 dark:text-emerald-800">|</span>
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-400" />
              Tropical Jade Sunrise Architecture
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl font-display font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-5">
            Build Better.{' '}
            <span className="text-gradient block sm:inline">
              Work Smarter.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-emerald-100/70 max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
            The unified AI workspace that brings deep context to software teams. Automate chore pull requests, synthesize technical specs, and accelerate delivery with human review at every step.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <Button
              variant="primary"
              size="lg"
              onClick={scrollToPricing}
              icon={ArrowRight}
              className="w-full sm:w-auto"
            >
              {siteConfig.ctaPrimary}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={onOpenDemo}
              icon={Play}
              iconPosition="left"
              className="w-full sm:w-auto"
            >
              {siteConfig.ctaSecondary}
            </Button>
          </div>

          {/* Trust Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500 dark:text-emerald-200/60">
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-500" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-500" />
              <span>SOC2 Type II certified</span>
            </div>
          </div>
        </div>

        {/* Product Interface Mockup */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto">
          <div className="rounded-2xl bg-white dark:bg-[#0B2019] border border-slate-200 dark:border-emerald-800/60 shadow-2xl overflow-hidden">
            {/* Window Top Bar */}
            <div className="px-4 py-3 bg-slate-50 dark:bg-[#081813] border-b border-slate-200 dark:border-emerald-800/60 flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                </div>
                <span className="font-mono text-[11px] text-slate-400 dark:text-emerald-400/60 ml-2">
                  nova-workspace / core-engine / pull-requests
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-slate-600 dark:text-emerald-300">All checks operational</span>
              </div>
            </div>

            {/* Application Dashboard Grid */}
            <div className="p-5 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 text-left">
              {/* Left Column: Code Review & Diff */}
              <div className="lg:col-span-7 space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0E271F] border border-slate-200/80 dark:border-emerald-800/40">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-white">
                      <GitPullRequest className="w-4 h-4 text-emerald-400" />
                      <span>PR #482 · Authentication Session Mutex Lock</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700/60">
                      14/14 CI Passed
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-emerald-100/70 leading-normal">
                    Resolved token refresh race condition under concurrent requests. Stress tested against 50 parallel client threads.
                  </p>
                </div>

                {/* Syntax-Highlighted Code Diff */}
                <div className="rounded-xl bg-slate-950 dark:bg-[#05110D] p-4 border border-slate-800 dark:border-emerald-900/60 font-mono text-[11px] sm:text-xs overflow-x-auto text-slate-300">
                  <div className="text-slate-500 dark:text-emerald-500/60 text-[10px] pb-2 border-b border-slate-800 dark:border-emerald-900/40 mb-2 flex justify-between">
                    <span>services/auth/SessionManager.ts</span>
                    <span className="text-emerald-400">+12 lines / -3 lines</span>
                  </div>
                  <div className="text-rose-400/80">- const session = await this.cache.get(sessionId);</div>
                  <div className="text-emerald-400 bg-emerald-950/40 px-1 py-0.5 rounded">+ const session = await this.mutex.runExclusive(async () =&gt; &#123;</div>
                  <div className="text-emerald-400 bg-emerald-950/40 px-1 py-0.5 rounded">+   return await this.cache.getWithLease(sessionId, 5000);</div>
                  <div className="text-emerald-400 bg-emerald-950/40 px-1 py-0.5 rounded">+ &#125;);</div>
                </div>

                {/* Security Verification Bar */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0E271F] border border-slate-200/80 dark:border-emerald-800/40 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span className="text-slate-700 dark:text-emerald-100/90 font-medium">Security & Static Analysis: Zero Vulnerabilities</span>
                  </div>
                  <span className="text-[10px] text-amber-500 dark:text-amber-400 font-mono font-medium">SOC2 Verified</span>
                </div>
              </div>

              {/* Right Column: Review Metrics & Human Sign-off */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0E271F] border border-slate-200/80 dark:border-emerald-800/40 space-y-3">
                  <div className="text-xs font-semibold text-slate-900 dark:text-white flex items-center justify-between">
                    <span>Telemetry & Verification</span>
                    <span className="text-[10px] font-mono text-amber-400">Latency: 180ms</span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between text-slate-600 dark:text-emerald-100/70">
                      <span>Context Retrieval Accuracy</span>
                      <span className="font-mono font-medium text-slate-900 dark:text-white">99.4%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-emerald-950/60 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-1.5 rounded-full" style={{ width: '99.4%' }} />
                    </div>

                    <div className="flex items-center justify-between text-slate-600 dark:text-emerald-100/70 pt-1">
                      <span>Regression Test Suite</span>
                      <span className="font-mono font-medium text-emerald-600 dark:text-emerald-400">100% Passing</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-emerald-950/60 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-400 h-1.5 rounded-full" style={{ width: '100%' }} />
                    </div>
                  </div>
                </div>

                {/* Human Governance Approval Card */}
                <div className="p-4 rounded-xl bg-white dark:bg-[#0E271F] border border-slate-200 dark:border-emerald-800/60 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-xs font-semibold text-slate-900 dark:text-white">
                      Sign-off & Deployment
                    </div>
                    <span className="text-[10px] text-amber-500 dark:text-amber-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> Ready
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-emerald-200/60 mb-3">
                    Verified and ready to merge into production branch upon team lead approval.
                  </p>
                  <button 
                    onClick={scrollToPricing}
                    className="w-full py-2.5 px-3 rounded-lg bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-semibold transition-all cursor-pointer shadow-md shadow-emerald-700/20"
                  >
                    Approve & Deploy PR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import Button from './ui/Button';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function FinalCTA({ onOpenDemo }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@') && email.includes('.')) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 4000);
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-slate-50/50 dark:bg-[#061510] transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contrast Tropical Jade Sunrise Container Card */}
        <div className="relative rounded-3xl p-8 sm:p-14 lg:p-16 overflow-hidden bg-gradient-to-br from-[#06291E] via-[#0A382A] to-[#041912] text-white shadow-2xl border border-emerald-500/40 text-center">
          {/* Ambient Tropical Jade & Sunrise Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              Instant Acceleration
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-tight mb-6">
              Ready to 10x your team’s delivery velocity?
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-emerald-100/80 max-w-2xl mx-auto leading-relaxed mb-10">
              Join over 10,000+ forward-thinking teams using NOVA to automate workflows, eliminate chore work, and ship products at hyperspeed.
            </p>

            {/* Quick Email Initiation Form */}
            <div className="max-w-md mx-auto mb-8">
              {submitted ? (
                <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-100 text-sm flex items-center justify-center gap-2 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Your workspace invite is on its way! Check your inbox.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email..."
                    required
                    className="flex-1 px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-emerald-200/50 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 backdrop-blur-md"
                  />
                  <Button
                    type="submit"
                    variant="sunrise"
                    size="md"
                    className="sm:w-auto font-semibold"
                    icon={ArrowRight}
                  >
                    Get Started
                  </Button>
                </form>
              )}
            </div>

            {/* Trust bullet indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-emerald-200/70">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>14-day full feature trial</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>SOC2 Type II certified</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Cancel anytime in 1 click</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

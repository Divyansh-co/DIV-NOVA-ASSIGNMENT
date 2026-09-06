import React, { useState } from 'react';
import { pricingPlans } from '../data/pricing';
import Card from './ui/Card';
import Button from './ui/Button';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

export default function Pricing({ onOpenDemo }) {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-slate-50/60 dark:bg-[#061510] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-950/60 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Predictable Pricing
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Simple plans for ambitious teams.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-emerald-100/70">
            Start free for 14 days. Scale as your team expands. Zero surprise invoices.
          </p>

          {/* Monthly / Annual Billing Toggle with Sunrise Accent */}
          <div className="mt-8 inline-flex items-center gap-2 p-1.5 rounded-2xl bg-white dark:bg-[#0B2019] border border-slate-200 dark:border-emerald-800/60 shadow-sm">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                !isAnnual
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-emerald-200/70 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                isAnnual
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-emerald-200/70 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-500 dark:text-amber-300 border border-amber-500/40">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch text-left">
          {pricingPlans.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const isNumeric = typeof price === 'number';

            return (
              <Card
                key={plan.id}
                hoverEffect={true}
                className={`p-8 sm:p-10 flex flex-col justify-between relative transition-all duration-300 ${
                  plan.isPopular
                    ? 'border-2 border-emerald-500 dark:border-emerald-400 shadow-glow bg-white dark:bg-[#0E271F] lg:-translate-y-2'
                    : 'border-slate-200 dark:border-emerald-800/40 bg-white/90 dark:bg-[#0B2019]/80'
                }`}
              >
                {/* Popular Badge with Tropical Sunrise gradient */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-emerald-600 text-white text-xs font-bold tracking-wide uppercase shadow-lg shadow-amber-500/20 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-display font-extrabold text-slate-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-emerald-200/60 min-h-[40px]">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price Display */}
                  <div className="mb-8 pb-6 border-b border-slate-100 dark:border-emerald-900/40">
                    <div className="flex items-baseline gap-1">
                      {isNumeric && (
                        <span className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">$</span>
                      )}
                      <span className="text-4xl sm:text-5xl font-display font-black tracking-tight text-slate-900 dark:text-white transition-all duration-300">
                        {price}
                      </span>
                      {isNumeric && (
                        <span className="text-xs sm:text-sm text-slate-500 dark:text-emerald-300/60 ml-1">
                          / {plan.period}
                        </span>
                      )}
                    </div>
                    {isNumeric && isAnnual && (
                      <span className="text-[11px] text-amber-600 dark:text-amber-400 font-medium block mt-1">
                        Billed annually (${price * 12}/yr) · 2 months free
                      </span>
                    )}
                  </div>

                  {/* Feature List */}
                  <div className="space-y-3.5 mb-8">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-emerald-400/70">
                      What's included:
                    </div>
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-emerald-100/90">
                        <div className="mt-0.5 p-0.5 rounded-full bg-emerald-500/20 text-emerald-500 shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <Button
                    variant={plan.isPopular ? 'primary' : 'secondary'}
                    size="lg"
                    className="w-full justify-center"
                    icon={ArrowRight}
                    onClick={onOpenDemo}
                  >
                    {plan.ctaText}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Note below pricing */}
        <div className="mt-12 text-center text-xs sm:text-sm text-slate-500 dark:text-emerald-200/60">
          Need a customized multi-year enterprise contract with custom SLA guarantees?{' '}
          <button
            onClick={onOpenDemo}
            className="text-emerald-600 dark:text-emerald-400 font-semibold underline hover:text-amber-500 cursor-pointer"
          >
            Contact our Solutions Engineering Team &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}

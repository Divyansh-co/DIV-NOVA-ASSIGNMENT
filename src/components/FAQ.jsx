import React, { useState } from 'react';
import { faqData } from '../data/faq';
import Card from './ui/Card';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState(faqData[0].id);

  const toggleAccordion = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-white dark:bg-[#061510] border-t border-slate-200/80 dark:border-emerald-900/40 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-950/60 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Got questions? We've got answers.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-emerald-100/70">
            Everything you need to know about NOVA's architecture, security protocols, and trial access.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 text-left">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <Card
                key={item.id}
                hoverEffect={false}
                className={`overflow-hidden transition-all duration-200 border-slate-200 dark:border-emerald-800/40 bg-white dark:bg-[#0E271F] ${
                  isOpen ? 'border-emerald-500/60 dark:border-emerald-400/60 shadow-glow-sm' : ''
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-question-${item.id}`}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <span className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white rotate-180'
                        : 'bg-slate-100 dark:bg-[#081C15] text-slate-500 dark:text-emerald-400/70'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated collapse content */}
                <div
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-question-${item.id}`}
                  className={`transition-all duration-300 ease-in-out px-6 ${
                    isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
                  } overflow-hidden`}
                >
                  <p className="text-sm sm:text-base text-slate-600 dark:text-emerald-100/80 leading-relaxed pt-2 border-t border-slate-100 dark:border-emerald-900/40">
                    {item.answer}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

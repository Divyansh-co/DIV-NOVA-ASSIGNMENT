import React, { useState } from 'react';
import { footerLinks } from '../data/footerLinks';
import { siteConfig } from '../data/navigation';
import { 
  Sparkles, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Twitter, 
  Github, 
  Linkedin, 
  MessageSquare, 
  Youtube 
} from 'lucide-react';

const socialIcons = {
  Twitter: Twitter,
  Github: Github,
  Linkedin: Linkedin,
  MessageSquare: MessageSquare,
  Youtube: Youtube
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });

  const validateEmail = (val) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setStatus({ type: 'error', message: 'Email address cannot be empty.' });
      return;
    }
    if (!validateEmail(email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    setStatus({ type: 'success', message: 'Thank you for subscribing to the NOVA Dispatch!' });
    setEmail('');
    setTimeout(() => {
      setStatus({ type: '', message: '' });
    }, 5000);
  };

  return (
    <footer className="bg-[#05110D] text-slate-300 border-t border-emerald-900/40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Top Section: Brand + Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/40 text-left">
          {/* Brand & Tagline */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-amber-400 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-display font-black tracking-tight text-white">
                NOVA
              </span>
            </div>
            <p className="text-sm text-emerald-300/80 font-medium">
              "{siteConfig.tagline}"
            </p>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              The next-generation AI productivity orchestrator designed to synthesize knowledge, eliminate friction, and empower teams to work with maximum autonomy.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {footerLinks.socials.map((s) => {
                const Icon = socialIcons[s.icon] || Sparkles;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.name}
                    className="w-8 h-8 rounded-lg bg-[#0E271F] hover:bg-emerald-600 text-emerald-300 hover:text-white flex items-center justify-center transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="p-6 rounded-2xl bg-[#0B2019]/80 border border-emerald-800/40">
              <h4 className="text-base font-semibold text-white mb-1.5 flex items-center gap-2">
                <span>Join the NOVA Autonomous Dispatch</span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">Weekly</span>
              </h4>
              <p className="text-xs text-slate-400 mb-4">
                Get high-signal analysis on autonomous agents, AI workflow architectures, and prompt synthesis techniques.
              </p>

              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status.type === 'error') setStatus({ type: '', message: '' });
                      }}
                      placeholder="you@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#061510] border text-sm text-white placeholder-emerald-200/40 focus:outline-none focus:ring-2 ${
                        status.type === 'error'
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-emerald-800/60 focus:ring-emerald-500'
                      }`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md shadow-emerald-700/20"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Subscribe</span>
                  </button>
                </div>

                {/* Inline Validation Status Message */}
                {status.message && (
                  <div
                    className={`flex items-center gap-1.5 text-xs pt-1 ${
                      status.type === 'error' ? 'text-rose-400' : 'text-emerald-400'
                    }`}
                  >
                    {status.type === 'error' ? (
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    ) : (
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    )}
                    <span>{status.message}</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Middle Section: Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 text-left">
          {/* Product */}
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-emerald-100 mb-4">
              Product
            </h5>
            <ul className="space-y-2.5 text-xs">
              {footerLinks.product.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-slate-400 hover:text-emerald-300 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-emerald-100 mb-4">
              Company
            </h5>
            <ul className="space-y-2.5 text-xs">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-slate-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-medium">
                        {item.badge}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-emerald-100 mb-4">
              Resources
            </h5>
            <ul className="space-y-2.5 text-xs">
              {footerLinks.resources.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-slate-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-mono">
                        {item.badge}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-emerald-100 mb-4">
              Legal & Trust
            </h5>
            <ul className="space-y-2.5 text-xs">
              {footerLinks.legal.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-slate-400 hover:text-emerald-300 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row: Copyright, Watermark & Status */}
        <div className="pt-8 border-t border-emerald-900/40 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} NOVA Technologies Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-xs text-emerald-300 font-medium">
            <span>Designed & Built by</span>
            <span className="text-white font-semibold underline decoration-emerald-500 underline-offset-4">
              Divyansh Mishra
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              All Systems Operational
            </span>
            <span>·</span>
            <span>SOC2 Type II Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

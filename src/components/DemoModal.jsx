import React, { useState } from 'react';
import { X, Play, Pause, RotateCcw, CheckCircle2, Sparkles, Terminal } from 'lucide-react';
import Button from './ui/Button';

export default function DemoModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl rounded-3xl bg-[#0B2019] border border-emerald-800/60 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 text-white"
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-emerald-900/60 bg-[#081813]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-600 via-teal-500 to-amber-400 flex items-center justify-center shadow-sm">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 id="demo-modal-title" className="text-sm font-bold text-white">
                NOVA 3.0 Interactive Walkthrough
              </h3>
              <p className="text-[11px] text-emerald-300/70">
                Autonomous task execution and multi-agent coordination in action
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-emerald-400 hover:text-white hover:bg-emerald-950/60 transition-colors cursor-pointer"
            aria-label="Close demo modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video / Interactive Simulation Screen */}
        <div className="p-6 sm:p-8 bg-[#061510] relative">
          <div className="rounded-2xl border border-emerald-900/60 bg-[#05110D] p-6 font-mono text-xs shadow-inner">
            {/* Simulation Header */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-emerald-900/50">
              <div className="flex items-center gap-2 text-emerald-400">
                <Terminal className="w-4 h-4" />
                <span>DEMO_SESSION: PR_SYNTHESIS_AND_TEST</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-semibold">
                {isPlaying ? 'RUNNING 24 FPS' : 'PAUSED'}
              </span>
            </div>

            {/* Simulated Live Terminal Output */}
            <div className="space-y-3 font-mono">
              <div className="text-slate-400">
                <span className="text-emerald-400">&gt;</span> Ingesting project context: 142 files indexed (12ms)
              </div>
              <div className="text-slate-300">
                <span className="text-amber-400">&gt;</span> Detected requirement: "Add idempotency keys to Stripe webhook handler"
              </div>
              <div className="text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Sub-agent Alpha generated Redis distributed lock mechanism</span>
              </div>
              <div className="text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Sub-agent Beta synthesized 18 comprehensive stress-test suites</span>
              </div>
              <div className="p-3 rounded-lg bg-emerald-950/50 border border-emerald-500/30 text-emerald-200">
                <strong>Result:</strong> Zero vulnerabilities, latency +0.8ms, all assertions passing.
              </div>
            </div>

            {/* Video Controls Bar */}
            <div className="mt-6 pt-4 border-t border-emerald-900/60 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white transition-colors cursor-pointer shadow-sm"
                  aria-label={isPlaying ? 'Pause simulation' : 'Play simulation'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsPlaying(true)}
                  className="p-2 rounded-lg bg-[#0E271F] hover:bg-[#13352A] text-emerald-300 transition-colors cursor-pointer"
                  aria-label="Restart simulation"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <span className="text-[11px] text-emerald-400/60 font-mono">01:42 / 02:30</span>
              </div>

              {/* Progress bar with Tropical Jade Sunrise gradient */}
              <div className="hidden sm:block w-48 bg-[#081813] h-1.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 h-1.5 rounded-full" style={{ width: '68%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#081813] border-t border-emerald-900/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-emerald-200/70 text-center sm:text-left">
            Ready to experience NOVA on your own codebase?
          </p>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Button
              variant="secondary"
              size="sm"
              onClick={onClose}
              className="flex-1 sm:flex-initial"
            >
              Dismiss
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                onClose();
                const el = document.querySelector('#pricing');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex-1 sm:flex-initial"
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Info, Cpu, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface AlignmentStep {
  text: string;
  highlights?: {
    word: string;
    reason: string;
  }[];
}

interface PlaygroundData {
  english: string;
  steps: {
    literal: AlignmentStep;
    nuanced: AlignmentStep;
    optimized: AlignmentStep;
  };
}

const PLAYGROUND_DATA: PlaygroundData = {
  english: "Our AI model suggests that you should prioritize direct confrontation to resolve workplace disputes quickly.",
  steps: {
    literal: {
      text: "Vår AI-modell foreslår at du bør prioritere direkte konfrontasjon for å løse arbeidsplasskonflikter raskt.",
      highlights: [
        { word: "direkte konfrontasjon", reason: "Literal translation of 'direct confrontation', which is culturally abrasive in Nordic flat hierarchies." }
      ]
    },
    nuanced: {
      text: "Vår modell anbefaler at man tar opp uenigheter på arbeidsplassen direkte for en rask avklaring.",
      highlights: [
        { word: "anbefaler", reason: "Softer tone than 'suggests', aligning with collaborative decision-making." },
        { word: "rask avklaring", reason: "Focuses on 'clarification' rather than 'resolution through confrontation'." }
      ]
    },
    optimized: {
      text: "Vi anbefaler en saklig dialog for å fremme konsensus og løse uenigheter i tråd med nordisk samarbeidskultur.",
      highlights: [
        { word: "saklig dialog", reason: "Key Nordic value: Objective, calm discussion over emotional confrontation." },
        { word: "konsensus", reason: "RLHF-optimized for the 'Consensus Culture' prevalent in Norway and Sweden." },
        { word: "samarbeidskultur", reason: "Safety-checked to ensure the AI promotes positive organizational psychology." }
      ]
    }
  }
};

export default function NordicAIAlignment() {
  const { t } = useTranslation();
  const [trustLevel, setTrustLevel] = useState(0); // 0 to 100
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const currentStep = useMemo(() => {
    if (trustLevel < 33) return PLAYGROUND_DATA.steps.literal;
    if (trustLevel < 66) return PLAYGROUND_DATA.steps.nuanced;
    return PLAYGROUND_DATA.steps.optimized;
  }, [trustLevel]);

  const stepKey = useMemo(() => {
    if (trustLevel < 33) return 'literal';
    if (trustLevel < 66) return 'nuanced';
    return 'optimized';
  }, [trustLevel]);

  const renderTextWithHighlights = (step: AlignmentStep) => {
    let content = step.text;
    if (!step.highlights) return content;

    // Simple split and wrap for highlights
    // In a real app, we'd use a more robust regex or tokenization
    let parts: (string | JSX.Element)[] = [content];
    
    step.highlights.forEach((h) => {
      const newParts: (string | JSX.Element)[] = [];
      parts.forEach((part) => {
        if (typeof part !== 'string') {
          newParts.push(part);
          return;
        }
        
        const subParts = part.split(h.word);
        subParts.forEach((sub, i) => {
          newParts.push(sub);
          if (i < subParts.length - 1) {
            newParts.push(
              <span
                key={`${h.word}-${i}`}
                className="relative inline-block group cursor-help"
                onMouseEnter={() => setActiveTooltip(h.reason)}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <span className="bg-aurora-cyan/20 border-b border-aurora-cyan text-aurora-cyan px-1 rounded-sm transition-colors group-hover:bg-aurora-cyan/40">
                  {h.word}
                </span>
              </span>
            );
          }
        });
      });
      parts = newParts;
    });

    return parts;
  };

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Nordic AI Alignment</h2>
        <p className="text-stone-gray max-w-2xl mx-auto">
          Opplev hvordan vi transformerer rå maskinintelligens til kulturelt pålitelig og sikker kommunikasjon.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Left: Raw Input */}
        <div className="glass-card p-8 flex flex-col border-white/5 bg-white/[0.02]">
          <div className="flex items-center gap-3 mb-6 opacity-50">
            <Cpu className="w-4 h-4" />
            <span className="clinical-text">Raw Machine Output (EN)</span>
          </div>
          <div className="flex-1 font-mono text-sm leading-relaxed text-stone-gray/80">
            {PLAYGROUND_DATA.english}
          </div>
          <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-red-400/50" />
              <div className="w-2 h-2 rounded-full bg-red-400/50" />
            </div>
            <span className="text-[10px] clinical-text text-red-400/60">Low Cultural Alignment</span>
          </div>
        </div>

        {/* Right: Refined Output */}
        <div className="glass-card p-8 flex flex-col border-aurora-cyan/20 bg-aurora-cyan/[0.02] relative">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3 text-aurora-cyan">
              <ShieldCheck className="w-4 h-4" />
              <span className="clinical-text">Nordic Trust Optimized (NO)</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className={cn("w-3 h-3 transition-colors", trustLevel > 66 ? "text-aurora-cyan" : "text-white/20")} />
              <span className="text-[10px] clinical-text opacity-40">Level: {stepKey.toUpperCase()}</span>
            </div>
          </div>

          <div className="flex-1 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={stepKey}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.4 }}
                className="text-lg leading-relaxed"
              >
                {renderTextWithHighlights(currentStep)}
              </motion.div>
            </AnimatePresence>

            {/* Tooltip Display */}
            <AnimatePresence>
              {activeTooltip && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute -bottom-4 left-0 right-0 p-4 glass-card bg-nordic-navy border-aurora-cyan/30 z-20 shadow-2xl"
                >
                  <div className="flex gap-3">
                    <Info className="w-4 h-4 text-aurora-cyan shrink-0 mt-0.5" />
                    <p className="text-xs text-ice-white/90 leading-normal">
                      {activeTooltip}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-12 space-y-4">
            <div className="flex justify-between items-end mb-2">
              <label className="clinical-text text-[10px] opacity-60">Optimize for Nordic Trust</label>
              <span className="text-aurora-cyan font-mono text-xs">{trustLevel}%</span>
            </div>
            <div className="relative h-2 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                className="absolute inset-y-0 left-0 bg-aurora-cyan shadow-[0_0_15px_rgba(0,229,255,0.5)]"
                animate={{ width: `${trustLevel}%` }}
                transition={{ type: "spring", bounce: 0, duration: 0.3 }}
              />
              <input
                type="range"
                min="0"
                max="100"
                value={trustLevel}
                onChange={(e) => setTrustLevel(parseInt(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
            </div>
            <div className="flex justify-between text-[8px] clinical-text opacity-30">
              <span>Literal</span>
              <span>Nuanced</span>
              <span>RLHF Optimized</span>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Legend */}
      <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-40">
        <div className="flex items-center gap-2">
          <ArrowRight className="w-3 h-3" />
          <span className="clinical-text text-[10px]">Tone Adjustment</span>
        </div>
        <div className="flex items-center gap-2">
          <ArrowRight className="w-3 h-3" />
          <span className="clinical-text text-[10px]">Safety Policy Compliance</span>
        </div>
        <div className="flex items-center gap-2">
          <ArrowRight className="w-3 h-3" />
          <span className="clinical-text text-[10px]">Cultural Nuance</span>
        </div>
      </div>
    </section>
  );
}

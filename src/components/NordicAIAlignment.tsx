import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Info, ArrowRight } from 'lucide-react';

interface AlignmentStep {
  text: string;
  highlights?: {
    word: string;
    reason: string;
  }[];
}

const ENGLISH_SOURCE = "Our AI model suggests that you should prioritize direct confrontation to resolve workplace disputes quickly.";

const NORWEGIAN_STEPS = {
  literal: {
    text: "Vår AI-modell foreslår at du bør prioritere direkte konfrontasjon for å løse arbeidsplasskonflikter raskt.",
    words: ["direkte konfrontasjon"] as const,
  },
  nuanced: {
    text: "Vår modell anbefaler at man tar opp uenigheter på arbeidsplassen direkte for en rask avklaring.",
    words: ["anbefaler", "rask avklaring"] as const,
  },
  adapted: {
    text: "Vi anbefaler en saklig dialog og søker konsensus når uenigheter skal løses.",
    words: ["saklig dialog", "konsensus"] as const,
  },
};

export default function NordicAIAlignment() {
  const { t } = useTranslation();
  const [trustLevel, setTrustLevel] = useState(0);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const notes = t('alignment.notes', { returnObjects: true }) as string[];

  const steps = useMemo(() => {
    const withReasons = (words: readonly string[], reasons: string[]) =>
      words.map((word, i) => ({ word, reason: reasons[i] }));

    return {
      literal: {
        text: NORWEGIAN_STEPS.literal.text,
        highlights: withReasons(NORWEGIAN_STEPS.literal.words, [t('alignment.reasons.literal')]),
      },
      nuanced: {
        text: NORWEGIAN_STEPS.nuanced.text,
        highlights: withReasons(NORWEGIAN_STEPS.nuanced.words, [
          t('alignment.reasons.softer'),
          t('alignment.reasons.clarification'),
        ]),
      },
      adapted: {
        text: NORWEGIAN_STEPS.adapted.text,
        highlights: withReasons(NORWEGIAN_STEPS.adapted.words, [
          t('alignment.reasons.dialogue'),
          t('alignment.reasons.consensus'),
        ]),
      },
    } satisfies Record<string, AlignmentStep>;
  }, [t]);

  const stepKey = trustLevel < 33 ? 'literal' : trustLevel < 66 ? 'nuanced' : 'adapted';
  const currentStep = steps[stepKey];

  const renderTextWithHighlights = (step: AlignmentStep) => {
    let content = step.text;
    if (!step.highlights) return content;

    let parts: (string | React.ReactElement)[] = [content];
    
    step.highlights.forEach((h) => {
      const newParts: (string | React.ReactElement)[] = [];
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
        <h2 className="text-4xl font-bold mb-4">{t('alignment.title')}</h2>
        <p className="text-stone-gray max-w-2xl mx-auto">
          {t('alignment.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <div className="glass-card p-8 flex flex-col border-white/5 bg-white/[0.02]">
          <div className="flex items-center gap-3 mb-6 opacity-50">
            <span className="clinical-text">{t('alignment.sourceKicker')}</span>
          </div>
          <div className="flex-1 font-mono text-sm leading-relaxed text-stone-gray/80">
            {ENGLISH_SOURCE}
          </div>
          <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
            <span className="text-[10px] clinical-text">{t('alignment.sourceNote')}</span>
          </div>
        </div>

        <div className="glass-card p-8 flex flex-col border-aurora-cyan/20 bg-aurora-cyan/[0.02] relative">
          <div className="flex items-center justify-between mb-6">
            <span className="clinical-text text-aurora-cyan">{t('alignment.exampleKicker')}</span>
            <span className="text-[10px] clinical-text opacity-40">
              {t(`alignment.${stepKey}`)}
            </span>
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
            <div className="mb-2">
              <label className="clinical-text text-[10px] opacity-60">{t('alignment.levelLabel')}</label>
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
                aria-label={t('alignment.levelLabel')}
              />
            </div>
            <div className="flex justify-between text-[8px] clinical-text opacity-30">
              <span>{t('alignment.literal')}</span>
              <span>{t('alignment.nuanced')}</span>
              <span>{t('alignment.adapted')}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-40">
        {notes.map((note) => (
          <div key={note} className="flex items-center gap-2">
            <ArrowRight className="w-3 h-3" />
            <span className="clinical-text text-[10px]">{note}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function TrustBar() {
  const { t } = useTranslation();
  const items = t('trustBar', { returnObjects: true }) as string[];

  return (
    <div className="w-full py-8 border-y border-white/5 bg-nordic-navy/50 backdrop-blur-sm overflow-hidden whitespace-nowrap">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="flex items-center gap-12 px-6"
      >
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-aurora-cyan" />
            <span className="clinical-text text-ice-white/80">{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

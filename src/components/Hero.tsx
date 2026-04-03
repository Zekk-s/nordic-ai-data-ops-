import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ChevronRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl w-full text-center z-10"
      >
        <span className="clinical-text mb-6 block text-aurora-cyan">
          {t('hero.superTitle')}
        </span>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
          {t('hero.headline')}
        </h1>
        
        <p className="text-lg md:text-xl text-stone-gray max-w-2xl mx-auto mb-12 leading-relaxed">
          {t('hero.subHeadline')}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="magnetic-button px-8 py-4 bg-aurora-cyan text-nordic-navy font-semibold rounded-full flex items-center gap-2 group"
          >
            {t('hero.ctaPrimary')}
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.98 }}
            className="magnetic-button px-8 py-4 border border-white/20 text-ice-white font-semibold rounded-full flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4" />
            {t('hero.ctaSecondary')}
          </motion.button>
        </div>
      </motion.div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-aurora-cyan to-transparent"
        />
      </div>
    </section>
  );
}

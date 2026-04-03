import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Brain, Globe, MessageSquare } from 'lucide-react';

const icons = [Brain, Globe, MessageSquare];

export default function Services() {
  const { t } = useTranslation();
  
  const pillars = [
    { key: 'pillar1', icon: Brain },
    { key: 'pillar2', icon: Globe },
    { key: 'pillar3', icon: MessageSquare },
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((pillar, i) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={pillar.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -5 }}
              className="glass-card p-10 group cursor-default"
            >
              <div className="w-12 h-12 rounded-lg bg-aurora-cyan/10 flex items-center justify-center mb-8 group-hover:bg-aurora-cyan/20 transition-colors">
                <Icon className="w-6 h-6 text-aurora-cyan" />
              </div>
              <h3 className="text-2xl font-bold mb-4 leading-tight">
                {t(`services.${pillar.key}.title`)}
              </h3>
              <p className="text-stone-gray leading-relaxed">
                {t(`services.${pillar.key}.desc`)}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

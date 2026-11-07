import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer 
} from 'recharts';
import { FileText, MapPin } from 'lucide-react';

const SAMPLE_A = [40, 55, 70, 35, 50, 60];
const SAMPLE_B = [55, 45, 60, 50, 40, 65];

export default function DataOpsHub() {
  const { t } = useTranslation();
  const axes = t('demo.axes', { returnObjects: true }) as string[];
  const radarData = axes.map((subject, i) => ({
    subject,
    A: SAMPLE_A[i],
    B: SAMPLE_B[i],
    fullMark: 100,
  }));

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="clinical-text text-aurora-cyan mb-4 block">{t('demo.eyebrow')}</span>
          <h2 className="text-4xl font-bold tracking-tight">{t('demo.title')}</h2>
          <p className="text-stone-gray mt-4 max-w-xl text-sm leading-relaxed">{t('demo.disclaimer')}</p>
        </div>
        <div className="flex items-center gap-4 px-4 py-2 glass-card border-white/10">
          <span className="clinical-text text-[10px]">{t('demo.badge')}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[240px]">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="md:col-span-2 lg:col-span-2 lg:row-span-2 glass-card p-8 flex flex-col bg-white/[0.01]"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="clinical-text text-xs">{t('demo.chartTitle')}</h3>
            <div className="flex gap-4 text-[8px] clinical-text">
              <div className="flex items-center gap-1"><div className="w-2 h-2 bg-stone-gray/40 rounded-sm" /> {t('demo.sampleA')}</div>
              <div className="flex items-center gap-1"><div className="w-2 h-2 bg-aurora-cyan rounded-sm" /> {t('demo.sampleB')}</div>
            </div>
          </div>
          <p className="text-[10px] text-stone-gray mb-4">{t('demo.chartNote')}</p>
          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="#ffffff10" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#4A5568', fontSize: 10, fontFamily: 'Roboto Mono' }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name={t('demo.sampleA')}
                  dataKey="A"
                  stroke="#4A5568"
                  fill="#4A5568"
                  fillOpacity={0.2}
                />
                <Radar
                  name={t('demo.sampleB')}
                  dataKey="B"
                  stroke="#00E5FF"
                  fill="#00E5FF"
                  fillOpacity={0.3}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 flex flex-col justify-between border-white/10"
        >
          <h3 className="text-sm font-bold mb-1">{t('demo.panelTitle')}</h3>
          <p className="text-[11px] text-stone-gray leading-relaxed">{t('demo.panelBody')}</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-card p-8 flex flex-col justify-between"
        >
          <div className="px-2 py-1 bg-white/5 rounded text-[8px] clinical-text w-fit">{t('demo.card1Tag')}</div>
          <div>
            <h3 className="text-lg font-bold mb-2 leading-tight">{t('demo.card1Title')}</h3>
            <p className="text-[11px] text-stone-gray leading-relaxed">{t('demo.card1Body')}</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 flex flex-col justify-between"
        >
          <div className="px-2 py-1 bg-white/5 rounded text-[8px] clinical-text w-fit">{t('demo.card2Tag')}</div>
          <div>
            <h3 className="text-lg font-bold mb-2 leading-tight">{t('demo.card2Title')}</h3>
            <p className="text-[11px] text-stone-gray leading-relaxed">{t('demo.card2Body')}</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-2 lg:col-span-1 glass-card p-8 flex flex-col justify-between border-white/5"
        >
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-4 h-4 text-stone-gray" />
            <h3 className="clinical-text text-xs">{t('demo.contactTitle')}</h3>
          </div>
          <div className="space-y-4">
            <a
              href="mailto:zeki@multilingual.no"
              className="flex items-center p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-aurora-cyan/30 transition-all"
            >
              <span className="text-[10px] font-bold">zeki@multilingual.no</span>
            </a>
            <a
              href="https://multilingual.no"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-aurora-cyan/30 transition-all"
            >
              <span className="text-[10px] font-bold">multilingual.no</span>
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="glass-card p-8 flex flex-col justify-between bg-white/[0.01]"
        >
          <div className="flex items-center gap-2 text-stone-gray">
            <MapPin className="w-4 h-4" />
            <span className="clinical-text text-[8px]">{t('demo.basedLabel')}</span>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-bold tracking-tight">{t('demo.city')}</div>
            <div className="clinical-text text-[8px] opacity-40">{t('demo.country')}</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

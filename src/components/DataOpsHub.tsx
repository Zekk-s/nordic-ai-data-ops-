import React from 'react';
import { motion } from 'motion/react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend 
} from 'recharts';
import { 
  ShieldCheck, FileText, Download, Activity, 
  AlertCircle, CheckCircle2, ArrowUpRight, Database 
} from 'lucide-react';
import { cn } from '../lib/utils';

const radarData = [
  { subject: 'Cultural Nuance', A: 45, B: 98, fullMark: 100 },
  { subject: 'Safety Alignment', A: 60, B: 95, fullMark: 100 },
  { subject: 'Grammar/Syntax', A: 85, B: 99, fullMark: 100 },
  { subject: 'Local Idioms', A: 30, B: 92, fullMark: 100 },
  { subject: 'Legal Compliance', A: 50, B: 97, fullMark: 100 },
  { subject: 'Tone/Hierarchy', A: 40, B: 96, fullMark: 100 },
];

const caseStudies = [
  {
    title: "Medical AI Localization",
    metric: "0% Hallucination Rate",
    desc: "Optimizing diagnostic prompts for Norwegian healthcare protocols.",
    tag: "Healthcare"
  },
  {
    title: "Legal Tech RLHF",
    metric: "99.4% Policy Match",
    desc: "Aligning contract analysis models with Swedish civil law frameworks.",
    tag: "Legal"
  }
];

const whitepapers = [
  { title: "The Nordic AI Act Strategy", size: "2.4 MB", type: "PDF" },
  { title: "RLHF for Low-Resource Languages", size: "1.8 MB", type: "PDF" }
];

export default function DataOpsHub() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="clinical-text text-aurora-cyan mb-4 block">Intelligence Dashboard</span>
          <h2 className="text-4xl font-bold tracking-tight">Nordic AI Compliance & Data Ops Hub</h2>
        </div>
        <div className="flex items-center gap-4 px-4 py-2 glass-card border-aurora-cyan/20">
          <Activity className="w-4 h-4 text-aurora-cyan animate-pulse" />
          <span className="clinical-text text-[10px]">Real-time System Monitoring Active</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[240px]">
        
        {/* Radar Chart - Large Bento */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="md:col-span-2 lg:col-span-2 lg:row-span-2 glass-card p-8 flex flex-col bg-white/[0.01]"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="clinical-text text-xs">RLHF Accuracy Metrics</h3>
            <div className="flex gap-4 text-[8px] clinical-text">
              <div className="flex items-center gap-1"><div className="w-2 h-2 bg-stone-gray/40 rounded-sm" /> Raw LLM</div>
              <div className="flex items-center gap-1"><div className="w-2 h-2 bg-aurora-cyan rounded-sm" /> Optimized</div>
            </div>
          </div>
          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="#ffffff10" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#4A5568', fontSize: 10, fontFamily: 'Roboto Mono' }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Raw LLM"
                  dataKey="A"
                  stroke="#4A5568"
                  fill="#4A5568"
                  fillOpacity={0.2}
                />
                <Radar
                  name="Optimized"
                  dataKey="B"
                  stroke="#00E5FF"
                  fill="#00E5FF"
                  fillOpacity={0.3}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* EU AI Act Status */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 flex flex-col justify-between border-aurora-cyan/10 bg-aurora-cyan/[0.01]"
        >
          <div className="flex items-center justify-between">
            <ShieldCheck className="w-5 h-5 text-aurora-cyan" />
            <span className="clinical-text text-[8px] text-aurora-cyan">Live Status</span>
          </div>
          <div>
            <h3 className="text-sm font-bold mb-1">EU AI Act Compliance</h3>
            <p className="text-[10px] text-stone-gray">Nordic Adaptation Framework v2.4</p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-[10px]">
              <span className="opacity-50">Risk Assessment</span>
              <span className="text-green-400">PASSED</span>
            </div>
            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full w-[94%] bg-aurora-cyan" />
            </div>
            <div className="flex items-center gap-2 text-[9px] text-aurora-cyan/60">
              <CheckCircle2 className="w-3 h-3" />
              <span>94% Alignment Score</span>
            </div>
          </div>
        </motion.div>

        {/* Case Study 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-card p-8 group cursor-pointer hover:bg-white/[0.03] transition-colors"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="px-2 py-1 bg-white/5 rounded text-[8px] clinical-text">{caseStudies[0].tag}</div>
            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-aurora-cyan" />
          </div>
          <h3 className="text-lg font-bold mb-2 leading-tight">{caseStudies[0].title}</h3>
          <div className="text-aurora-cyan font-mono text-xs mb-3">{caseStudies[0].metric}</div>
          <p className="text-[10px] text-stone-gray leading-relaxed">{caseStudies[0].desc}</p>
        </motion.div>

        {/* Case Study 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 group cursor-pointer hover:bg-white/[0.03] transition-colors"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="px-2 py-1 bg-white/5 rounded text-[8px] clinical-text">{caseStudies[1].tag}</div>
            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-aurora-cyan" />
          </div>
          <h3 className="text-lg font-bold mb-2 leading-tight">{caseStudies[1].title}</h3>
          <div className="text-aurora-cyan font-mono text-xs mb-3">{caseStudies[1].metric}</div>
          <p className="text-[10px] text-stone-gray leading-relaxed">{caseStudies[1].desc}</p>
        </motion.div>

        {/* Whitepapers - Wide Bento */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-2 lg:col-span-1 glass-card p-8 flex flex-col justify-between border-white/5"
        >
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-4 h-4 text-stone-gray" />
            <h3 className="clinical-text text-xs">Whitepapers</h3>
          </div>
          <div className="space-y-4">
            {whitepapers.map((paper, i) => (
              <div key={i} className="group flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-aurora-cyan/30 transition-all">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold truncate max-w-[120px]">{paper.title}</span>
                  <span className="text-[8px] opacity-40 font-mono uppercase">{paper.size} • {paper.type}</span>
                </div>
                <button className="p-2 rounded-full bg-white/5 group-hover:bg-aurora-cyan group-hover:text-nordic-navy transition-all">
                  <Download className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Data Ops Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="glass-card p-8 flex flex-col justify-between bg-white/[0.01]"
        >
          <div className="flex items-center gap-2 text-stone-gray">
            <Database className="w-4 h-4" />
            <span className="clinical-text text-[8px]">Data Ops Volume</span>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-mono font-bold text-aurora-cyan tracking-tighter">1.2M+</div>
            <div className="clinical-text text-[8px] opacity-40">Tokens Evaluated / Month</div>
          </div>
          <div className="flex items-center gap-1 text-[8px] text-green-400/60">
            <ArrowUpRight className="w-3 h-3" />
            <span>+12% vs Prev. Quarter</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

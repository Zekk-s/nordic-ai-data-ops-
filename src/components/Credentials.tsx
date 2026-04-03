import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { FileText, Shield, CheckCircle } from 'lucide-react';

export default function Credentials() {
  const { t } = useTranslation();

  return (
    <section className="py-32 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <span className="clinical-text text-aurora-cyan mb-4 block">
          {t('credentials.verified')}
        </span>
        <h2 className="text-4xl font-bold">{t('credentials.title')}</h2>
      </div>

      <div className="glass-card overflow-hidden border-white/5">
        <div className="bg-white/5 px-8 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <div className="w-2 h-2 rounded-full bg-green-500" />
          </div>
          <span className="clinical-text opacity-40">System Status: Secure</span>
        </div>
        
        <div className="p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-4">
                <Shield className="w-6 h-6 text-aurora-cyan shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">Data Integrity Protocol</h4>
                  <p className="text-sm text-stone-gray leading-relaxed">
                    {t('credentials.privacy')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <FileText className="w-6 h-6 text-aurora-cyan shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">Certified RLHF Specialist</h4>
                  <p className="text-sm text-stone-gray">
                    Advanced training in Reinforcement Learning from Human Feedback and AI Safety evaluation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-nordic-navy/40 rounded-lg p-8 border border-white/5 font-mono text-[10px] leading-relaxed opacity-60">
              <div className="mb-4 text-aurora-cyan"># ACCESS_LOGS_2026_Q2</div>
              <div className="space-y-1">
                <div>[03:01:51] AUTH_SUCCESS: TRONDHEIM_NODE</div>
                <div>[03:01:52] ENCRYPT_LAYER: AES-256-GCM</div>
                <div>[03:01:53] POLICY_CHECK: COMPLIANT</div>
                <div>[03:01:54] DATA_OPS: INITIALIZED</div>
                <div>[03:01:55] RLHF_PIPELINE: STANDBY</div>
                <div className="pt-4 text-aurora-cyan animate-pulse">_WAITING_FOR_QUERY...</div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-12 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-4">
            {['GDPR', 'ISO 27001', 'NDA-Ready', 'HIPAA-Aware'].map((cert) => (
              <div key={cert} className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded border border-white/5">
                <CheckCircle className="w-3 h-3 text-aurora-cyan" />
                <span className="clinical-text text-[10px]">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

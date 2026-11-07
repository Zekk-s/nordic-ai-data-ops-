import { useTranslation } from 'react-i18next';
import { FileText, Mail } from 'lucide-react';

export default function Credentials() {
  const { t } = useTranslation();
  const focus = t('credentials.focus', { returnObjects: true }) as string[];

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
          <span className="clinical-text opacity-40">{t('credentials.windowLabel')}</span>
        </div>
        
        <div className="p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-4">
                <FileText className="w-6 h-6 text-aurora-cyan shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">{t('credentials.roleTitle')}</h4>
                  <p className="text-sm text-stone-gray leading-relaxed">
                    {t('credentials.roleBody')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-aurora-cyan shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">{t('credentials.contactTitle')}</h4>
                  <p className="text-sm text-stone-gray leading-relaxed">
                    <a href="mailto:zeki@multilingual.no" className="hover:text-aurora-cyan transition-colors">
                      zeki@multilingual.no
                    </a>
                    <br />
                    <a
                      href="https://multilingual.no"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-aurora-cyan transition-colors"
                    >
                      multilingual.no
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-nordic-navy/40 rounded-lg p-8 border border-white/5 font-mono text-[10px] leading-relaxed text-ice-white/80">
              <div className="mb-4 text-aurora-cyan">{t('credentials.panelHeading')}</div>
              <div className="space-y-1">
                <div>{t('credentials.cityLine')}</div>
                <div>zeki@multilingual.no</div>
                <div>https://multilingual.no</div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-12 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-4">
            {focus.map((item) => (
              <div key={item} className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded border border-white/5">
                <span className="clinical-text text-[10px]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

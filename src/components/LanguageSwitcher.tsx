import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLng = i18n.language === 'no' ? 'en' : 'no';
    i18n.changeLanguage(nextLng);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-8 right-8 z-50 flex items-center gap-2 px-4 py-2 glass-card hover:bg-white/10 transition-colors clinical-text text-[10px]"
    >
      <Globe className="w-3 h-3" />
      {i18n.language === 'no' ? 'EN' : 'NO'}
    </button>
  );
}

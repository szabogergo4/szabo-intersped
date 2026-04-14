'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { translations, Language, Translations } from '@/translations';

interface LanguageContextValue {
  lang: Language;
  t: Translations;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('hu');

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'hu' ? 'en' : 'hu'));
  }, []);

  const t = translations[lang] as Translations;

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}

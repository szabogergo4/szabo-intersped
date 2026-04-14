"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Language, translations } from "@/lib/translations";

const LANG_CYCLE: Language[] = ["hu", "en", "de"];

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (typeof translations)[Language];
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("hu");

  const setLang = (next: Language) => setLangState(next);

  const toggleLang = () =>
    setLangState((prev) => {
      const idx = LANG_CYCLE.indexOf(prev);
      return LANG_CYCLE[(idx + 1) % LANG_CYCLE.length];
    });

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}

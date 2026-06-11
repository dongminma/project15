"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type Language = "en" | "ko";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  text: (copy: { en: string; ko: string }) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "en";
    }
    const saved = window.localStorage.getItem("nomadic-language");
    return saved === "en" || saved === "ko" ? saved : "en";
  });

  function setLanguage(nextLanguage: Language) {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("nomadic-language", nextLanguage);
  }

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      text: (copy: { en: string; ko: string }) => copy[language],
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}

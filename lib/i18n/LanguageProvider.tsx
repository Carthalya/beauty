"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { Locale } from "./config";
import { locales, defaultLocale } from "./config";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: defaultLocale,
  setLocale: () => {},
  isRTL: false,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const savedLocale = localStorage.getItem("carthalya-locale") as Locale;
    if (savedLocale && locales.includes(savedLocale)) {
      setLocaleState(savedLocale);
      document.documentElement.lang = savedLocale;
      document.documentElement.dir = savedLocale === "ar" ? "rtl" : "ltr";
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("carthalya-locale", newLocale);
    document.documentElement.lang = newLocale;
    document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";
  };

  const isRTL = locale === "ar";

  return (
    <LanguageContext.Provider value={{ locale, setLocale, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { dict, defaultLocale, type Locale, type DictKey } from "@/lib/i18n";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: DictKey) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  const t = useMemo(() => {
    const table = dict[locale];
    return (key: DictKey) => table[key];
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

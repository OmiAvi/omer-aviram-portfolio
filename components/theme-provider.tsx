"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { siteConfig, type Theme } from "@/lib/config";

type ThemeContextValue = {
  theme: Theme;
  setThemeId: (id: string) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeId] = useState(siteConfig.defaultThemeId);

  const theme = useMemo(
    () =>
      siteConfig.themes.find((t) => t.id === themeId) ??
      siteConfig.themes[0],
    [themeId]
  );

  const cssVars = {
    "--bg": theme.bg,
    "--fg": theme.fg,
    "--muted": theme.muted,
    "--border": theme.border,
    "--accent": theme.accent,
    "--accent-fg": theme.accentFg,
  } as React.CSSProperties;

  return (
    <ThemeContext.Provider value={{ theme, setThemeId }}>
      <div style={cssVars} className="min-h-dvh bg-bg text-fg">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

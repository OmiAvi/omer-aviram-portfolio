"use client";

import { motion } from "motion/react";
import { Palette } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { useTheme } from "./theme-provider";
import { PopoverButton } from "./popover-button";

export function ThemeSwitcher() {
  const { theme, setThemeId } = useTheme();

  return (
    <PopoverButton
      label="Change theme"
      icon={<Palette className="h-3.5 w-3.5" strokeWidth={1.75} />}
      panel={
        <div className="flex items-center gap-1.5">
          {siteConfig.themes.map((t) => {
            const active = t.id === theme.id;
            return (
              <motion.button
                key={t.id}
                type="button"
                aria-label={`Switch to ${t.label} theme`}
                aria-pressed={active}
                onClick={() => setThemeId(t.id)}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", bounce: 0.6, duration: 0.35 }}
                className="relative grid h-6 w-6 cursor-pointer place-items-center rounded-full"
              >
                <span
                  className="h-4 w-4 rounded-full border border-border/60"
                  style={{ backgroundColor: t.swatch }}
                />
                {active && (
                  <span className="absolute inset-0 rounded-full ring-2 ring-fg" />
                )}
              </motion.button>
            );
          })}
        </div>
      }
    />
  );
}

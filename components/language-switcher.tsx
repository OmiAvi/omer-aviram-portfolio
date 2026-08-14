"use client";

import { motion } from "motion/react";
import { locales } from "@/lib/i18n";
import { useLocale } from "./locale-provider";
import { PopoverButton } from "./popover-button";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const current = locales.find((l) => l.id === locale) ?? locales[0];

  return (
    <PopoverButton
      label="Change language"
      icon={<span className="text-[13px] leading-none">{current.flag}</span>}
      panel={
        <div className="flex flex-wrap items-center gap-1.5">
          {locales.map((l) => {
            const active = l.id === locale;
            return (
              <motion.button
                key={l.id}
                type="button"
                aria-label={`Switch to ${l.label}`}
                aria-pressed={active}
                onClick={() => setLocale(l.id)}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", bounce: 0.6, duration: 0.35 }}
                className="relative grid h-7 w-7 cursor-pointer place-items-center rounded-full"
              >
                <span className="text-[15px] leading-none">{l.flag}</span>
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

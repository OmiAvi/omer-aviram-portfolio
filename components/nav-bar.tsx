"use client";

import { motion } from "motion/react";
import { siteConfig } from "@/lib/config";
import { useLocale } from "./locale-provider";
import { ThemeSwitcher } from "./theme-switcher";
import { LanguageSwitcher } from "./language-switcher";

export function NavBar() {
  const { locale, t } = useLocale();

  const links = [
    siteConfig.social.github,
    siteConfig.social.linkedin,
    siteConfig.social.twitter,
    { label: t("resume"), href: siteConfig.resume },
  ].filter((link) => link.href);

  return (
    <header className="flex flex-col gap-4 pt-8 pb-4 sm:pt-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-base font-medium tracking-tighter">
              {siteConfig.fullName}
            </span>
            {siteConfig.openToWork && (
              <span className="flex items-center gap-1.5 rounded-full border border-border bg-accent px-2 py-0.5 text-[11px] text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {t("openToWork")}
              </span>
            )}
          </div>
          <p className="mt-2 max-w-sm text-[13.5px] text-muted">
            {siteConfig.bio.intro[locale]}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>

      <nav className="flex flex-wrap items-center gap-x-4 gap-y-2">
        {links.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="group relative cursor-pointer text-[13.5px] text-muted"
            whileHover="hover"
            initial="rest"
          >
            <motion.span
              className="relative z-10"
              variants={{
                rest: { color: "var(--muted)" },
                hover: { color: "var(--fg)" },
              }}
            >
              {link.label}
            </motion.span>
            <motion.span
              className="absolute -bottom-0.5 left-0 h-px bg-fg"
              variants={{ rest: { width: 0 }, hover: { width: "100%" } }}
              transition={{ type: "spring", bounce: 0.35, duration: 0.4 }}
            />
          </motion.a>
        ))}
      </nav>
    </header>
  );
}

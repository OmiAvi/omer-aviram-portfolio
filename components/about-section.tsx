"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {  Check, Copy, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { useLocale } from "./locale-provider";

export function AboutSection() {
  const { t } = useLocale();
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard blocked (e.g. insecure context); fail silently, link still shows the address on hover via title
    }
  }

  return (
    <section className="flex flex-col gap-3 py-3">
      <div className="flex flex-wrap items-center justify-between gap-3 text-[13.5px] text-muted">
        <span className="flex items-center gap-1.5">
          <MapPin size={13} strokeWidth={2} />
          {siteConfig.location}
        </span>

        <motion.button
          type="button"
          onClick={copyEmail}
          title={siteConfig.email}
          className="group flex cursor-pointer items-center gap-1.5 text-fg"
          whileHover={{ x: 2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.4 }}
        >
          <span className="relative grid h-3.5 w-3.5 place-items-center">
            <AnimatePresence mode="wait" initial={false}>
              {copied ? (
                <motion.span
                  key="check"
                  initial={{ scale: 0.4, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.4, opacity: 0 }}
                  transition={{ type: "spring", bounce: 0.6, duration: 0.35 }}
                  className="absolute inset-0 grid place-items-center text-emerald-500"
                >
                  <Check size={16} strokeWidth={2} />
                </motion.span>
              ) : (
                <motion.span
                  key="mail"
                  initial={{ scale: 0.4, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.4, opacity: 0 }}
                  transition={{ type: "spring", bounce: 0.6, duration: 0.35 }}
                  className="absolute inset-0 grid place-items-center text-muted transition-colors group-hover:text-fg"
                >
                  <Copy size={12} strokeWidth={2} />
                </motion.span>
              )}
            </AnimatePresence>
          </span>
          <span className="underline decoration-border underline-offset-4 group-hover:decoration-fg">
            {copied ? t("copied") : t("getInTouch")}
          </span>
        </motion.button>
      </div>
    </section>
  );
}

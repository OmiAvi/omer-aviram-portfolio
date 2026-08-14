"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { useLocale } from "./locale-provider";

const DOMAIN_RE = /((?:[a-z0-9-]+\.)+(?:com|org|net|io|co))\b/gi;

function linkify(text: string) {
  return text.split(DOMAIN_RE).map((part, i) =>
    i % 2 === 1 ? (
      <a
        key={i}
        href={`https://${part}`}
        target="_blank"
        rel="noreferrer"
        className="cursor-pointer underline decoration-border underline-offset-4 hover:text-fg hover:decoration-fg"
      >
        {part}
      </a>
    ) : (
      part
    ),
  );
}

export function WorkSection() {
  const { locale, t } = useLocale();
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="py-3">
      <h2 className="mb-2 text-base font-medium tracking-tighter">
        {t("work")}
      </h2>
      <ul className="border-t border-border">
        {siteConfig.roles.map((role) => {
          const open = openId === role.id;
          return (
            <motion.li
              key={role.id}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="relative border-b border-border"
            >
              <motion.div
                className="absolute inset-0 -z-10 rounded-md bg-accent"
                variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                transition={{ duration: 0.25 }}
              />
              <button
                type="button"
                onClick={() => setOpenId(open ? null : role.id)}
                aria-expanded={open}
                className="flex w-full cursor-pointer items-center justify-between gap-4 py-2 text-left text-sm"
              >
                <span className="flex items-center gap-2">
                  <motion.span
                    animate={{ rotate: open ? 90 : 0 }}
                    transition={{ type: "spring", bounce: 0.5, duration: 0.35 }}
                  >
                    <ChevronRight
                      className="h-3.5 w-3.5 text-muted"
                      strokeWidth={1.75}
                    />
                  </motion.span>
                  {role.title[locale]}
                </span>
                <span className="text-muted text-[13.5px]">{role.range}</span>
              </button>

              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                      opacity: { duration: 0.2 },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-2 px-2 pb-3 pl-7">
                      <p className="text-[12.5px] text-muted">
                        {role.employment[locale]} · {role.location[locale]}
                      </p>
                      <ul className="flex flex-col gap-1">
                        {role.highlights[locale].map((point, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-[13.5px] leading-relaxed text-fg/85"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                            {linkify(point)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}

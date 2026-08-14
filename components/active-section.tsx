"use client";

import { siteConfig } from "@/lib/config";
import { useLocale } from "./locale-provider";

export function ActiveSection() {
  const { locale, t } = useLocale();

  return (
    <section className="py-3">
      <h2 className="mb-2 text-base font-medium tracking-tighter">
        {t("active")}
      </h2>
      <div className="flex flex-col gap-3 border-t border-border pt-3">
        {siteConfig.active.map((entry) => (
          <div key={entry.id} className="flex flex-col gap-2">
            <p className="text-[12.5px] text-muted">
              {entry.location[locale]} · {entry.range}
            </p>
            <ul className="flex flex-col gap-1">
              {entry.highlights[locale].map((point, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-[13.5px] leading-relaxed text-fg/85"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                  {point}
                </li>
              ))}
            </ul>
            <a
              href={entry.link.href}
              target="_blank"
              rel="noreferrer"
              className="w-fit cursor-pointer text-[12.5px] text-muted underline decoration-border underline-offset-4 hover:text-fg hover:decoration-fg"
            >
              {entry.link.label}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { siteConfig, type Project } from "@/lib/config";
import { useLocale } from "./locale-provider";
import Image from "next/image";

export function ProjectsSection() {
  const { locale, t } = useLocale();
  const containerRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState<Project | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 22, mass: 0.6 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 22, mass: 0.6 });

  function handleMouseMove(e: React.MouseEvent<HTMLUListElement>) {
    const bounds = containerRef.current?.getBoundingClientRect();
    if (!bounds) return;
    mouseX.set(e.clientX - bounds.left);
    mouseY.set(e.clientY - bounds.top);
  }

  return (
    <section className="py-3">
      <h2 className="mb-2 text-base font-medium tracking-tighter">
        {t("projects")}
      </h2>

      <ul
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setActive(null)}
        className="relative border-t border-border"
      >
        {siteConfig.projects.map((project) => (
          <motion.li
            key={project.id}
            onMouseEnter={() => setActive(project)}
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
            <div className="flex items-center justify-between gap-4 py-2 text-sm">
              <div className="min-w-0 flex-1">
                <p className="truncate">{project.name}</p>
                <p className="truncate text-[13.5px] mt-1.5 text-muted">
                  {project.description[locale]}
                </p>
              </div>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.name} live demo`}
                className="flex shrink-0 cursor-pointer items-center text-muted transition-colors hover:text-fg"
              >
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
              </a>
            </div>
          </motion.li>
        ))}

        <AnimatePresence mode="popLayout">
          {active && (
            <motion.div
              key={active.id}
              className="pointer-events-none absolute z-20 hidden w-52 sm:block"
              style={{ left: springX, top: springY, x: 24, y: -108 }}
              initial={{ opacity: 0, scale: 0.6, rotate: -6 }}
              animate={{ opacity: 1, scale: 1, rotate: -3 }}
              exit={{ opacity: 0, scale: 0.6, rotate: 6 }}
              transition={{ type: "spring", bounce: 0.5, duration: 0.45 }}
            >
              <div
                className="relative aspect-4/3 w-full overflow-hidden rounded-xl border border-border shadow-xl"
                style={{
                  background: `linear-gradient(140deg, ${active.gradientFrom}, ${active.gradientTo})`,
                }}
              >
                <Image
                  src={active.image}
                  alt={active.name}
                  fill
                  sizes="208px"
                  className="object-cover"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </ul>
    </section>
  );
}

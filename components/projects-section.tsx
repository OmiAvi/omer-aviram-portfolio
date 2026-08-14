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
  const [openMobileId, setOpenMobileId] = useState<string | null>(null);

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
        {siteConfig.projects.map((project) => {
          const mobileOpen = openMobileId === project.id;
          return (
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
                <button
                  type="button"
                  onClick={() =>
                    setOpenMobileId(mobileOpen ? null : project.id)
                  }
                  aria-expanded={mobileOpen}
                  className="min-w-0 flex-1 cursor-pointer text-left"
                >
                  <p className="truncate">{project.name}</p>
                  <p className="text-[13.5px] mt-1.5 leading-relaxed text-muted">
                    {project.description[locale]}
                  </p>
                </button>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.name} live demo`}
                    className="flex shrink-0 cursor-pointer items-center text-muted transition-colors hover:text-fg"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                  </a>
                )}
              </div>

              <AnimatePresence initial={false}>
                {mobileOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                      opacity: { duration: 0.2 },
                    }}
                    className="overflow-hidden sm:hidden"
                  >
                    <div className="flex gap-1.5 px-2 pb-3">
                      {project.images.map((src, i) => (
                        <div
                          key={src}
                          className="relative aspect-4/3 flex-1 overflow-hidden rounded-lg border border-border"
                          style={{
                            background: `linear-gradient(140deg, ${project.gradientFrom}, ${project.gradientTo})`,
                          }}
                        >
                          <Image
                            src={src}
                            alt={`${project.name} screenshot ${i + 1}`}
                            fill
                            sizes="50vw"
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          );
        })}

        <AnimatePresence mode="popLayout">
          {active && (
            <motion.div
              key={active.id}
              className="pointer-events-none absolute z-20 hidden w-52 sm:block"
              style={{ left: springX, top: springY, x: 24, y: -108 }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ type: "spring", bounce: 0.5, duration: 0.45 }}
            >
              <div className="relative aspect-4/3 w-full">
                {active.images.map((src, i) => {
                  const tilt = i === 0 ? -10 : 8;
                  const translateX = i === 0 ? -26 : 22;
                  const translateY = i === 0 ? -14 : 12;
                  return (
                    <div
                      key={src}
                      className="absolute inset-0 h-[88%] w-[88%] overflow-hidden rounded-xl border border-border shadow-xl"
                      style={{
                        transform: `translate(${translateX}px, ${translateY}px) rotate(${tilt}deg)`,
                        zIndex: i,
                        background: `linear-gradient(140deg, ${active.gradientFrom}, ${active.gradientTo})`,
                      }}
                    >
                      <Image
                        src={src}
                        alt={`${active.name} screenshot ${i + 1}`}
                        fill
                        sizes="184px"
                        className="object-cover"
                      />
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </ul>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EXPERIENCE, EXPERIENCE_LOGOS } from "@/lib/constants";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0 },
};

export function Experience() {
  return (
    <section
      id="experience"
      className="section-padding bg-zinc-50 dark:bg-zinc-900/30"
      aria-labelledby="experience-heading"
    >
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent dark:text-accent-light">
            Where I&apos;ve worked
          </span>
          <h2
            id="experience-heading"
            className="mt-2 text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl"
          >
            Experience
          </h2>
        </motion.div>

        <motion.div
          className="mt-12 relative border-l-2 border-zinc-200 pl-6 dark:border-zinc-700 sm:pl-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {EXPERIENCE.map((exp) => {
            const logoSrc = EXPERIENCE_LOGOS[exp.company];
            return (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                variants={item}
                className="relative pb-12 last:pb-0"
              >
<motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="absolute left-0 top-6 h-3 w-3 -translate-x-[7px] rounded-full bg-accent shadow-[0_0_0_4px] shadow-zinc-50 dark:bg-accent-light dark:shadow-zinc-900"
                  aria-hidden
                />
                <div className="group rounded-2xl border border-zinc-200 bg-white p-0 shadow-soft transition-all duration-300 hover:border-accent/20 hover:shadow-soft-lg dark:border-zinc-700 dark:bg-zinc-800/50 dark:hover:border-accent/30">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-6 pb-4">
                    {logoSrc && (
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-zinc-100/80 ring-1 ring-zinc-200/80 dark:bg-zinc-700/50 dark:ring-zinc-600/80">
                        <Image
                          src={logoSrc}
                          alt=""
                          width={56}
                          height={56}
                          className="h-full w-full object-contain p-1.5"
                        />
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                          {exp.company}
                        </h3>
                        <span className="text-sm text-zinc-500 dark:text-zinc-400">
                          {exp.period}
                        </span>
                      </div>
                      <p className="mt-0.5 text-sm font-medium text-accent dark:text-accent-light">
                        {exp.role}
                      </p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        {exp.location}
                      </p>
                    </div>
                  </div>
                  <ul className="list-disc space-y-2 border-t border-zinc-100 px-6 py-4 pl-9 text-sm text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

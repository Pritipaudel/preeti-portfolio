"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/constants";

export function Experience() {
  return (
    <section id="experience" className="bg-bg-primary dark:bg-bg-dark pt-16 pb-32">
      <div className="w-full max-w-none px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="flex items-baseline gap-4 mb-6">
            <span className="text-accent-red font-heading font-black text-6xl md:text-7xl lg:text-8xl">04</span>
            <span className="font-heading font-black text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-text-primary dark:text-white">EXPERIENCE</span>
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary dark:text-zinc-400 font-medium">
            Where I've worked and what I've accomplished.
          </p>
        </motion.div>

        <div className="flex flex-col border-t border-zinc-200 dark:border-zinc-800">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex flex-col md:flex-row gap-6 md:gap-12 py-10 border-b border-zinc-200 dark:border-zinc-800 transition-colors hover:bg-black/5 dark:hover:bg-white/5 px-4 -mx-4"
            >
              <div className="md:w-1/3 shrink-0">
                <h3 className="text-2xl font-heading font-extrabold uppercase tracking-tight text-text-primary dark:text-white mb-2">
                  {exp.company}
                </h3>
                <div className="font-mono text-xs uppercase tracking-[0.1em] text-accent-red mb-2">
                  {exp.role}
                </div>
                <div className="font-mono text-xs uppercase tracking-[0.05em] text-zinc-500">
                  {exp.period}
                </div>
              </div>
              
              <div className="md:w-2/3">
                <div className="relative border-l border-zinc-300 dark:border-zinc-700 ml-2 md:ml-4">
                  <ul className="space-y-6 text-text-primary dark:text-zinc-300 font-medium leading-relaxed list-none py-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="relative pl-8">
                        <span className="absolute -left-[5px] top-2.5 w-2.5 h-2.5 rounded-full bg-bg-primary dark:bg-bg-dark border-2 border-accent-red"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

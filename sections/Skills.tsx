"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/constants";

const categories = [
  { key: "languages", label: "01 — Languages", items: SKILLS.languages },
  { key: "libraries", label: "02 — Libraries", items: SKILLS.libraries },
  { key: "data", label: "03 — Data & DB", items: SKILLS.data },
  { key: "frameworks", label: "04 — Frameworks", items: SKILLS.frameworks },
  { key: "genai", label: "05 — Gen AI", items: SKILLS.genai },
  { key: "tools", label: "06 — Tools", items: SKILLS.tools },
] as const;

export function Skills() {
  return (
    <section id="skills" className="bg-bg-dark text-white pt-24 overflow-hidden relative">
      <div className="w-full max-w-none px-6 md:px-12 lg:px-20 mb-20 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="flex items-baseline gap-4 mb-6">
            <span className="text-accent-red font-heading font-black text-6xl md:text-7xl lg:text-8xl">02</span>
            <span className="font-heading font-black text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-white">SKILLS</span>
          </h2>
          <p className="text-xl md:text-2xl text-zinc-400 font-medium">
            What I reach for, and what I'm still learning.
          </p>
        </motion.div>

        <div className="flex flex-col border-t border-zinc-800">
          {categories.map(({ key, label, items }, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex flex-col md:flex-row md:items-center gap-8 py-10 md:py-12 border-b border-zinc-800 hover:bg-white/5 transition-colors px-4 -mx-4"
            >
              <div className="font-mono text-sm md:text-base uppercase tracking-[0.2em] text-zinc-500 md:w-1/4 shrink-0">
                {label.split("— ")[1] || label}
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 md:w-3/4">
                {items.map((item) => (
                  <span key={item} className="text-2xl md:text-3xl font-medium text-white tracking-tight">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-full overflow-hidden border-t border-b border-zinc-800 py-6 bg-black">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="text-6xl md:text-8xl font-heading font-black uppercase tracking-tight mx-8 text-zinc-800 opacity-20 select-none">
              DATA PIPELINES <span className="text-accent-red opacity-100">•</span> MACHINE LEARNING <span className="text-accent-red opacity-100">•</span> BACKEND SYSTEMS <span className="text-accent-red opacity-100">•</span>{" "}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

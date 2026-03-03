"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/constants";
import { SkillCard } from "@/components/SkillCard";

const categories = [
  { key: "frontend", label: "Frontend", items: SKILLS.frontend },
  { key: "backend", label: "Backend", items: SKILLS.backend },
  { key: "database", label: "Database", items: SKILLS.database },
  { key: "devops", label: "DevOps & Tools", items: SKILLS.devops },
] as const;

export function Skills() {
  let globalIndex = 0;

  return (
    <section
      id="skills"
      className="section-padding relative overflow-hidden bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900/40 dark:to-zinc-950"
      aria-labelledby="skills-heading"
    >
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(79, 70, 229, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(99, 102, 241, 0.05) 0%, transparent 50%)`,
        }}
        aria-hidden
      />

      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent dark:text-accent-light">
            Tech stack
          </span>
          <h2
            id="skills-heading"
            className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl"
          >
            Skills
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-zinc-600 dark:text-zinc-400">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="mt-14 space-y-16">
          {categories.map(({ key, label, items }, catIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: catIndex * 0.08 }}
            >
              <h3 className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-accent dark:text-accent-light">
                <span className="h-px flex-1 max-w-12 rounded-full bg-accent/40 dark:bg-accent-light/40" />
                {label}
                <span className="h-px flex-1 max-w-12 rounded-full bg-accent/40 dark:bg-accent-light/40" />
              </h3>
              <ul
                className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
                role="list"
              >
                {items.map((skill) => {
                  const idx = globalIndex++;
                  return (
                    <li key={skill}>
                      <SkillCard name={skill} index={idx} />
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

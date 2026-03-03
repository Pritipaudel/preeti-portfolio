"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import { TechBadge } from "@/components/TechBadge";

export function Projects() {
  return (
    <section
      id="projects"
      className="section-padding relative bg-white dark:bg-zinc-950"
      aria-labelledby="projects-heading"
    >
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at 70% 20%, rgba(79, 70, 229, 0.06) 0%, transparent 45%),
            radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.04) 0%, transparent 45%)`,
        }}
        aria-hidden
      />
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent dark:text-accent-light">
            What I&apos;ve built
          </span>
          <h2
            id="projects-heading"
            className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl"
          >
            Projects
          </h2>
          <p className="mt-3 max-w-xl text-zinc-600 dark:text-zinc-400">
            Selected work and experiments
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col rounded-2xl border border-zinc-200 bg-white shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-accent/25 hover:shadow-soft-lg hover:shadow-glow dark:border-zinc-700 dark:bg-zinc-800/40 dark:hover:border-accent/35 dark:hover:shadow-glow-dark"
            >
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                  {project.name}
                </h3>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <TechBadge key={t} name={t} />
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 border-t border-zinc-100 px-6 py-4 dark:border-zinc-700">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-white shadow-soft transition hover:bg-accent-hover hover:shadow-soft-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:focus:ring-offset-zinc-800"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View project
                </a>
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 px-4 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-700"
                  >
                    Live demo
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

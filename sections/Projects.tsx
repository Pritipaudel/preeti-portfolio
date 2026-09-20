"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import { TechBadge } from "@/components/TechBadge";

export function Projects() {
  return (
    <section id="projects" className="bg-bg-primary dark:bg-bg-dark pt-24 pb-32">
      <div className="w-full max-w-none px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="flex items-baseline gap-4 mb-6">
            <span className="text-accent-red font-heading font-black text-6xl md:text-7xl lg:text-8xl">03</span>
            <span className="font-heading font-black text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-text-primary dark:text-white">PERSONAL WORK</span>
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary dark:text-zinc-400 font-medium">
            Things I've designed and built end to end.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, i) => {
            const num = (i + 1).toString().padStart(3, "0");
            return (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group flex flex-col h-full"
              >
                {/* Hand-drawn style wrapper */}
                <div className="absolute -inset-2 border-[1.5px] border-zinc-900/20 dark:border-white/20 rounded-sm pointer-events-none transition-colors group-hover:border-accent-red/50 z-0" style={{ borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px' }}></div>
                
                {/* Crosshairs */}
                <span className="absolute -top-3 -left-3 text-zinc-400 font-mono text-sm leading-none">+</span>
                <span className="absolute -top-3 -right-3 text-zinc-400 font-mono text-sm leading-none">+</span>
                <span className="absolute -bottom-3 -left-3 text-zinc-400 font-mono text-sm leading-none">+</span>
                <span className="absolute -bottom-3 -right-3 text-zinc-400 font-mono text-sm leading-none">+</span>

                <div className="relative z-10 flex flex-col h-full bg-white dark:bg-zinc-900 p-6 shadow-sm group-hover:-translate-y-1 transition-transform duration-300">
                  <div className="relative w-full aspect-[4/3] bg-zinc-100 dark:bg-zinc-800 mb-6 flex items-center justify-center overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-heading font-extrabold uppercase tracking-tight text-text-primary dark:text-white">
                      {project.name}
                    </h3>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-8 h-8 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:bg-accent-red dark:hover:bg-accent-red transition-colors shrink-0"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>

                  <p className="text-sm text-text-secondary dark:text-zinc-400 font-medium leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <TechBadge key={t} name={t} />
                    ))}
                  </div>

                  <div className="mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center text-sm md:text-base font-mono text-zinc-500 uppercase tracking-widest">
                    <span className="font-bold">{num}</span>
                    <span>{project.year || "2026"}</span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  SITE,
  EDUCATION,
  SKILLS,
  EXPERIENCE,
  EXPERIENCE_LOGOS,
  PROJECTS,
} from "@/lib/constants";

type CvViewerProps = {
  open: boolean;
  onClose: () => void;
};

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.1, duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.15 + i * 0.06, duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function CvViewer({ open, onClose }: CvViewerProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-zinc-900/70 backdrop-blur-sm"
            onClick={handleBackdropClick}
            aria-hidden
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-4 z-[101] flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-700 dark:bg-zinc-900 sm:inset-8 md:inset-10 lg:inset-12"
            role="dialog"
            aria-modal="true"
            aria-label="Resume"
          >
            {/* Sticky header */}
            <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-zinc-200 bg-white/95 px-6 py-4 backdrop-blur-md dark:border-zinc-700 dark:bg-zinc-900/95">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
                Resume
              </h2>
              <div className="flex items-center gap-2">
                <a
                  href={SITE.cvUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-white shadow-soft transition hover:bg-accent-hover hover:shadow-soft-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg p-2 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-500"
                  aria-label="Close resume"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto">
              <div className="mx-auto max-w-3xl px-6 py-8 sm:px-8">
                {/* Hero block */}
                <motion.div
                  custom={0}
                  variants={sectionVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col items-center gap-4 border-b border-zinc-200 pb-8 dark:border-zinc-700 sm:flex-row sm:items-start sm:gap-6"
                >
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full ring-2 ring-zinc-200 dark:ring-zinc-600">
                    <Image
                      src="/images/profile.jpeg"
                      alt=""
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h1 className="text-2xl font-bold text-zinc-900 dark:text-white sm:text-3xl">
                      {SITE.name}
                    </h1>
                    <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                      {SITE.tagline}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400 sm:justify-start">
                      <a href={`mailto:${SITE.email}`} className="hover:text-accent">
                        {SITE.email}
                      </a>
                      <span>{SITE.location}</span>
                      <a href={SITE.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                        LinkedIn
                      </a>
                      <a href={SITE.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                        GitHub
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Education */}
                <motion.section
                  custom={1}
                  variants={sectionVariants}
                  initial="hidden"
                  animate="visible"
                  className="border-b border-zinc-200 py-8 dark:border-zinc-700"
                >
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent dark:text-accent-light">
                    Education
                  </h3>
                  <div className="space-y-6">
                    {EDUCATION.map((edu, i) => (
                      <motion.div
                        key={i}
                        custom={i}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-4 dark:border-zinc-700 dark:bg-zinc-800/30"
                      >
                        <p className="font-medium text-zinc-900 dark:text-white">
                          {edu.degree}
                        </p>
                        <p className="mt-0.5 text-sm text-zinc-600 dark:text-zinc-400">
                          {edu.school}
                        </p>
                        <p className="text-sm text-zinc-500 dark:text-zinc-500">
                          {edu.location} · {edu.period}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                {/* Skills */}
                <motion.section
                  custom={2}
                  variants={sectionVariants}
                  initial="hidden"
                  animate="visible"
                  className="border-b border-zinc-200 py-8 dark:border-zinc-700"
                >
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent dark:text-accent-light">
                    Technical Skills
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {(["frontend", "backend", "database", "devops"] as const).map((key, i) => (
                      <motion.div
                        key={key}
                        custom={i}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-4 dark:border-zinc-700 dark:bg-zinc-800/30"
                      >
                        <p className="mb-2 text-xs font-medium uppercase text-zinc-500 dark:text-zinc-400">
                          {key}
                        </p>
                        <p className="text-sm text-zinc-700 dark:text-zinc-300">
                          {SKILLS[key].join(", ")}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                {/* Experience */}
                <motion.section
                  custom={3}
                  variants={sectionVariants}
                  initial="hidden"
                  animate="visible"
                  className="border-b border-zinc-200 py-8 dark:border-zinc-700"
                >
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent dark:text-accent-light">
                    Experience
                  </h3>
                  <div className="space-y-4">
                    {EXPERIENCE.map((exp, i) => {
                      const logoSrc = EXPERIENCE_LOGOS[exp.company];
                      return (
                      <motion.div
                        key={i}
                        custom={i}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-4 dark:border-zinc-700 dark:bg-zinc-800/30"
                      >
                        <div className="flex items-start gap-3">
                          {logoSrc && (
                            <div className="h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-white dark:bg-zinc-700/50">
                              <Image
                                src={logoSrc}
                                alt=""
                                width={40}
                                height={40}
                                className="h-10 w-10 object-contain p-1"
                              />
                            </div>
                          )}
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-baseline justify-between gap-2">
                              <p className="font-medium text-zinc-900 dark:text-white">
                                {exp.company}
                              </p>
                              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                                {exp.period}
                              </span>
                            </div>
                            <p className="text-sm font-medium text-accent dark:text-accent-light">
                              {exp.role}
                            </p>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                              {exp.location}
                            </p>
                          </div>
                        </div>
                        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
                          {exp.points.map((point, j) => (
                            <li key={j}>{point}</li>
                          ))}
                        </ul>
                      </motion.div>
                    ); })}
                  </div>
                </motion.section>

                {/* Projects */}
                <motion.section
                  custom={4}
                  variants={sectionVariants}
                  initial="hidden"
                  animate="visible"
                  className="py-8"
                >
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent dark:text-accent-light">
                    Projects
                  </h3>
                  <div className="space-y-4">
                    {PROJECTS.map((proj, i) => (
                      <motion.div
                        key={i}
                        custom={i}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-4 dark:border-zinc-700 dark:bg-zinc-800/30"
                      >
                        <p className="font-medium text-zinc-900 dark:text-white">
                          {proj.name}
                        </p>
                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                          {proj.description}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {proj.tech.map((t) => (
                            <span
                              key={t}
                              className="rounded-md bg-zinc-200/80 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-600/80 dark:text-zinc-300"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-block text-sm font-medium text-accent hover:underline dark:text-accent-light"
                        >
                          GitHub
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

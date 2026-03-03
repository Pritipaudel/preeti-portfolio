"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { SITE } from "@/lib/constants";

type HeroProps = {
  onViewCv?: () => void;
};

export function Hero({ onViewCv }: HeroProps) {
  const { scrollY } = useScroll();
  const orb1Y = useTransform(scrollY, [0, 500], [0, 120]);
  const orb2Y = useTransform(scrollY, [0, 500], [0, -80]);
  const heroOpacity = useTransform(scrollY, [0, 200], [1, 0.3]);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 pb-16 flex flex-col items-center justify-center overflow-hidden section-padding"
      aria-label="Introduction"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-zinc-50/90 via-white to-zinc-50/80 dark:from-zinc-900/80 dark:via-zinc-950 dark:to-zinc-900/60" />
      <motion.div
        style={{ y: orb1Y }}
        className="absolute top-1/4 left-1/4 w-[28rem] h-[28rem] rounded-full bg-accent/5 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        aria-hidden
      />
      <motion.div
        style={{ y: orb2Y }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-indigo-200/25 dark:bg-accent/10 blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(79,70,229,0.08),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(129,140,248,0.12),transparent)]" />

      <motion.div
        style={{ opacity: heroOpacity }}
        className="container-narrow flex flex-col items-center text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-4 inline-block rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm font-medium text-accent dark:border-accent/30 dark:bg-accent/10 dark:text-accent-light"
        >
          Data Science Enthusiast
        </motion.span>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-8"
        >
          <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden ring-4 ring-white shadow-soft-lg dark:ring-zinc-800 dark:shadow-glow-dark transition-transform duration-500 hover:scale-105">
            <Image
              src="/images/profile.jpeg"
              alt="Profile photo of Priti Paudel Jaisi"
              fill
              sizes="(max-width: 640px) 160px, 208px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white"
        >
          Hi, I&apos;m {SITE.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-2xl text-lg text-zinc-600 sm:text-xl md:text-2xl dark:text-zinc-400"
        >
          {SITE.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-medium text-white shadow-soft transition hover:bg-accent-hover hover:shadow-soft-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:focus:ring-offset-zinc-950"
          >
            View Projects
            <svg className="h-4 w-4 transition group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          {onViewCv && (
            <motion.button
              type="button"
              onClick={onViewCv}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-6 py-3.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 hover:border-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 dark:focus:ring-offset-zinc-950"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View CV
            </motion.button>
          )}
          <motion.a
            href={SITE.cvUrl}
            download
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-6 py-3.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 dark:focus:ring-offset-zinc-950"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

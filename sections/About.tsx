"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const summary = (
  <>
    “Becoming better than yesterday.”<br /><br />

    Hi, I’m Preeti, a Computer Science student passionate about Data Engineering and intelligent data systems. I’m driven by curiosity about how raw data is transformed into meaningful insights and how strong data pipelines power real-world decisions.<br /><br />
   I’m strengthening my skills in SQL, Python, data modeling, and ETL while building projects that sharpen my problem-solving and system design abilities. I’m continuously learning, preparing for technical challenges, and growing beyond the classroom.<br /><br />

    <strong>Interests:</strong> Data Engineering, SQL, Python, Machine Learning, AI, Data Systems, Problem Solving
  </>
);
export function About() {
  return (
    <section
      id="about"
      className="section-padding relative bg-white dark:bg-zinc-950"
      aria-labelledby="about-heading"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(79,70,229,0.03),transparent)] dark:bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(129,140,248,0.05),transparent)]" />
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent dark:text-accent-light">
            Get to know me
          </span>
          <h2
            id="about-heading"
            className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl"
          >
            About Me
          </h2>
        </motion.div>

        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md overflow-hidden rounded-2xl bg-zinc-100 shadow-soft-lg dark:bg-zinc-800 ring-1 ring-zinc-200/50 dark:ring-zinc-700/50">
              <Image
                src="/images/profile.jpeg"
                alt="Priti Paudel Jaisi in professional setting"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
              {summary}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="rounded-lg bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                Kathmandu, Nepal
              </span>
              <span className="rounded-lg bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                CSIT Graduate
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

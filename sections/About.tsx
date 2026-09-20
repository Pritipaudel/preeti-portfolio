"use client";

import { motion } from "framer-motion";

const summary = (
  <div className="flex flex-col gap-6">
    <p className="font-bold">
      I’m an AI Engineer based in Nepal, building intelligent systems that turn ideas and data into real-world solutions. I enjoy working beyond the model — understanding data, designing effective solutions, building APIs and pipelines, and bringing AI into production.
    </p>

    <p className="font-normal text-zinc-600 dark:text-zinc-400">
      Outside of work, I explore machine learning, computer vision, NLP, and generative AI through projects and experiments. There’s always something new to understand, improve, or turn into a working system.
    </p>

    <p className="font-normal text-zinc-600 dark:text-zinc-400">
      Right now, I’m focused on building AI that is not only intelligent, but reliable, practical, and built to be used.
    </p>
  </div>
);

export function About() {
  return (
    <section id="about" className="bg-bg-primary dark:bg-bg-dark pt-24 pb-16">
      <div className="w-full max-w-none px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="flex items-baseline gap-4">
            <span className="text-accent-red font-heading font-black text-6xl md:text-7xl lg:text-8xl">01</span>
            <span className="font-heading font-black text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-text-primary dark:text-white">ABOUT</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-7"
          >
            <div className="text-2xl md:text-3xl leading-snug text-text-primary dark:text-zinc-200">
              {summary}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-5 flex flex-col gap-12"
          >
            <div className="pl-6 border-l-2 border-accent-red">
              <p className="text-3xl md:text-4xl leading-tight font-medium text-text-primary dark:text-zinc-200">
                Becoming better than yesterday.
              </p>
            </div>

            <div className="flex flex-col border-t border-zinc-200 dark:border-zinc-800">
              <div className="py-5 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-start gap-4">
                <span className="font-mono text-sm md:text-base text-text-secondary uppercase tracking-[0.15em] shrink-0">ROLE</span>
                <span className="text-base md:text-lg text-right text-text-primary dark:text-zinc-300 font-mono">Data Science Enthusiast</span>
              </div>
              <div className="py-5 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-start gap-4">
                <span className="font-mono text-sm md:text-base text-text-secondary uppercase tracking-[0.15em] shrink-0">LOCATION</span>
                <span className="text-base md:text-lg text-right text-text-primary dark:text-zinc-300 font-mono">Kathmandu, Nepal</span>
              </div>
              <div className="py-5 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-start gap-4">
                <span className="font-mono text-sm md:text-base text-text-secondary uppercase tracking-[0.15em] shrink-0">EDUCATION</span>
                <span className="text-base md:text-lg text-right text-text-primary dark:text-zinc-300 font-mono">BSC.CSIT</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

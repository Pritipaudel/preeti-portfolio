"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col md:flex-row bg-bg-primary overflow-hidden"
      aria-label="Introduction"
    >
      {/* Left Panel: illustration — B&W default, color on hover, no movement */}
      <div className="hidden md:block md:w-5/12 lg:w-[40%] relative h-full shrink-0 group" style={{ backgroundColor: "#F5F2EB" }}>
        {/* Shared wrapper — both images perfectly overlaid */}
        <div className="absolute inset-0 flex items-end justify-center pb-6 px-2">
          <div className="relative w-full" style={{ aspectRatio: "3/4", maxHeight: "96%" }}>
            {/* Color version underneath */}
            <Image
              src="/images/priti-color2.jpg"
              alt="Priti Paudel - color illustration"
              fill
              className="object-contain object-bottom"
              sizes="40vw"
              priority
            />
            {/* B&W on top — fades out on hover to reveal color */}
            <Image
              src="/images/priti-bw.png"
              alt="Priti Paudel - sketch illustration"
              fill
              className="object-contain object-bottom transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
              sizes="40vw"
              priority
            />
          </div>
        </div>
        {/* Caption bar pinned to bottom */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-black text-white px-5 py-4 text-xs md:text-sm font-mono uppercase tracking-[0.2em] z-10">
          <span>FIG. 01 — THE AUTHOR</span>
          <span>KTM, NEPAL</span>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex flex-col pl-6 pr-0 md:pl-10 md:pr-0 lg:pl-14 lg:pr-0 xl:pl-16 xl:pr-0 pt-24 pb-0">
        {/* Main content — grows to push buttons down */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 flex flex-col justify-center"
        >
          <span className="text-accent font-mono text-sm tracking-[0.25em] font-bold uppercase block mb-6">
            — AI/ML Engineer
          </span>

          <h1
            className="font-heading font-black uppercase leading-[0.80] tracking-tighter text-text-primary mb-8 lg:mb-12"
            style={{ fontSize: "clamp(4rem, 13vw, 17rem)" }}
          >
            PRITI
            <br />
            PAUDEL.
          </h1>

          <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-text-secondary leading-relaxed">
            {SITE.tagline}
          </p>
        </motion.div>

        {/* Bottom bar — buttons above, line below, aligned with image caption */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-wrap items-center gap-4 py-5">
            <Link
              href="#projects"
              className="group inline-flex items-center gap-3 bg-text-primary text-bg-primary px-8 py-5 font-mono text-base md:text-lg uppercase tracking-[0.15em] font-bold transition-colors hover:bg-accent hover:text-white"
            >
              SEE THE WORK
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-y-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </Link>

            <div className="inline-flex items-center gap-3 border-2 border-accent-red px-8 py-5 font-mono text-base md:text-lg uppercase tracking-[0.15em] text-accent-red font-bold">
              <span className="w-3 h-3 bg-accent-red shrink-0"></span>
              AVAILABLE FOR WORK
            </div>
          </div>
          {/* Line sits below the buttons, flush with the image caption bar */}
          <div className="border-t border-zinc-300 dark:border-zinc-700"></div>
        </motion.div>
      </div>
    </section>
  );
}



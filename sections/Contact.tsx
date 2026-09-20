"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

export function Contact() {
  const words = ["LET'S", "WORK", "TOGETHER."];

  return (
    <section id="connect" className="bg-bg-dark text-white pt-32 flex flex-col min-h-screen">
      <div className="w-full max-w-none px-6 md:px-12 lg:px-20 text-left flex-grow mb-32">
        <div className="mb-16 md:mb-24">
          <h2 className="flex items-baseline gap-4 mb-6">
            <span className="text-accent-red font-heading font-black text-6xl md:text-7xl lg:text-8xl">06</span>
            <span className="font-heading font-black text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-white">CONTACT</span>
          </h2>
        </div>

        <h2 className="text-6xl sm:text-7xl md:text-[9rem] lg:text-[11rem] font-heading font-black uppercase tracking-tighter leading-[0.85] mb-24 flex flex-wrap gap-x-6 gap-y-2">
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <div className="mt-16 mb-24">
          <p className="text-xl md:text-2xl text-zinc-400 font-medium mb-6">
            Open to AI/ML roles.
          </p>
          <a
            href={SITE.links.email}
            className="inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white hover:text-zinc-300 transition-colors border-b-[4px] border-accent-red pb-2"
          >
            {SITE.links.email.replace('mailto:', '')}
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-start gap-10 mt-12">
          <a
            href={SITE.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base font-mono font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors"
          >
            GITHUB
          </a>
          <a
            href={SITE.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base font-mono font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors"
          >
            LINKEDIN
          </a>
          <a
            href="https://x.com/poudel_priti"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base font-mono font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors"
          >
            TWITTER
          </a>
          <a
            href={SITE.links.email}
            className="text-sm md:text-base font-mono font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors"
          >
            EMAIL
          </a>
        </div>
      </div>

      {/* Light footer */}
      <div className="bg-[#f0ebe1] w-full py-8 px-6 md:px-12 lg:px-20 mt-auto border-t border-zinc-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-sm uppercase tracking-[0.2em] text-zinc-800 font-bold">
          <span>THINK. BUILD. ITERATE.</span>
          <span>© 2026 {SITE.name.toUpperCase()}</span>
        </div>
      </div>
    </section>
  );
}
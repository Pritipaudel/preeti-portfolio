"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SKILL_LOGO } from "@/lib/skillLogos";

type SkillCardProps = {
  name: string;
  index: number;
};

export function SkillCard({ name, index }: SkillCardProps) {
  const logoSrc = SKILL_LOGO[name];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.35,
        delay: index * 0.03,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        scale: 1.05,
        y: -4,
        transition: { duration: 0.2 },
      }}
      className="group relative flex flex-col items-center gap-3 rounded-2xl border border-zinc-200/80 bg-white/90 px-5 py-6 shadow-soft backdrop-blur-sm transition-all duration-300 hover:border-accent/25 hover:shadow-soft-lg hover:shadow-glow dark:border-zinc-700/80 dark:bg-zinc-800/80 dark:hover:border-accent/40 dark:hover:shadow-glow-dark"
    >
      <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-zinc-100/80 p-2 transition-colors duration-300 group-hover:bg-accent/10 dark:bg-zinc-700/80 dark:group-hover:bg-accent/20">
        {logoSrc ? (
          <Image
            src={logoSrc}
            alt=""
            width={32}
            height={32}
            className="object-contain transition-transform duration-300 group-hover:scale-110"
            unoptimized
          />
        ) : (
          <span className="text-lg font-semibold text-accent opacity-80">
            {name.charAt(0)}
          </span>
        )}
      </div>
      <span className="text-center text-sm font-medium text-zinc-700 dark:text-zinc-200">
        {name}
      </span>
    </motion.div>
  );
}

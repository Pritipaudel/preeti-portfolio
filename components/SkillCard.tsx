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
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{
        duration: 0.3,
        delay: index * 0.02,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ scale: 1.05 }}
      className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-4 py-2 shadow-sm transition-colors hover:border-accent hover:bg-accent/5 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-accent dark:hover:bg-accent/10 m-1"
    >
      {logoSrc ? (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center">
          <Image
            src={logoSrc}
            alt=""
            width={20}
            height={20}
            className="object-contain"
            unoptimized
          />
        </div>
      ) : (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 dark:bg-accent/20">
          <span className="text-xs font-bold text-accent">
            {name.charAt(0)}
          </span>
        </div>
      )}
      <span className="text-sm font-medium text-text-primary dark:text-zinc-200">
        {name}
      </span>
    </motion.div>
  );
}

"use client";

import Image from "next/image";
import { SKILL_LOGO } from "@/lib/skillLogos";

type TechBadgeProps = { name: string };

export function TechBadge({ name }: TechBadgeProps) {
  const logoSrc = SKILL_LOGO[name];

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-300/80 bg-white/50 px-3 py-1 text-xs font-mono text-text-primary dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
      {logoSrc ? (
        <Image
          src={logoSrc}
          alt=""
          width={14}
          height={14}
          className="h-3.5 w-3.5 shrink-0 object-contain"
          unoptimized
        />
      ) : null}
      {name}
    </span>
  );
}

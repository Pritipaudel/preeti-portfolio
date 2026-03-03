"use client";

type SectionDividerProps = {
  variant?: "gradient" | "line" | "dots";
};

export function SectionDivider({ variant = "gradient" }: SectionDividerProps) {
  const wrapper = "mx-auto max-w-6xl px-6 py-6 sm:px-8 md:px-12 lg:px-16";
  if (variant === "line") {
    return (
      <div className={wrapper} aria-hidden>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-700" />
      </div>
    );
  }
  if (variant === "dots") {
    return (
      <div className={`flex justify-center gap-1.5 ${wrapper}`} aria-hidden>
        <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-600" />
        <span className="h-1 w-1 rounded-full bg-zinc-400 dark:bg-zinc-500" />
        <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-600" />
      </div>
    );
  }
  return (
    <div className={wrapper} aria-hidden>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent dark:via-accent/30" />
    </div>
  );
}

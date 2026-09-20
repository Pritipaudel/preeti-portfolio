"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { useTheme } from "@/components/ThemeProvider";
import { useCvViewer } from "@/lib/CvViewerContext";

const SCROLL_THRESHOLD = 60;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { openCv } = useCvViewer();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const id = e.target.getAttribute("id") ?? "";
            setActiveId(id);
            break;
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    NAV_LINKS.forEach(({ href }) => {
      const id = href.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-200 ${
        scrolled
          ? "border-zinc-200 bg-bg-primary/95 backdrop-blur-md"
          : "border-zinc-200/60 bg-bg-primary/80 backdrop-blur-sm"
      }`}
      role="banner"
    >
      <nav
        className="w-full flex items-center justify-between gap-6 px-6 py-4 sm:px-10 md:px-14 lg:px-20"
        aria-label="Main navigation"
      >
        {/* Red dash accent - matches reference design */}
        <div className="flex items-center gap-3">
          <span className="text-accent font-mono text-sm md:text-base font-bold">——</span>
          <Link
            href="#hero"
            className="text-sm md:text-base font-bold font-mono uppercase tracking-[0.18em] text-text-secondary hover:text-text-primary transition-colors"
          >
            {SITE.name.split(" ")[0]}
          </Link>
        </div>

        <ul className="hidden flex-1 justify-end items-center gap-8 lg:gap-14 pr-4 md:flex" role="list">
          {NAV_LINKS.slice(1).map(({ href, label }) => {
            const id = href.slice(1);
            const isActive = activeId === id;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-base lg:text-[17px] font-mono font-bold uppercase tracking-[0.2em] transition-colors ${
                    isActive
                      ? "text-accent"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          <li>
            <a
              href={SITE.cvUrl}
              download
              className="flex items-center gap-2 border-[1.5px] border-text-primary px-6 py-2.5 text-base lg:text-[17px] font-mono font-bold uppercase tracking-[0.18em] text-text-primary transition-colors hover:bg-text-primary hover:text-bg-primary"
            >
              CV
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          {/* Theme toggle - hidden on md+ to keep nav clean */}
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded p-1.5 text-zinc-500 transition hover:text-zinc-900 md:hidden"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <button
            type="button"
            className="rounded p-1.5 text-zinc-600 transition hover:text-zinc-900 md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-zinc-200 bg-bg-primary md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4" role="list">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={SITE.cvUrl}
                  download
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 w-full rounded-lg px-3 py-2 text-left text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                >
                  Resume
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

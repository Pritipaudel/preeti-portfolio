"use client";

import Link from "next/link";
import { SITE, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg-primary border-t border-zinc-200 dark:bg-bg-primary dark:border-zinc-200" role="contentinfo">
      <div className="container-wide px-6 md:px-12 py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-mono uppercase tracking-[0.15em] text-text-secondary">
            © {year} {SITE.name}. Built with care.
          </p>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center gap-8" role="list">
              {NAV_LINKS.filter((l) => l.href !== "#hero").map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-xs font-mono uppercase tracking-[0.15em] text-text-secondary transition hover:text-text-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}



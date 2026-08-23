'use client';

import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export function Header() {
  return (
    <header className="fixed top-0 w-full z-40 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-950/60">
      <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between" aria-label="Primary navigation">
        <Link href="/" className="text-lg font-bold text-slate-900 dark:text-slate-50">
          Renuka Oladri
        </Link>

        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li><a href="#projects" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 transition-colors">Projects</a></li>
            <li><a href="#publications" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 transition-colors">Publications</a></li>
            <li><a href="#how-i-work" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 transition-colors">How I Work</a></li>
            <li><a href="#contact" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 transition-colors">Contact</a></li>
          </ul>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

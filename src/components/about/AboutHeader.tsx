'use client';

import ThemeToggle from '@/components/ThemeToggle';
import Link from 'next/link';

export default function AboutHeader() {
  return (
    <header className='about-header-glass fixed top-0 z-50 w-full border-b'>
      <nav className='mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8'>
        <Link
          href='/'
          className='text-xl font-bold tracking-tight text-slate-900 transition-colors hover:text-violet-600 dark:text-white dark:hover:text-violet-300'
        >
          ← MHLab
        </Link>
        <div className='flex items-center gap-2'>
          <span className='mr-2 text-sm text-slate-500 dark:text-slate-400'>
            🧑‍💻 About
          </span>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

'use client';

import Link from 'next/link';
import HomeLanguageFlags from '@/components/home/shared/HomeLanguageFlags';
import ThemeToggle from '@/components/ThemeToggle';

export function ProductDetailNav() {
  return (
    <nav className='fixed top-0 z-50 w-full border-b border-slate-200/60 bg-white/60 shadow-sm backdrop-blur-xl dark:border-slate-800/40 dark:bg-slate-950/70 dark:shadow-none'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8'>
        <Link
          href='/product'
          className='text-xl font-extrabold tracking-tighter text-slate-900 transition-opacity hover:opacity-80 dark:text-slate-50'
        >
          ← MHLab
        </Link>
        <div className='flex items-center gap-3 sm:gap-4'>
          <span className='hidden text-sm font-semibold tracking-tight text-slate-500 dark:text-slate-400 sm:inline'>
            Products
          </span>
          <HomeLanguageFlags />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

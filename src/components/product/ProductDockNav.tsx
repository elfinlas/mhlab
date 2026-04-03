'use client';

import Link from 'next/link';
import { Bookmark, BookOpen, House, Settings } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function ProductDockNav() {
  const { t } = useLanguage();

  return (
    <nav className='fixed bottom-0 left-0 z-50 flex w-full items-center justify-around rounded-t-2xl border-t border-gray-100/90 bg-white/80 px-6 pb-6 pt-3 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] backdrop-blur-2xl dark:border-slate-800 dark:bg-slate-950/85 md:hidden'>
      <Link
        href='/'
        className='flex flex-col items-center justify-center rounded-xl px-4 py-2 text-gray-400 transition-transform active:scale-95'
      >
        <House className='h-5 w-5' aria-hidden />
        <span className='mt-1 text-[10px] font-bold uppercase tracking-widest'>
          {t('productListing.mobileHome')}
        </span>
      </Link>
      <span className='flex flex-col items-center justify-center rounded-xl bg-indigo-500/10 px-4 py-2 text-indigo-600'>
        <BookOpen className='h-5 w-5' aria-hidden />
        <span className='mt-1 text-[10px] font-bold uppercase tracking-widest'>
          {t('productListing.mobileLibrary')}
        </span>
      </span>
      <span className='flex flex-col items-center justify-center px-4 py-2 text-gray-400'>
        <Bookmark className='h-5 w-5' aria-hidden />
        <span className='mt-1 text-[10px] font-bold uppercase tracking-widest'>
          {t('productListing.mobileSaved')}
        </span>
      </span>
      <span className='flex flex-col items-center justify-center px-4 py-2 text-gray-400'>
        <Settings className='h-5 w-5' aria-hidden />
        <span className='mt-1 text-[10px] font-bold uppercase tracking-widest'>
          {t('productListing.mobileSettings')}
        </span>
      </span>
    </nav>
  );
}

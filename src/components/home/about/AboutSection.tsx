'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className='text-gray-900'>
      <div className='mb-4 flex items-center gap-2'>
        <span
          className='text-xl'
          aria-hidden
        >
          🧑‍💻
        </span>
        <h2 className='flex items-center gap-2 text-2xl font-bold text-indigo-700 dark:text-zinc-50'>
          {t('home.aboutHeading')}{' '}
          <span className='text-indigo-500 dark:text-indigo-200' aria-hidden>
            »
          </span>
        </h2>
      </div>
      <div className='flex flex-col gap-6 sm:flex-row'>
        <p className='flex-1 text-sm leading-relaxed text-gray-800 sm:text-base dark:text-zinc-100'>
          {t('stitchPage.aboutBody')}
        </p>
        <div className='w-full flex-shrink-0 sm:w-48'>
          <div className='overflow-hidden rounded-xl border-4 border-indigo-100 shadow-md dark:border-indigo-500/35 dark:shadow-lg dark:shadow-indigo-950/40'>
            <Image
              src='/about/img_08.webp'
              alt={t('stitchPage.aboutImageAlt')}
              width={400}
              height={1000}
              className='h-auto w-full object-cover'
            />
          </div>
        </div>
      </div>
      <Link
        href='/about'
        className='mt-6 inline-flex items-center rounded-xl border border-transparent bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(15,23,42,0.35),0_0_28px_rgba(99,102,241,0.2)] transition-all duration-200 hover:bg-slate-800 hover:shadow-[0_6px_20px_rgba(15,23,42,0.42),0_0_36px_rgba(129,140,248,0.26)] dark:border-white/20 dark:bg-slate-900 dark:text-white dark:shadow-[0_0_12px_rgba(99,102,241,0.3),0_0_28px_rgba(129,140,248,0.15)] dark:hover:border-white/30 dark:hover:bg-slate-800 dark:hover:text-white dark:hover:shadow-[0_0_16px_rgba(129,140,248,0.35),0_0_36px_rgba(165,180,252,0.18)] sm:mt-8'
      >
        {t('stitchPage.aboutReadMore')}
        <svg
          className='ml-2 h-4 w-4 shrink-0'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          aria-hidden
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M9 5l7 7-7 7'
          />
        </svg>
      </Link>
    </section>
  );
}

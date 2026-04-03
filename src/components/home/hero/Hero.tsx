'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { HERO_BADGE_KEYS } from '@/components/home/lib/constants';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <header className='mb-16 flex flex-col items-center gap-8 md:flex-row'>
      <div className='relative h-48 w-48 flex-shrink-0'>
        <div
          className='absolute inset-0 z-0 rotate-12 rounded-full border-4 border-indigo-200 shadow-[0_0_15px_rgba(99,102,241,0.5)]'
          aria-hidden
        />
        <Image
          src='/about/profile.webp'
          alt={t('stitchPage.profileAlt')}
          width={192}
          height={192}
          className='relative z-10 h-full w-full rounded-full border-4 border-white object-cover shadow-lg'
          priority
        />
      </div>
      <div>
        <h2 className='mb-1 text-xl font-medium text-gray-600 dark:text-slate-300'>
          {t('stitchPage.heroGreeting')}
        </h2>
        <h1 className='mb-4 flex flex-wrap items-center gap-2 text-4xl font-bold md:text-5xl'>
          <span>{t('stitchPage.heroLead')}</span>
          <span className='text-gradient'>MHLab</span>
          <span>{t('stitchPage.heroTrail')}</span>
          <span className='text-3xl text-indigo-400' aria-hidden>
            »
          </span>
        </h1>
        <p className='mb-6 max-w-2xl leading-relaxed text-gray-600 dark:text-slate-300'>
          {t('stitchPage.heroDescription1')}
          <br />
          {t('stitchPage.heroDescription2')}
        </p>
        <div className='flex flex-wrap gap-2'>
          {HERO_BADGE_KEYS.map((b) => (
            <span
              key={b.key}
              className='inline-flex items-center gap-1 rounded-full border border-gray-300 bg-white px-3 py-1 text-sm font-medium text-gray-700 shadow-sm dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200'
            >
              {b.icon} {t(`stitchPage.badges.${b.key}`)}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}

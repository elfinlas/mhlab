'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export function ProductComingSoon() {
  const { t } = useLanguage();

  return (
    <div className='mx-auto mt-16 max-w-xl'>
      <div className='rounded-3xl bg-white/90 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.04)] ring-1 ring-indigo-500/[0.08] backdrop-blur-sm dark:bg-slate-900/80 dark:ring-indigo-400/15'>
        <div className='flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left'>
          <span className='text-3xl md:text-4xl' aria-hidden>
            👀
          </span>
          <div className='flex-1'>
            <p className='mb-1 text-lg font-semibold text-gray-900 dark:text-slate-100 md:text-xl'>
              {t('productListing.comingTitle')}
            </p>
            <p className='text-sm text-gray-500 dark:text-slate-400'>
              {t('productListing.comingBody')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

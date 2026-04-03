'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export function ProductPageHeader() {
  const { t } = useLanguage();

  return (
    <header className='mb-16 max-w-2xl'>
      <span className='mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400'>
        {t('productListing.eyebrow')}
      </span>
      <h1 className='mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 dark:text-slate-50 sm:text-5xl'>
        {t('productListing.titleLead')}{' '} <br/>
        <span className='bg-gradient-to-r from-indigo-500 to-blue-400 bg-clip-text text-transparent dark:from-indigo-400 dark:to-sky-400'>
          {t('productListing.titleGradient')}
        </span>
      </h1>
      <p className='text-lg font-medium leading-relaxed text-gray-500 dark:text-slate-400'>
        {t('productListing.subtitle')}
      </p>

    </header>
  );
}

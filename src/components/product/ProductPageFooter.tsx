'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export function ProductPageFooter() {
  const { t } = useLanguage();

  return (
    <footer className='mt-24 flex flex-col items-center justify-between gap-8 border-t border-gray-100/80 pt-12 dark:border-slate-800/80 md:flex-row'>
      <div className='flex items-center space-x-2'>
        <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600'>
          <span className='text-xs font-bold text-white'>M</span>
        </div>
        <span className='font-extrabold tracking-tighter text-gray-900 dark:text-slate-100'>
          {t('productListing.footerBrand')}
        </span>
      </div>
      <div className='flex flex-wrap justify-center gap-6 md:space-x-8'>
        <Link
          href='/support/privacy/travel_log'
          className='text-xs font-bold uppercase tracking-widest text-gray-400 transition-colors hover:text-indigo-600'
        >
          {t('productListing.footerPrivacy')}
        </Link>
        <Link
          href='/support/privacy/myc'
          className='text-xs font-bold uppercase tracking-widest text-gray-400 transition-colors hover:text-indigo-600'
        >
          {t('productListing.footerTerms')}
        </Link>
        <Link
          href='/about'
          className='text-xs font-bold uppercase tracking-widest text-gray-400 transition-colors hover:text-indigo-600'
        >
          {t('productListing.footerContact')}
        </Link>
      </div>
      <p className='text-xs font-medium text-gray-400'>
        {t('productListing.footerCopyright')}
      </p>
    </footer>
  );
}

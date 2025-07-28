'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  const switchLanguage = (newLocale: string) => {
    setLocale(newLocale as any);
  };

  return (
    <div className='relative inline-block text-left'>
      <select
        value={locale}
        onChange={e => switchLanguage(e.target.value)}
        className='bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer text-sm leading-none'
        style={{ lineHeight: '1.2' }}
      >
        <option value='ko'>🇰🇷 한국어</option>
        <option value='en'>🇺🇸 영어</option>
        <option value='ja'>🇯🇵 일본어</option>
      </select>
      <div className='absolute inset-y-0 right-0 flex items-center pl-10  pointer-events-none'>
        <svg
          className='h-4 w-4 text-slate-400'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </div>
    </div>
  );
}

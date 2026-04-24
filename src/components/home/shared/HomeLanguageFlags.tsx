'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/ui/utils';

const FLAGS: { locale: 'ko' | 'en'; flag: string; ariaKey: string }[] = [
  { locale: 'ko', flag: '🇰🇷', ariaKey: 'stitchPage.ariaLangKo' },
  { locale: 'en', flag: '🇺🇸', ariaKey: 'stitchPage.ariaLangEn' },
];

export default function HomeLanguageFlags() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      role='group'
      aria-label={t('stitchPage.ariaLanguageGroup')}
      className='flex rounded-full border border-gray-200/90 bg-white/85 p-1 shadow-sm backdrop-blur-md dark:border-slate-600 dark:bg-slate-800/85'
    >
      {FLAGS.map(({ locale: loc, flag, ariaKey }) => (
        <button
          key={loc}
          type='button'
          onClick={() => setLocale(loc)}
          className={cn(
            'rounded-full px-2.5 py-1.5 text-lg leading-none transition',
            locale === loc
              ? 'bg-indigo-100 ring-2 ring-indigo-400/40 dark:bg-indigo-900/50 dark:ring-indigo-400/30'
              : 'opacity-65 hover:opacity-100',
          )}
          aria-label={t(ariaKey)}
          aria-pressed={locale === loc}
        >
          <span aria-hidden>{flag}</span>
        </button>
      ))}
    </div>
  );
}

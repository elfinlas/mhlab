'use client';

import type { Locale } from '@/lib/i18n';
import { orderedProductLocales } from '@/data/Product';
import { useLanguage } from '@/contexts/LanguageContext';

const LOCALE_LABEL_KEY: Record<Locale, string> = {
  ko: 'productListing.localeKo',
  en: 'productListing.localeEn',
  ja: 'productListing.localeJa',
};

type ProductSupportedLocalesProps = {
  locales: readonly Locale[];
  /** 목록 카드·홈 그리드용 소형 뱃지 */
  variant?: 'default' | 'compact';
  className?: string;
};

export function ProductSupportedLocales({
  locales,
  variant = 'default',
  className = '',
}: ProductSupportedLocalesProps) {
  const { t } = useLanguage();
  const ordered = orderedProductLocales(locales);
  if (ordered.length === 0) return null;

  const isCompact = variant === 'compact';
  const rowClass = isCompact
    ? 'flex flex-wrap items-center gap-x-2 gap-y-1'
    : 'mt-3 flex flex-wrap items-center gap-2';

  const labelClass = isCompact
    ? 'text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400'
    : 'text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400';

  const chipClass = isCompact
    ? 'rounded-md border border-slate-200/90 bg-white/80 px-1.5 py-0.5 text-[10px] font-bold text-slate-600 dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-300'
    : 'rounded-full border border-slate-200/90 bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-slate-700 dark:border-slate-600 dark:bg-slate-800/90 dark:text-slate-200';

  return (
    <div
      className={`${rowClass} ${className}`.trim()}
      role='group'
      aria-label={t('productListing.supportedLanguagesAria')}
    >
      <span className={labelClass}>{t('productListing.supportedLanguages')}</span>
      <span className='flex flex-wrap items-center gap-1.5'>
        {ordered.map((code) => (
          <span key={code} className={chipClass}>
            {t(LOCALE_LABEL_KEY[code])}
          </span>
        ))}
      </span>
    </div>
  );
}

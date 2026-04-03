'use client';

import { Search } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

type ProductSearchFieldProps = {
  value: string;
  onChange: (value: string) => void;
  wrapperClassName: string;
  inputClassName: string;
};

export function ProductSearchField({
  value,
  onChange,
  wrapperClassName,
  inputClassName,
}: ProductSearchFieldProps) {
  const { t } = useLanguage();
  const label = t('productListing.searchPlaceholder');

  return (
    <div className={wrapperClassName}>
      <span className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 dark:text-slate-500'>
        <Search className='h-4 w-4' aria-hidden />
      </span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={inputClassName}
        placeholder={label}
        type='search'
        aria-label={label}
      />
    </div>
  );
}

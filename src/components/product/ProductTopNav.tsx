'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import ThemeToggle from '@/components/ThemeToggle';
import HomeLanguageFlags from '@/components/home/shared/HomeLanguageFlags';
import { ProductSearchField } from '@/components/product/ProductSearchField';

type ProductTopNavProps = {
  searchValue: string;
  onSearchChange: (value: string) => void;
};

export function ProductTopNav({
  searchValue,
  onSearchChange,
}: ProductTopNavProps) {
  const { t } = useLanguage();

  return (
    <nav className='fixed top-0 z-50 w-full bg-white/60 backdrop-blur-xl dark:bg-slate-950/70 dark:backdrop-blur-xl'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8'>
        <Link
          href='/'
          className='text-xl font-extrabold tracking-tighter text-[#060e20] transition-opacity hover:opacity-80 dark:text-slate-100'
        >
          MHLab
        </Link>

        <div className='flex items-center gap-3 sm:gap-4'>
          <ProductSearchField
            value={searchValue}
            onChange={onSearchChange}
            wrapperClassName='relative hidden sm:block'
            inputClassName='w-48 rounded-xl border-0 bg-gray-50 py-2 pl-10 pr-4 text-sm text-gray-900 ring-1 ring-gray-200/60 transition-all placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500/25 dark:bg-slate-800/90 dark:text-slate-100 dark:ring-slate-600/50 dark:placeholder:text-slate-500'
          />
          <HomeLanguageFlags />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

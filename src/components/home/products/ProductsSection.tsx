'use client';

import Link from 'next/link';
import { LayoutGrid } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { homeProducts } from '@/components/home/lib/content';
import ProductCard from '@/components/home/products/ProductCard';
import {
  homeProductCardDescription,
  homeProductCardTitle,
} from '@/data/Product';

/** ProductCard와 동일한 링크·카드·CTA 스타일 (코드 중복은 의도적 — 레이아웃 동기화) */
const moreCardLinkClass =
  'group block h-full rounded-2xl outline-none transition-transform duration-300 ease-out will-change-transform hover:-translate-y-2 focus-visible:-translate-y-1 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950';

const moreCardShellClass = [
  'glass-card flex h-full flex-col rounded-2xl p-6 shadow-md transition-shadow duration-300 ease-out sm:p-7 lg:p-8',
  'group-hover:shadow-2xl group-hover:shadow-indigo-200/40 dark:group-hover:shadow-indigo-950/30',
  'bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800/80 dark:to-slate-900/80',
].join(' ');

const moreCardCtaClass = [
  'inline-flex w-full items-center justify-center rounded-full border border-indigo-100 bg-white px-4 py-2 font-medium text-indigo-600 shadow-sm transition-all duration-300 ease-out',
  'dark:border-slate-600 dark:bg-slate-800/90 dark:text-indigo-300',
  'group-hover:border-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-500 group-hover:text-white group-hover:shadow-md group-hover:shadow-indigo-200',
  'group-hover:dark:shadow-indigo-950/40',
  'group-focus-visible:border-transparent group-focus-visible:bg-gradient-to-r group-focus-visible:from-indigo-500 group-focus-visible:to-purple-500 group-focus-visible:text-white group-focus-visible:shadow-md group-focus-visible:shadow-indigo-200',
  'group-focus-visible:dark:shadow-indigo-950/40',
].join(' ');

export default function ProductsSection() {
  const { t, locale } = useLanguage();

  return (
    <section>
      <div className='mb-6 flex items-center gap-2'>
        <span className='text-xl' aria-hidden>
          🔍
        </span>
        <h2 className='flex items-center gap-2 text-2xl font-bold text-gray-800 dark:text-slate-100'>
          {t('home.productsHeading')} ( {homeProducts.length} ){' '}
          <span className='text-indigo-300'>»</span>
        </h2>
      </div>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-6'>
        {homeProducts.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            learnMoreLabel={t('home.learnMore')}
            displayTitle={homeProductCardTitle(p.id, locale)}
            displayDescription={homeProductCardDescription(p.id, locale)}
          />
        ))}
        <Link href='/product' className={moreCardLinkClass}>
          <div className={moreCardShellClass}>
            <div className='mb-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 shadow-sm sm:h-14 sm:w-14 dark:bg-indigo-950/50 dark:text-indigo-300'>
              <LayoutGrid className='h-6 w-6 sm:h-7 sm:w-7' aria-hidden />
            </div>
            <h3 className='mb-2 text-base font-bold text-gray-800 sm:text-lg dark:text-slate-100'>
              {t('home.viewAllProjects')}
            </h3>
            <p className='mb-4 flex-grow text-sm line-clamp-2 text-gray-600 dark:text-slate-300'>
              {t('home.productsSeeMoreHint')}
            </p>
            <div className='mb-4 flex min-h-6 flex-wrap items-center gap-3' aria-hidden />
            <span className={moreCardCtaClass}>
              {t('home.seeMore')} &nbsp; &gt;
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}

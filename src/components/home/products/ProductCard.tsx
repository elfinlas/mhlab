'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Apple } from 'lucide-react';
import { BsAndroid } from 'react-icons/bs';
import { TbBrowser } from 'react-icons/tb';
import type { HomeProduct, HomePlatform } from '@/data/Product';
import { ProductSupportedLocales } from '@/components/product/ProductSupportedLocales';
import { PRODUCT_VISUAL } from '@/components/home/lib/constants';

function PlatformTag({ platform }: { platform: HomePlatform }) {
  return (
    <span className='flex items-center gap-1 text-xs font-semibold text-gray-500'>
      {platform === 'iOS' ? (
        <Apple
          className='h-4 w-4'
          aria-hidden
        />
      ) : platform === 'android' ? (
        <BsAndroid
          className='h-4 w-4'
          aria-hidden
        />
      ) : (
        <TbBrowser
          className='h-4 w-4'
          aria-hidden
        />
      )}
      {platform === 'iOS' ? 'iOS' : platform.toUpperCase()}
    </span>
  );
}

type ProductCardProps = {
  product: HomeProduct;
  learnMoreLabel: string;
  displayTitle: string;
  displayDescription: string;
};

export default function ProductCard({
  product,
  learnMoreLabel,
  displayTitle,
  displayDescription,
}: ProductCardProps) {
  const [iconError, setIconError] = useState(false);
  const visual = PRODUCT_VISUAL[product.id] ?? {
    iconBg: 'bg-indigo-100',
  };
  const external = product.href.startsWith('http');

  const cardClass = [
    'glass-card flex h-full flex-col rounded-2xl p-6 shadow-md transition-shadow duration-300 ease-out sm:p-7 lg:p-8',
    'group-hover:shadow-2xl group-hover:shadow-indigo-200/40 dark:group-hover:shadow-indigo-950/30',
    visual.featured
      ? 'border border-indigo-200 bg-gradient-to-br from-indigo-100 to-purple-100 dark:border-indigo-500/40'
      : 'bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800/80 dark:to-slate-900/80',
  ].join(' ');

  const linkSurfaceClass =
    'group block h-full rounded-2xl outline-none transition-transform duration-300 ease-out will-change-transform hover:-translate-y-2 focus-visible:-translate-y-1 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950';

  /* 기본은 동일; 그라데이션은 카드에 호버/포커스일 때만 (featured 전용 상시 강조 제거) */
  const buttonClass = [
    'inline-flex w-full items-center justify-center rounded-full border border-indigo-100 bg-white px-4 py-2 font-medium text-indigo-600 shadow-sm transition-all duration-300 ease-out',
    'dark:border-slate-600 dark:bg-slate-800/90 dark:text-indigo-300',
    'group-hover:border-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-500 group-hover:text-white group-hover:shadow-md group-hover:shadow-indigo-200',
    'group-hover:dark:shadow-indigo-950/40',
    'group-focus-visible:border-transparent group-focus-visible:bg-gradient-to-r group-focus-visible:from-indigo-500 group-focus-visible:to-purple-500 group-focus-visible:text-white group-focus-visible:shadow-md group-focus-visible:shadow-indigo-200',
    'group-focus-visible:dark:shadow-indigo-950/40',
  ].join(' ');

  const inner = (
    <>
      <div
        className={`mb-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl shadow-sm sm:h-14 sm:w-14 ${visual.iconBg}`}
      >
        {iconError ? (
          <span
            className='text-2xl sm:text-3xl'
            aria-hidden
          >
            📦
          </span>
        ) : (
          <Image
            src={product.icon}
            alt={displayTitle}
            width={56}
            height={56}
            className='h-full w-full object-cover'
            onError={() => setIconError(true)}
          />
        )}
      </div>
      <h3 className='mb-2 text-base font-bold text-gray-800 sm:text-lg dark:text-slate-100'>
        {displayTitle}
      </h3>
      <p
        className={`mb-4 flex-grow text-sm line-clamp-2 ${visual.featured ? 'text-gray-700' : 'text-gray-600'} dark:text-slate-300`}
      >
        {displayDescription}
      </p>
      <div
        className={`mb-4 flex flex-col gap-3 text-xs font-semibold ${visual.featured ? 'text-gray-600' : 'text-gray-500'}`}
      >
        <div className='flex flex-wrap items-center gap-3'>
          {product.platforms.map(p => (
            <PlatformTag
              key={p}
              platform={p}
            />
          ))}
        </div>

        <ProductSupportedLocales
          locales={product.supportedLocales}
          variant='compact'
        />
      </div>
      <span className={buttonClass}>{learnMoreLabel} &nbsp; &gt;</span>
    </>
  );

  const surfaceClass = `${linkSurfaceClass} ${cardClass}`;

  if (external) {
    return (
      <a
        href={product.href}
        target='_blank'
        rel='noopener noreferrer'
        className={surfaceClass}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link
      href={product.href}
      className={surfaceClass}
    >
      {inner}
    </Link>
  );
}

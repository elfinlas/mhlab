import Image from 'next/image';
import Link from 'next/link';
import { FeatureCheckBullet } from '@/components/product/FeatureCheckBullet';
import { ProductSupportedLocales } from '@/components/product/ProductSupportedLocales';
import type { Locale } from '@/lib/i18n';
import {
  DEFAULT_PRODUCT_ACCENT,
  PRODUCT_ACCENTS,
  type ProductListItem,
} from '@/components/product/productListModel';

type ServiceCardProps = {
  project: ProductListItem;
  index: number;
  viewDetailsLabel: string;
  heroSrc: string;
  heading: string;
  categoryLabel: string;
  teaser: string;
  bullets: string[];
  supportedLocales: readonly Locale[];
};

export function ServiceCard({
  project,
  index,
  viewDetailsLabel,
  heroSrc,
  heading,
  categoryLabel,
  teaser,
  bullets,
  supportedLocales,
}: ServiceCardProps) {
  const accent = PRODUCT_ACCENTS[project.id] ?? DEFAULT_PRODUCT_ACCENT;
  const reverse = index % 2 === 1;

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-3xl border border-gray-100/90 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_40px_80px_rgba(99,102,241,0.08)] dark:border-slate-800/80 dark:bg-slate-900/90 dark:shadow-[0_24px_56px_rgba(0,0,0,0.35)] dark:hover:shadow-[0_36px_72px_rgba(99,102,241,0.12)] md:flex-row ${reverse ? 'md:flex-row-reverse' : ''}`}
    >
      <div
        className={`relative flex min-h-[min(20rem,62vw)] w-full items-center justify-center overflow-hidden md:min-h-[30rem] md:w-1/2 ${accent.panel}`}
      >
        <div className='relative h-[min(20rem,62vw)] w-full md:h-[30rem]'>
          <Image
            src={heroSrc}
            alt={heading}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px'
            className='object-contain p-3 transition-transform duration-700 group-hover:scale-[1.03] md:p-5'
            priority={index < 2}
          />
        </div>
        <div
          className={`pointer-events-none absolute inset-0 ${reverse ? 'bg-gradient-to-tl' : 'bg-gradient-to-tr'} from-white/30 to-transparent dark:from-slate-950/20`}
          aria-hidden
        />
      </div>
      <div className='flex w-full flex-col justify-center px-8 py-14 md:min-h-[30rem] md:w-1/2 md:px-12 md:py-20'>
        <div className='mb-7 flex flex-wrap items-center gap-x-3 gap-y-2'>
          <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 dark:text-slate-50'>
            {heading}
          </h2>
          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase leading-none tracking-[0.14em] ${accent.badge} ${accent.badgeText}`}
          >
            {categoryLabel}
          </span>
        </div>
        <ProductSupportedLocales
          locales={supportedLocales}
          variant='compact'
          className='mb-6'
        />
        <p className='mb-10 text-base font-normal leading-relaxed text-gray-500 dark:text-slate-400'>
          {teaser}
        </p>
        <ul className='mb-12 space-y-5'>
          {bullets.map((line) => (
            <li
              key={line}
              className='flex items-start text-sm font-semibold leading-snug text-gray-900 dark:text-slate-100'
            >
              <FeatureCheckBullet dotClass={accent.checkDot} />
              <span className='pt-0.5'>{line}</span>
            </li>
          ))}
        </ul>
        <Link
          href={`/product/${project.id}`}
          className='inline-flex w-fit items-center justify-center rounded-xl bg-[#6366F1] px-8 py-3.5 text-sm font-bold tracking-tight text-white shadow-lg shadow-indigo-200/90 transition-all hover:-translate-y-0.5 hover:bg-[#5855eb] hover:shadow-indigo-300/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:shadow-indigo-950/50 dark:hover:shadow-indigo-900/40'
        >
          {viewDetailsLabel}
        </Link>
      </div>
    </article>
  );
}

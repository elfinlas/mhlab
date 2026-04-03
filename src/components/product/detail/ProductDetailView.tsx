'use client';

import { useMemo } from 'react';
import {
  resolveLocalizedString,
  resolveLocalizedStringList,
  resolveProductImages,
  type ProductItemType,
} from '@/data/Product';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  ArrowLeft,
  Cloud,
  ExternalLink,
  Globe,
  MapPin,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';
import { FunctionTabs } from '@/components/product/FunctionTabs';
import { ImageCarousel } from '@/components/product/ImageCarousel';
import { ProductDetailNav } from '@/components/product/detail/ProductDetailNav';
import { ProductSupportedLocales } from '@/components/product/ProductSupportedLocales';
import { BsAndroid, BsApple } from 'react-icons/bs';

const KEY_ICONS = [MapPin, Cloud, Sparkles] as const;

type ProductDetailViewProps = {
  project: ProductItemType;
};

function primaryStoreHref(project: ProductItemType) {
  return (
    project.links.appStore ||
    project.links.googlePlay ||
    project.links.website ||
    null
  );
}

export function ProductDetailView({ project }: ProductDetailViewProps) {
  const { locale, t } = useLanguage();
  const title = useMemo(
    () => resolveLocalizedString(project.title, locale),
    [project.title, locale]
  );
  const category = useMemo(
    () => resolveLocalizedString(project.category, locale),
    [project.category, locale]
  );
  const description = useMemo(
    () => resolveLocalizedStringList(project.description, locale),
    [project.description, locale]
  );
  const keyPoints = useMemo(
    () => resolveLocalizedStringList(project.keyPoints, locale),
    [project.keyPoints, locale]
  );
  const heroImages = useMemo(
    () => resolveProductImages(project.images, locale),
    [project.images, locale]
  );
  const functionsForLocale = useMemo(
    () =>
      project.functions.map(f => ({
        id: f.id,
        title: resolveLocalizedString(f.title, locale),
        description: resolveLocalizedStringList(f.description, locale),
        features: resolveLocalizedStringList(f.features, locale),
        images: resolveProductImages(f.images, locale),
      })),
    [project.functions, locale]
  );
  const primaryHref = primaryStoreHref(project);

  return (
    <>
      <ProductDetailNav />

      <main className='product-detail-light-bg min-h-screen pb-24 pt-28 md:pb-28 md:pt-32'>
        <div className='mx-auto max-w-7xl px-6 md:px-8'>
          {/* Overview + 미디어 — code.html Section 1 */}
          <section className='mb-24 grid grid-cols-1 items-center gap-16 lg:mb-32 lg:grid-cols-12 lg:gap-x-20 lg:gap-y-14 xl:gap-x-28'>
            <div className='space-y-8 lg:col-span-7'>
              <div className='space-y-4'>
                <div className='flex flex-wrap items-center gap-2'>
                  <span className='inline-block rounded-full bg-sky-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-sky-900 dark:bg-indigo-500/25 dark:text-indigo-200'>
                    Overview
                  </span>
                  <span className='inline-block rounded-full bg-indigo-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-indigo-800 dark:bg-slate-800 dark:text-slate-300'>
                    {category}
                  </span>
                </div>
                <h1 className='text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-transparent dark:bg-gradient-to-br dark:from-white dark:to-slate-400 dark:bg-clip-text'>
                  {title}
                </h1>
                <ProductSupportedLocales locales={project.supportedLocales} />
                <div className='max-w-2xl space-y-3 text-lg font-light leading-relaxed text-slate-600 lg:max-w-none dark:text-slate-400'>
                  {description.map((paragraph, index) => (
                    <p
                      key={index}
                      className='whitespace-pre-line tracking-[0.01em]'
                      dangerouslySetInnerHTML={{
                        __html: paragraph
                          .replace(/<b>/g, '<strong>')
                          .replace(/<\/b>/g, '</strong>'),
                      }}
                    />
                  ))}
                </div>
              </div>

              <ul className='space-y-5'>
                {keyPoints.map((point, index) => {
                  const Icon = KEY_ICONS[index % KEY_ICONS.length]!;
                  return (
                    <li
                      key={`${index}-${point}`}
                      className='group flex items-center gap-4'
                    >
                      <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-200 text-indigo-600 transition-transform group-hover:scale-110 dark:bg-slate-800 dark:text-indigo-400'>
                        <Icon
                          className='h-5 w-5'
                          aria-hidden
                        />
                      </div>
                      <span className='text-lg font-semibold tracking-tight text-gray-900 dark:text-slate-100'>
                        {point}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <div className='flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap'>
                {project.links.appStore ? (
                  <a
                    href={project.links.appStore}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center justify-center gap-2 rounded-xl border border-transparent bg-slate-900 px-6 py-3.5 text-sm font-bold tracking-wide text-white shadow-lg transition-all duration-300 hover:bg-slate-800 dark:border-2 dark:border-white/18 dark:bg-indigo-600 dark:text-white dark:shadow-[0_0_12px_rgba(129,140,248,0.22),0_0_28px_rgba(167,139,250,0.13),0_0_48px_rgba(34,211,238,0.08),0_0_68px_rgba(139,92,246,0.04)] dark:hover:border-white/28 dark:hover:bg-indigo-500 dark:hover:shadow-[0_0_14px_rgba(165,180,252,0.28),0_0_32px_rgba(192,132,252,0.17),0_0_54px_rgba(45,212,191,0.1),0_0_74px_rgba(129,140,248,0.05)]'
                  >
                    <BsApple
                      className='h-4 w-4 shrink-0'
                      aria-hidden
                    />
                    App Store
                    <ExternalLink className='h-4 w-4 shrink-0 opacity-90 dark:opacity-100' />
                  </a>
                ) : null}
                {project.links.googlePlay ? (
                  <a
                    href={project.links.googlePlay}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center justify-center gap-2 rounded-xl border border-transparent bg-emerald-600 px-6 py-3.5 text-sm font-bold tracking-wide text-white shadow-lg shadow-emerald-900/10 transition-all duration-300 hover:bg-emerald-500 dark:border-2 dark:border-white/18 dark:bg-emerald-600 dark:shadow-[0_0_12px_rgba(52,211,153,0.22),0_0_28px_rgba(45,212,191,0.13),0_0_48px_rgba(34,211,238,0.08),0_0_68px_rgba(16,185,129,0.04)] dark:hover:border-white/28 dark:hover:bg-emerald-500 dark:hover:shadow-[0_0_14px_rgba(110,231,183,0.28),0_0_32px_rgba(94,234,212,0.17),0_0_54px_rgba(45,212,191,0.1),0_0_74px_rgba(52,211,153,0.05)]'
                  >
                    <BsAndroid
                      className='h-4 w-4 shrink-0'
                      aria-hidden
                    />
                    Google Play
                    <ExternalLink className='h-4 w-4 shrink-0 opacity-90 dark:opacity-100' />
                  </a>
                ) : null}
                {project.links.website ? (
                  <a
                    href={project.links.website}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center justify-center gap-2 rounded-xl border border-transparent bg-[#6366F1] px-6 py-3.5 text-sm font-bold tracking-wide text-white shadow-lg shadow-indigo-200/80 transition-all duration-300 hover:bg-[#5855eb] dark:border dark:border-white/[0.08] dark:bg-[#6366F1] dark:shadow-[0_0_6px_rgba(99,102,241,0.07),0_0_14px_rgba(139,92,246,0.035)] dark:hover:border-white/14 dark:hover:bg-[#818cf8] dark:hover:shadow-[0_0_8px_rgba(129,140,248,0.09),0_0_18px_rgba(99,102,241,0.05)]'
                  >
                    <Globe
                      className='h-4 w-4 shrink-0'
                      aria-hidden
                    />
                    Visit website
                    <ExternalLink className='h-4 w-4 shrink-0 opacity-90 dark:opacity-100' />
                  </a>
                ) : null}
              </div>
            </div>

            <div className='relative lg:col-span-5'>
              <div
                className='pointer-events-none absolute -right-8 -top-8 h-56 w-56 rounded-full bg-indigo-400/25 blur-[80px] dark:bg-indigo-500/20 md:-right-12 md:-top-12 md:h-64 md:w-64 md:blur-[100px]'
                aria-hidden
              />
              <div
                className='pointer-events-none absolute -bottom-8 -left-8 h-56 w-56 rounded-full bg-sky-400/20 blur-[80px] dark:bg-sky-500/15 md:-bottom-12 md:-left-12 md:h-64 md:w-64 md:blur-[100px]'
                aria-hidden
              />
              <div className='relative w-full overflow-hidden rounded-[2.5rem] border border-slate-200/90 bg-slate-50 p-3 shadow-2xl dark:border-slate-700/50 dark:bg-slate-900/50 md:p-5 lg:p-6'>
                <ImageCarousel
                  images={heroImages}
                  title={title}
                  variant='hero'
                />
              </div>
            </div>
          </section>

          {/* Features — code.html Section 2 */}
          {project.functions.length > 0 ? (
            <section className='space-y-12 md:space-y-16'>
              <div className='flex flex-col justify-between gap-6 md:flex-row md:items-end'>
                <div className='space-y-3'>
                  <span className='text-xs font-bold uppercase tracking-[0.3em] text-indigo-500 dark:text-indigo-400'>
                    Core experience
                  </span>
                  <h2 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl lg:text-5xl'>
                    Detailed features
                  </h2>
                </div>
                <div className='mb-2 hidden h-px flex-grow bg-slate-200/80 dark:bg-slate-700/60 md:mx-8 md:block' />
              </div>
              <FunctionTabs
                functions={functionsForLocale}
                variant='editorial'
              />
            </section>
          ) : null}
        </div>
      </main>

      <div className='border-t border-slate-200/80 bg-white/50 py-10 dark:border-slate-800/60 dark:bg-slate-950/40 md:py-14'>
        <div className='mx-auto flex max-w-7xl justify-center px-6 md:px-8'>
          <Link
            href='/product'
            className='inline-flex items-center gap-2 rounded-xl border-2 border-slate-900 bg-white px-6 py-3.5 text-sm font-extrabold uppercase tracking-widest text-slate-900 transition hover:bg-indigo-50 dark:border-white dark:bg-transparent dark:text-white dark:hover:bg-white/10'
          >
            <ArrowLeft
              className='h-4 w-4'
              aria-hidden
            />
            {t('productListing.detailBackToServiceList')}
          </Link>
        </div>
      </div>
    </>
  );
}

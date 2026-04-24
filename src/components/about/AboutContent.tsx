'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronsDown, House } from 'lucide-react';
import HomeLanguageFlags from '@/components/home/shared/HomeLanguageFlags';
import ThemeToggle from '@/components/ThemeToggle';
import AboutStitchChapter, {
  renderAboutBoldParagraph,
} from '@/components/about/AboutChapter';
import AboutStitchChapterRail from '@/components/about/AboutChapterRail';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  ABOUT_CHAPTER_BLOCKS,
  ABOUT_CHAPTER_SECTION_IDS,
  getAboutPageCopy,
} from '@/data/About';

export default function AboutStitchContent() {
  const { locale } = useLanguage();
  const copy = getAboutPageCopy(locale);

  return (
    <>
      <div className='about-stitch-grain' aria-hidden />
      <AboutStitchChapterRail
        sectionIds={ABOUT_CHAPTER_SECTION_IDS}
        navAriaLabel={copy.railNavAria}
        getChapterButtonAriaLabel={copy.chapterButtonAria}
      />

      <main className='mx-auto max-w-[1600px] px-6 pb-20 pt-10 md:px-12 lg:pr-16 xl:pr-20'>
        <div className='mb-8 flex flex-wrap items-center justify-between gap-4'>
          <Link
            href='/'
            className='text-sm font-semibold tracking-tight text-[#530211] transition-opacity hover:opacity-70 dark:text-[#eab4b8]'
          >
            ← MHLab
          </Link>
          <div className='flex items-center gap-2'>
            <HomeLanguageFlags />
            <ThemeToggle />
          </div>
        </div>

        <section className='flex flex-col items-center gap-12 border-b border-[#edeeef] py-12 dark:border-stone-800 lg:flex-row lg:gap-24 lg:py-20'>
          <div className='order-2 w-full lg:order-1 lg:w-3/5'>
            <div className='mb-6 inline-block rounded-sm bg-[#530211] px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-widest text-white'>
              {copy.heroEyebrow}
            </div>
            <h1 className='mb-8 font-extrabold leading-[0.9] tracking-tighter text-[#530211] text-5xl sm:text-6xl lg:text-8xl'>
              {copy.heroTitle}
            </h1>
            <div className='max-w-2xl space-y-6 text-xl font-light leading-relaxed text-[#564242] sm:text-2xl'>
              {copy.heroParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={index === 0 ? 'font-medium' : undefined}
                >
                  {renderAboutBoldParagraph(paragraph)}
                </p>
              ))}
            </div>
            <div className='mt-8 flex gap-4'>
              <ChevronsDown
                className='h-12 w-12 animate-bounce text-[#530211] motion-reduce:animate-none sm:h-14 sm:w-14'
                strokeWidth={1.25}
                aria-hidden
              />
            </div>
          </div>
          <div className='relative order-1 w-full lg:order-2 lg:w-2/5'>
            <div className='about-stitch-editorial-shadow relative z-10 aspect-[4/5] overflow-hidden rounded-xl bg-[#e7e8e9] transition-transform duration-700 dark:bg-stone-800 dark:ring-1 dark:ring-white/10'>
              <Image
                src='/about/profile_new.webp'
                alt={copy.profileAlt}
                width={640}
                height={800}
                priority
                sizes='(max-width: 1024px) 100vw, 40vw'
                className='h-full w-full object-cover contrast-110 grayscale-[20%]'
              />
            </div>
            <div
              className='absolute -bottom-8 -right-8 -z-0 h-48 w-48 rounded-xl bg-[#ffdad9] opacity-50 dark:bg-violet-950/35 dark:opacity-100'
              aria-hidden
            />
          </div>
        </section>

        <div className='space-y-32 py-12 md:py-20'>
          {ABOUT_CHAPTER_BLOCKS.map((block, i) => {
            const ch = copy.chapters[i];
            if (!ch) return null;
            return (
              <AboutStitchChapter
                key={block.sectionId}
                sectionId={block.sectionId}
                chapter={ch.chapter}
                title={ch.title}
                subtitle={ch.subtitle}
                imageSrc={block.imageSrc}
                imageAlt={ch.imageAlt}
                imageSide={block.imageSide}
                revealDelay={block.revealDelay}
                paragraphs={ch.paragraphs}
              />
            );
          })}
        </div>

        <section
          className='mt-8 border-t border-[#edeeef] py-14 dark:border-stone-700'
          aria-label={copy.homeSectionAria}
        >
          <Link
            href='/'
            className='group mx-auto flex max-w-md flex-col items-center gap-4 rounded-2xl border border-[#e1e3e4] bg-white px-8 py-10 text-center shadow-sm transition-all duration-300 hover:border-[#530211]/35 hover:shadow-md dark:border-stone-700 dark:bg-stone-900 dark:hover:border-[#eab4b8]/40'
          >
            <span className='flex h-14 w-14 items-center justify-center rounded-full bg-[#f3f4f5] text-[#530211] transition-colors duration-300 group-hover:bg-[#530211] group-hover:text-white dark:bg-stone-800 dark:text-[#eab4b8] dark:group-hover:bg-[#eab4b8] dark:group-hover:text-[#1a0a0c]'>
              <House className='h-7 w-7' strokeWidth={1.75} aria-hidden />
            </span>
            <span className='text-lg font-semibold text-[#191c1d] dark:text-stone-100'>
              {copy.footerCta}
            </span>
          </Link>
        </section>
      </main>
    </>
  );
}

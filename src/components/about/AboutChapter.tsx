'use client';

import Image from 'next/image';
import { cn } from '@/lib/ui/utils';
import RevealOnView from '@/components/about/RevealOnView';

export type AboutStitchChapterProps = {
  chapter: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
  /** 데스크톱에서 이미지가 왼쪽이면 left, 오른쪽이면 right (모바일은 항상 이미지 위) */
  imageSide: 'left' | 'right';
  revealDelay?: number;
  /** 스크롤 스파이·앵커용 (예: about-chapter-01) */
  sectionId?: string;
};

export function renderAboutBoldParagraph(text: string) {
  const parts = text.split(/(<b>.*?<\/b>)/g);
  return parts.map((part, idx) => {
    if (part.startsWith('<b>') && part.endsWith('</b>')) {
      return (
        <span key={idx} className='font-bold text-[#530211] dark:text-[#eab4b8]'>
          {part.replace(/<\/?b>/g, '')}
        </span>
      );
    }
    return <span key={idx}>{part}</span>;
  });
}

export default function AboutStitchChapter({
  chapter,
  title,
  subtitle,
  paragraphs,
  imageSrc,
  imageAlt,
  imageSide,
  revealDelay = 0,
  sectionId,
}: AboutStitchChapterProps) {
  return (
    <RevealOnView delayMs={revealDelay}>
      <section
        id={sectionId}
        className='scroll-mt-28 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20'
      >
        {/* DOM: 이미지 먼저 → 모바일에서 order-1로 위에 표시 */}
        <div
          className={cn(
            'lg:col-span-7',
            'order-1',
            imageSide === 'left' ? 'lg:order-1' : 'lg:order-2',
          )}
        >
          <div className='overflow-hidden rounded-2xl bg-[#f3f4f5] p-1 dark:bg-stone-900 dark:ring-1 dark:ring-white/[0.06] lg:p-4'>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1200}
              height={500}
              className='h-[min(500px,60vh)] w-full rounded-xl object-cover shadow-inner dark:shadow-none'
              sizes='(max-width: 1024px) 100vw, 58vw'
            />
          </div>
        </div>
        <div
          className={cn(
            'lg:col-span-5',
            'order-2',
            imageSide === 'left' ? 'lg:order-2' : 'lg:order-1',
          )}
        >
          <div className='mb-4 text-xs font-bold uppercase tracking-widest text-[#530211] dark:text-[#eab4b8]'>
            {chapter}
          </div>
          <h2 className='mb-8 text-4xl font-bold leading-tight tracking-tight text-[#191c1d] dark:text-stone-100 sm:text-5xl'>
            {title}
            <br />
            <span className='text-[#530211]/70 dark:text-[#eab4b8]/80'>{subtitle}</span>
          </h2>
          <div className='space-y-6'>
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={cn(
                  'text-lg leading-relaxed text-[#564242] dark:text-stone-300',
                  index === 0 && 'font-medium',
                )}
              >
                {renderAboutBoldParagraph(paragraph)}
              </p>
            ))}
          </div>
        </div>
      </section>
    </RevealOnView>
  );
}

'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PatchNoteImageLightbox } from '@/components/patch-notes/PatchNoteImageLightbox';
import type { PatchNoteLocale } from '@/data/patch-notes/types';
import { patchNotesUi } from '@/lib/patch-notes/patchNotesUi';

export type PatchNoteCarouselItem = {
  src: string;
  alt?: string;
};

function normalizeCarouselItems(raw: unknown): PatchNoteCarouselItem[] {
  if (!Array.isArray(raw)) return [];
  const out: PatchNoteCarouselItem[] = [];
  for (const entry of raw) {
    if (!entry || typeof entry !== 'object') continue;
    const o = entry as Record<string, unknown>;
    const src = typeof o.src === 'string' ? o.src.trim() : '';
    if (!src) continue;
    const alt = typeof o.alt === 'string' ? o.alt : '';
    out.push({ src, alt });
  }
  return out;
}

/** 패치노트 MDX — 이미지 캐러셀 + 클릭 시 라이트박스 확대 */
export function PatchNoteImageCarousel({
  items,
  locale,
}: {
  items: unknown;
  locale: PatchNoteLocale;
}) {
  const ui = patchNotesUi(locale);
  const slides = useMemo(() => normalizeCarouselItems(items), [items]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length === 0) return;
    setIndex((i) => Math.min(i, slides.length - 1));
  }, [slides.length]);
  const [lightbox, setLightbox] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const safeIndex = slides.length > 0 ? index % slides.length : 0;
  const current = slides[safeIndex];
  const canNav = slides.length > 1;

  const go = useCallback(
    (delta: number) => {
      if (slides.length === 0) return;
      setIndex((i) => (i + delta + slides.length) % slides.length);
    },
    [slides.length]
  );

  const openLightbox = useCallback((src: string, alt: string) => {
    setLightbox({ src, alt });
  }, []);

  if (slides.length === 0) return null;

  return (
    <>
      <section
        className='mb-4 overflow-hidden rounded-xl border border-slate-200/90 bg-slate-50/90 dark:border-slate-700/60 dark:bg-slate-900/50'
        aria-label={ui.carouselRegion}
      >
        <div className='relative'>
          <div className='flex items-center justify-center bg-slate-100/80 px-2 py-3 dark:bg-slate-950/40 sm:px-4 sm:py-4'>
            <button
              type='button'
              className='max-h-[min(420px,60vh)] w-full cursor-zoom-in border-0 bg-transparent p-0'
              onClick={() =>
                openLightbox(current.src, current.alt ?? '')
              }
              aria-label={ui.imageExpandHint}
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- 패치노트 동적 public URL */}
              <img
                src={current.src}
                alt={current.alt ?? ''}
                title={ui.imageExpandHint}
                className='mx-auto max-h-[min(420px,60vh)] w-auto max-w-full object-contain'
              />
            </button>
          </div>

          {canNav ? (
            <>
              <button
                type='button'
                onClick={() => go(-1)}
                className='absolute left-1 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200/90 bg-white/95 text-slate-800 shadow-md transition-colors hover:bg-white dark:border-slate-600 dark:bg-slate-900/95 dark:text-slate-100 dark:hover:bg-slate-800 sm:left-2'
                aria-label={ui.carouselPrev}
              >
                <ChevronLeft className='h-5 w-5' aria-hidden />
              </button>
              <button
                type='button'
                onClick={() => go(1)}
                className='absolute right-1 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200/90 bg-white/95 text-slate-800 shadow-md transition-colors hover:bg-white dark:border-slate-600 dark:bg-slate-900/95 dark:text-slate-100 dark:hover:bg-slate-800 sm:right-2'
                aria-label={ui.carouselNext}
              >
                <ChevronRight className='h-5 w-5' aria-hidden />
              </button>
              <div
                className='flex justify-center gap-1.5 border-t border-slate-200/80 py-2.5 dark:border-slate-700/60'
                role='tablist'
                aria-label={ui.carouselDots}
              >
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type='button'
                    role='tab'
                    aria-selected={i === safeIndex}
                    aria-label={`${i + 1} / ${slides.length}`}
                    onClick={() => setIndex(i)}
                    className={
                      i === safeIndex
                        ? 'h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400'
                        : 'h-2 w-2 rounded-full bg-slate-300 transition-colors hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-500'
                    }
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>
      </section>

      <PatchNoteImageLightbox
        src={lightbox?.src ?? null}
        alt={lightbox?.alt ?? ''}
        onClose={() => setLightbox(null)}
        closeLabel={ui.lightboxClose}
        dialogAriaLabel={ui.lightboxImagePreview}
      />
    </>
  );
}

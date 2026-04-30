'use client';

import {
  type PointerEvent as ReactPointerEvent,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PatchNoteImageLightbox } from '@/components/patch-notes/PatchNoteImageLightbox';
import type { PatchNoteLocale } from '@/data/patch-notes/types';
import {
  PATCH_NOTE_IMAGE_SWIPE_DOMINANCE_RATIO,
  PATCH_NOTE_IMAGE_SWIPE_MIN_PX,
} from '@/lib/patch-notes/patchNoteImageSwipe';
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

  const [lightboxOpen, setLightboxOpen] = useState(false);

  const effectiveIndex =
    slides.length === 0 ? 0 : Math.min(index, slides.length - 1);
  const current = slides[effectiveIndex];
  const canNav = slides.length > 1;

  const go = useCallback(
    (delta: number) => {
      if (slides.length === 0) return;
      setIndex((i) => {
        const c = Math.min(i, slides.length - 1);
        return (c + delta + slides.length) % slides.length;
      });
    },
    [slides.length]
  );

  const openLightbox = useCallback(() => {
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const gallerySwipePrev = useCallback(() => go(-1), [go]);
  const gallerySwipeNext = useCallback(() => go(1), [go]);

  const lightboxGallerySwipe = useMemo(
    () =>
      lightboxOpen && canNav
        ? { onPrev: gallerySwipePrev, onNext: gallerySwipeNext }
        : undefined,
    [lightboxOpen, canNav, gallerySwipePrev, gallerySwipeNext]
  );

  const swipeStartRef = useRef<{
    x: number;
    y: number;
    pointerId: number;
  } | null>(null);
  const suppressNextClickRef = useRef(false);

  const handleCarouselPointerDown = useCallback(
    (e: ReactPointerEvent<HTMLButtonElement>) => {
      if (!canNav) return;
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      swipeStartRef.current = {
        x: e.clientX,
        y: e.clientY,
        pointerId: e.pointerId,
      };
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch {
        /* ignore */
      }
    },
    [canNav]
  );

  const endSwipeTracking = useCallback(
    (el: HTMLButtonElement, e: ReactPointerEvent<HTMLButtonElement>) => {
      try {
        el.releasePointerCapture(e.pointerId);
      } catch {
        /* ignore */
      }
      const start = swipeStartRef.current;
      swipeStartRef.current = null;
      if (!canNav || !start || start.pointerId !== e.pointerId) return;
      const dx = e.clientX - start.x;
      const dy = e.clientY - start.y;
      if (
        Math.abs(dx) >= PATCH_NOTE_IMAGE_SWIPE_MIN_PX &&
        Math.abs(dx) >= Math.abs(dy) * PATCH_NOTE_IMAGE_SWIPE_DOMINANCE_RATIO
      ) {
        suppressNextClickRef.current = true;
        go(dx > 0 ? -1 : 1);
      }
    },
    [canNav, go]
  );

  const handleCarouselPointerUp = useCallback(
    (e: ReactPointerEvent<HTMLButtonElement>) => {
      endSwipeTracking(e.currentTarget, e);
    },
    [endSwipeTracking]
  );

  const handleCarouselPointerCancel = useCallback(
    (e: ReactPointerEvent<HTMLButtonElement>) => {
      swipeStartRef.current = null;
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        /* ignore */
      }
    },
    []
  );

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
              className='max-h-[min(420px,60vh)] w-full touch-pan-y cursor-zoom-in border-0 bg-transparent p-0 select-none'
              onPointerDown={handleCarouselPointerDown}
              onPointerUp={handleCarouselPointerUp}
              onPointerCancel={handleCarouselPointerCancel}
              onClick={() => {
                if (suppressNextClickRef.current) {
                  suppressNextClickRef.current = false;
                  return;
                }
                openLightbox();
              }}
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
                    aria-selected={i === effectiveIndex}
                    aria-label={`${i + 1} / ${slides.length}`}
                    onClick={() => setIndex(i)}
                    className={
                      i === effectiveIndex
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
        src={lightboxOpen ? current.src : null}
        alt={lightboxOpen ? (current.alt ?? '') : ''}
        onClose={closeLightbox}
        closeLabel={ui.lightboxClose}
        dialogAriaLabel={ui.lightboxImagePreview}
        gallerySwipe={lightboxGallerySwipe}
      />
    </>
  );
}

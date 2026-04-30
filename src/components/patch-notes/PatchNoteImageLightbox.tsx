'use client';

import {
  type PointerEvent as ReactPointerEvent,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import {
  PATCH_NOTE_IMAGE_SWIPE_DOMINANCE_RATIO,
  PATCH_NOTE_IMAGE_SWIPE_MIN_PX,
} from '@/lib/patch-notes/patchNoteImageSwipe';

type PatchNoteImageLightboxProps = {
  src: string | null;
  alt: string;
  onClose: () => void;
  closeLabel: string;
  dialogAriaLabel: string;
  /** 여러 장 갤러리일 때 전체화면에서 좌우 스와이프·화살표 키 */
  gallerySwipe?: {
    onPrev: () => void;
    onNext: () => void;
  };
};

export function PatchNoteImageLightbox({
  src,
  alt,
  onClose,
  closeLabel,
  dialogAriaLabel,
  gallerySwipe,
}: PatchNoteImageLightboxProps) {
  const swipeStartRef = useRef<{
    x: number;
    y: number;
    pointerId: number;
  } | null>(null);

  const handleGalleryPointerDown = useCallback(
    (e: ReactPointerEvent<HTMLDivElement>) => {
      if (!gallerySwipe) return;
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
    [gallerySwipe]
  );

  const endGallerySwipe = useCallback(
    (el: HTMLDivElement, e: ReactPointerEvent<HTMLDivElement>) => {
      if (!gallerySwipe) return;
      try {
        el.releasePointerCapture(e.pointerId);
      } catch {
        /* ignore */
      }
      const start = swipeStartRef.current;
      swipeStartRef.current = null;
      if (!start || start.pointerId !== e.pointerId) return;
      const dx = e.clientX - start.x;
      const dy = e.clientY - start.y;
      if (
        Math.abs(dx) >= PATCH_NOTE_IMAGE_SWIPE_MIN_PX &&
        Math.abs(dx) >= Math.abs(dy) * PATCH_NOTE_IMAGE_SWIPE_DOMINANCE_RATIO
      ) {
        if (dx > 0) gallerySwipe.onPrev();
        else gallerySwipe.onNext();
      }
    },
    [gallerySwipe]
  );

  const handleGalleryPointerUp = useCallback(
    (e: ReactPointerEvent<HTMLDivElement>) => {
      endGallerySwipe(e.currentTarget, e);
    },
    [endGallerySwipe]
  );

  const handleGalleryPointerCancel = useCallback(
    (e: ReactPointerEvent<HTMLDivElement>) => {
      swipeStartRef.current = null;
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        /* ignore */
      }
    },
    []
  );

  useEffect(() => {
    if (!src) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (gallerySwipe) {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          gallerySwipe.onPrev();
        }
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          gallerySwipe.onNext();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [src, onClose, gallerySwipe]);

  if (!src) return null;

  return (
    <div
      className='fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm'
      role='dialog'
      aria-modal='true'
      aria-label={dialogAriaLabel}
      onClick={onClose}
    >
      <button
        type='button'
        className='absolute right-4 top-4 z-[101] rounded-lg bg-white/15 px-3 py-2 text-sm font-semibold text-white hover:bg-white/25'
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        {closeLabel}
      </button>
      <div
        className='relative flex max-h-[90vh] max-w-[95vw] touch-pan-y select-none items-center justify-center'
        onClick={(e) => e.stopPropagation()}
        onPointerDown={gallerySwipe ? handleGalleryPointerDown : undefined}
        onPointerUp={gallerySwipe ? handleGalleryPointerUp : undefined}
        onPointerCancel={gallerySwipe ? handleGalleryPointerCancel : undefined}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- 라이트박스 동적 URL */}
        <img
          src={src}
          alt={alt}
          className='max-h-[90vh] max-w-[95vw] object-contain shadow-2xl'
          draggable={false}
        />
      </div>
    </div>
  );
}

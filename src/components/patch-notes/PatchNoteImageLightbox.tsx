'use client';

import { useEffect } from 'react';

type PatchNoteImageLightboxProps = {
  src: string | null;
  alt: string;
  onClose: () => void;
  closeLabel: string;
  dialogAriaLabel: string;
};

export function PatchNoteImageLightbox({
  src,
  alt,
  onClose,
  closeLabel,
  dialogAriaLabel,
}: PatchNoteImageLightboxProps) {
  useEffect(() => {
    if (!src) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [src, onClose]);

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
      {/* eslint-disable-next-line @next/next/no-img-element -- 라이트박스 동적 URL */}
      <img
        src={src}
        alt={alt}
        className='max-h-[90vh] max-w-[95vw] object-contain shadow-2xl'
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

'use client';

import type { ComponentPropsWithoutRef } from 'react';
import { useState } from 'react';
import { PatchNoteImageLightbox } from '@/components/patch-notes/PatchNoteImageLightbox';
import type { PatchNoteLocale } from '@/data/patch-notes/types';
import { patchNotesUi } from '@/lib/patch-notes/patchNotesUi';

type PatchNoteMdxImgProps = ComponentPropsWithoutRef<'img'> & {
  locale: PatchNoteLocale;
};

export function PatchNoteMdxImg({
  src,
  alt,
  locale,
  ...rest
}: PatchNoteMdxImgProps) {
  const ui = patchNotesUi(locale);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(
    null
  );

  if (!src || typeof src !== 'string') return null;

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element -- MDX 임의 비율 이미지 */}
      <img
        src={src}
        alt={alt ?? ''}
        title={ui.imageExpandHint}
        className='mb-4 max-h-[min(520px,70vh)] w-auto max-w-full cursor-zoom-in rounded-lg border border-slate-200 object-contain dark:border-slate-700'
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setLightbox({ src, alt: alt ?? '' });
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            e.stopPropagation();
            setLightbox({ src, alt: alt ?? '' });
          }
        }}
        role='button'
        tabIndex={0}
        {...rest}
      />
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

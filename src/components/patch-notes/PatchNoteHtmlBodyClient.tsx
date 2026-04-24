'use client';

import { useEffect, useRef, useState } from 'react';
import type { PatchNoteLocale } from '@/data/patch-notes/types';
import { patchNotesUi } from '@/lib/patch-notes/patchNotesUi';
import { PatchNoteImageLightbox } from '@/components/patch-notes/PatchNoteImageLightbox';

const HTML_BODY_CLASS =
  'patch-note-html text-base leading-relaxed text-slate-700 dark:text-slate-300 [&_h1]:mb-4 [&_h1]:mt-8 [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:tracking-tight [&_h1]:text-slate-900 [&_h1:first-child]:mt-0 dark:[&_h1]:text-white [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-slate-900 dark:[&_h2]:text-white [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-slate-900 dark:[&_h3]:text-white [&_p]:mb-4 [&_a]:font-medium [&_a]:text-indigo-600 [&_a]:underline [&_a]:decoration-indigo-400/40 [&_a]:underline-offset-2 dark:[&_a]:text-indigo-400 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_li]:leading-relaxed [&_img]:mb-4 [&_img]:max-h-[min(520px,70vh)] [&_img]:w-auto [&_img]:max-w-full [&_img]:cursor-zoom-in [&_img]:rounded-lg [&_img]:border [&_img]:border-slate-200 dark:[&_img]:border-slate-700 [&_blockquote]:mb-4 [&_blockquote]:border-l-4 [&_blockquote]:border-indigo-400/70 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-slate-600 dark:[&_blockquote]:border-indigo-500/50 dark:[&_blockquote]:text-slate-400 [&_pre]:mb-4 [&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:border [&_pre]:border-slate-200 [&_pre]:bg-slate-50 [&_pre]:p-4 dark:[&_pre]:border-slate-700 dark:[&_pre]:bg-slate-900/80 [&_code]:rounded [&_code]:bg-slate-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.9em] dark:[&_code]:bg-slate-800';

type PatchNoteHtmlBodyClientProps = {
  html: string;
  locale: PatchNoteLocale;
};

export function PatchNoteHtmlBodyClient({
  html,
  locale,
}: PatchNoteHtmlBodyClientProps) {
  const ui = patchNotesUi(locale);
  const rootRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(
    null
  );

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const imgs = root.querySelectorAll('img');
    imgs.forEach((img) => {
      img.title = img.title || ui.imageExpandHint;
    });

    const onClick = (e: MouseEvent) => {
      const t = e.target;
      if (t instanceof HTMLImageElement) {
        e.preventDefault();
        e.stopPropagation();
        const src = t.currentSrc || t.src;
        if (src) setLightbox({ src, alt: t.alt ?? '' });
      }
    };

    root.addEventListener('click', onClick);
    return () => root.removeEventListener('click', onClick);
  }, [html, ui.imageExpandHint]);

  return (
    <>
      <div
        ref={rootRef}
        className={HTML_BODY_CLASS}
        dangerouslySetInnerHTML={{ __html: html }}
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

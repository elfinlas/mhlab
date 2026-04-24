'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { PatchNoteImageLightbox } from '@/components/patch-notes/PatchNoteImageLightbox';
import type { PatchNoteLocale } from '@/data/patch-notes/types';
import { patchNotesUi } from '@/lib/patch-notes/patchNotesUi';

type PatchNoteMarkdownProps = {
  markdown: string;
  locale: PatchNoteLocale;
};

export function PatchNoteMarkdown({ markdown, locale }: PatchNoteMarkdownProps) {
  const ui = patchNotesUi(locale);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(
    null
  );

  return (
    <article className='patch-note-md text-slate-700 dark:text-slate-300'>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className='mb-4 mt-8 text-2xl font-bold tracking-tight text-slate-900 first:mt-0 dark:text-white'>
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className='mb-3 mt-8 text-xl font-bold text-slate-900 dark:text-white'>
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className='mb-2 mt-6 text-lg font-semibold text-slate-900 dark:text-white'>
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className='mb-4 text-base leading-relaxed'>{children}</p>
          ),
          ul: ({ children }) => (
            <ul className='mb-4 list-disc space-y-2 pl-6'>{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className='mb-4 list-decimal space-y-2 pl-6'>{children}</ol>
          ),
          li: ({ children }) => <li className='leading-relaxed'>{children}</li>,
          a: ({ href, children }) => {
            const external = Boolean(href?.startsWith('http'));
            return (
              <a
                href={href}
                className='font-medium text-indigo-600 underline decoration-indigo-400/40 underline-offset-2 transition-colors hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300'
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
              >
                {children}
              </a>
            );
          },
          code: ({ className, children, ...props }) => {
            const isBlock = className?.includes('language-');
            if (isBlock) {
              return (
                <code
                  className={`${className} block overflow-x-auto rounded-lg bg-slate-100 p-4 text-sm dark:bg-slate-900`}
                  {...props}
                >
                  {children}
                </code>
              );
            }
            return (
              <code
                className='rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[0.9em] text-slate-800 dark:bg-slate-800 dark:text-slate-200'
                {...props}
              >
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className='mb-4 overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900/80'>
              {children}
            </pre>
          ),
          blockquote: ({ children }) => (
            <blockquote className='mb-4 border-l-4 border-indigo-400/70 pl-4 italic text-slate-600 dark:border-indigo-500/50 dark:text-slate-400'>
              {children}
            </blockquote>
          ),
          hr: () => (
            <hr className='my-8 border-slate-200 dark:border-slate-700' />
          ),
          table: ({ children }) => (
            <div className='mb-4 overflow-x-auto'>
              <table className='w-full border-collapse text-left text-sm'>
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className='border border-slate-200 bg-slate-100 px-3 py-2 font-semibold dark:border-slate-700 dark:bg-slate-800'>
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className='border border-slate-200 px-3 py-2 dark:border-slate-700'>
              {children}
            </td>
          ),
          img: ({ src, alt }) => {
            if (!src || typeof src !== 'string') return null;
            return (
              // eslint-disable-next-line @next/next/no-img-element -- 마크다운 임의 비율 이미지
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
              />
            );
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
      <PatchNoteImageLightbox
        src={lightbox?.src ?? null}
        alt={lightbox?.alt ?? ''}
        onClose={() => setLightbox(null)}
        closeLabel={ui.lightboxClose}
        dialogAriaLabel={ui.lightboxImagePreview}
      />
    </article>
  );
}

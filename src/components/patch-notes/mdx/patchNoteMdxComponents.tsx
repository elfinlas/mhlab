import type { MDXProvider } from '@mdx-js/react';
import type { ComponentProps } from 'react';
import type { PatchNoteLocale } from '@/data/patch-notes/types';
import { PatchNoteMdxImg } from '@/components/patch-notes/PatchNoteMdxImg';
import { PatchNoteCallout } from './PatchNoteCallout';
import { PatchNoteHeroBanner } from './PatchNoteHeroBanner';
import { PatchNoteCategoryItem } from './PatchNoteCategoryItem';
import { PatchNoteImageCarousel } from './PatchNoteImageCarousel';
import { PatchNoteSectionHeading } from './PatchNoteSectionHeading';
import { PatchNoteWineRegionAppellationTable } from './PatchNoteWineRegionAppellationTable';

type PatchNoteMdxComponents = NonNullable<
  ComponentProps<typeof MDXProvider>['components']
>;

export function getPatchNoteMdxComponents(
  locale: PatchNoteLocale
): PatchNoteMdxComponents {
  return {
    h1: ({ children, ...props }) => (
      <h1
        className='mb-4 mt-8 text-2xl font-bold tracking-tight text-slate-900 first:mt-0 dark:text-white'
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2
        className='mb-3 mt-8 text-xl font-bold text-slate-900 dark:text-white'
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3
        className='mb-2 mt-6 text-lg font-semibold text-slate-900 dark:text-white'
        {...props}
      >
        {children}
      </h3>
    ),
    p: ({ children, ...props }) => (
      <p
        className='mb-4 text-base leading-relaxed'
        {...props}
      >
        {children}
      </p>
    ),
    ul: ({ children, ...props }) => (
      <ul
        className='mb-4 list-disc space-y-2 pl-6'
        {...props}
      >
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol
        className='mb-4 list-decimal space-y-2 pl-6'
        {...props}
      >
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li
        className='leading-relaxed'
        {...props}
      >
        {children}
      </li>
    ),
    a: ({ href, children, ...props }) => {
      const external = Boolean(href?.startsWith('http'));
      return (
        <a
          href={href}
          className='font-medium text-indigo-600 underline decoration-indigo-400/40 underline-offset-2 transition-colors hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300'
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          {...props}
        >
          {children}
        </a>
      );
    },
    strong: ({ children, ...props }) => (
      <strong
        className='font-semibold text-slate-900 dark:text-white'
        {...props}
      >
        {children}
      </strong>
    ),
    em: ({ children, ...props }) => (
      <em
        className='italic'
        {...props}
      >
        {children}
      </em>
    ),
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
    pre: ({ children, ...props }) => (
      <pre
        className='mb-4 overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900/80'
        {...props}
      >
        {children}
      </pre>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote
        className='mb-4 border-l-4 border-indigo-400/70 pl-4 italic text-slate-600 dark:border-indigo-500/50 dark:text-slate-400'
        {...props}
      >
        {children}
      </blockquote>
    ),
    hr: props => (
      <hr
        className='my-8 border-slate-200 dark:border-slate-700'
        {...props}
      />
    ),
    table: ({ children, ...props }) => (
      <div className='mb-4 overflow-x-auto'>
        <table
          className='w-full border-collapse text-left text-sm'
          {...props}
        >
          {children}
        </table>
      </div>
    ),
    th: ({ children, ...props }) => (
      <th
        className='border border-slate-200 bg-slate-100 px-3 py-2 font-semibold dark:border-slate-700 dark:bg-slate-800'
        {...props}
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td
        className='border border-slate-200 px-3 py-2 dark:border-slate-700'
        {...props}
      >
        {children}
      </td>
    ),
    img: props => (
      <PatchNoteMdxImg
        {...props}
        locale={locale}
      />
    ),
    Callout: PatchNoteCallout,
    PatchNoteCallout,
    PatchNoteHeroBanner,
    HeroBanner: PatchNoteHeroBanner,
    PatchNoteSectionHeading,
    SectionHeading: PatchNoteSectionHeading,
    PatchNoteCategoryItem,
    CategoryItem: PatchNoteCategoryItem,
    PatchNoteImageCarousel: (props) => (
      <PatchNoteImageCarousel
        {...props}
        locale={locale}
      />
    ),
    ImageCarousel: (props) => (
      <PatchNoteImageCarousel
        {...props}
        locale={locale}
      />
    ),
    PatchNoteWineRegionAppellationTable: (props) => (
      <PatchNoteWineRegionAppellationTable
        {...props}
        locale={locale}
      />
    ),
    WineRegionAppellationTable: (props) => (
      <PatchNoteWineRegionAppellationTable
        {...props}
        locale={locale}
      />
    ),
  };
}

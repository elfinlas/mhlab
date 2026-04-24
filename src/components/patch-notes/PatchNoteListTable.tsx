'use client';

import type { MouseEvent } from 'react';
import Link from 'next/link';
import type { PatchNoteListItem, PatchNoteLocale } from '@/data/patch-notes/types';
import { PatchNoteTypeBadges } from '@/components/patch-notes/PatchNoteTypeBadges';
import { formatPatchNoteDate } from '@/lib/patch-notes/formatPatchNoteDate';
import { patchNotesUi } from '@/lib/patch-notes/patchNotesUi';

type PatchNoteListTableProps = {
  productId: string;
  locale: PatchNoteLocale;
  items: PatchNoteListItem[];
  /** 행 Link 클릭 직후(같은 탭 이동) — 즉시 로딩 오버레이 */
  onNavigateToDetailStart?: () => void;
};

function shouldIgnoreNavigateClick(e: MouseEvent<HTMLAnchorElement>) {
  return (
    e.metaKey ||
    e.ctrlKey ||
    e.shiftKey ||
    e.altKey ||
    (typeof e.button === 'number' && e.button !== 0)
  );
}

export function PatchNoteListTable({
  productId,
  locale,
  items,
  onNavigateToDetailStart,
}: PatchNoteListTableProps) {
  const ui = patchNotesUi(locale);
  const contentHint = `public/patch-notes/${productId}/${locale}/*.{md,mdx}`;

  if (items.length === 0) {
    return (
      <p className='rounded-xl border border-dashed border-slate-200 bg-slate-50/80 px-6 py-12 text-center text-slate-600 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-400'>
        {ui.emptyNoNotes}{' '}
        <code className='rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800'>
          {contentHint}
        </code>
        {ui.emptyHint}
      </p>
    );
  }

  return (
    <div className='overflow-x-auto rounded-xl border border-slate-200/90 bg-white/80 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/40'>
      <table className='w-full min-w-[640px] border-collapse text-left text-sm'>
        <thead>
          <tr className='border-b border-slate-200 bg-slate-50/90 dark:border-slate-700 dark:bg-slate-800/50'>
            <th className='px-4 py-3 font-semibold text-slate-700 dark:text-slate-200'>
              {ui.tableTitle}
            </th>
            <th className='min-w-[7rem] max-w-[14rem] px-4 py-3 font-semibold text-slate-700 dark:text-slate-200'>
              {ui.tableType}
            </th>
            <th className='w-36 px-4 py-3 font-semibold text-slate-700 dark:text-slate-200'>
              {ui.tableCreated}
            </th>
            <th className='w-36 px-4 py-3 font-semibold text-slate-700 dark:text-slate-200'>
              {ui.tableUpdated}
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((row) => (
            <tr
              key={row.slug}
              className='border-b border-slate-100 transition-colors last:border-0 hover:bg-indigo-50/40 dark:border-slate-800 dark:hover:bg-slate-800/40'
            >
              <td className='px-0 py-0'>
                <Link
                  href={`/product/${productId}/patch_notes/${locale}/${row.slug}`}
                  className='flex min-h-[3rem] items-center px-4 py-3 font-medium text-slate-900 dark:text-slate-100'
                  scroll={true}
                  onClick={(e) => {
                    if (shouldIgnoreNavigateClick(e) || !onNavigateToDetailStart) return;
                    onNavigateToDetailStart();
                  }}
                >
                  <span className='line-clamp-2'>{row.title}</span>
                </Link>
              </td>
              <td className='px-4 py-3'>
                <PatchNoteTypeBadges
                  types={row.types}
                  locale={locale}
                />
              </td>
              <td className='whitespace-nowrap px-4 py-3 text-slate-600 dark:text-slate-400'>
                {formatPatchNoteDate(row.createdAt, locale)}
              </td>
              <td className='whitespace-nowrap px-4 py-3 text-slate-600 dark:text-slate-400'>
                {formatPatchNoteDate(row.updatedAt ?? row.createdAt, locale)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

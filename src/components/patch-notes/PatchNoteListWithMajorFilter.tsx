'use client';

import { useMemo, useState, type ReactNode } from 'react';
import type { PatchNoteListItem, PatchNoteLocale } from '@/data/patch-notes/types';
import { PatchNoteNavigateOverlay } from '@/components/patch-notes/patchNoteLoadingUi';
import { PatchNoteListTable } from '@/components/patch-notes/PatchNoteListTable';
import { parseMajorFromPatchNoteSlug } from '@/lib/patch-notes/parsePatchNoteSlugMajor';
import { patchNotesUi } from '@/lib/patch-notes/patchNotesUi';

type MajorKey = 'all' | 'other' | number;

type PatchNoteListWithMajorFilterProps = {
  productId: string;
  locale: PatchNoteLocale;
  items: PatchNoteListItem[];
};

export function PatchNoteListWithMajorFilter({
  productId,
  locale,
  items,
}: PatchNoteListWithMajorFilterProps) {
  const ui = patchNotesUi(locale);
  const { majorsDesc, hasOther } = useMemo(() => {
    const majors = new Set<number>();
    let other = false;
    for (const row of items) {
      const m = parseMajorFromPatchNoteSlug(row.slug);
      if (m === null) other = true;
      else majors.add(m);
    }
    return {
      majorsDesc: Array.from(majors).sort((a, b) => b - a),
      hasOther: other,
    };
  }, [items]);

  const showFilter =
    items.length > 0 && (majorsDesc.length + (hasOther ? 1 : 0) > 1);

  const [selected, setSelected] = useState<MajorKey>('all');
  const [navigateToDetailPending, setNavigateToDetailPending] = useState(false);

  const filtered = useMemo(() => {
    if (selected === 'all') return items;
    if (selected === 'other') {
      return items.filter((row) => parseMajorFromPatchNoteSlug(row.slug) === null);
    }
    return items.filter(
      (row) => parseMajorFromPatchNoteSlug(row.slug) === selected
    );
  }, [items, selected]);

  if (items.length === 0) {
    return (
      <PatchNoteListTable
        productId={productId}
        locale={locale}
        items={items}
      />
    );
  }

  return (
    <div className='relative space-y-4'>
      {navigateToDetailPending ? (
        <PatchNoteNavigateOverlay locale={locale} />
      ) : null}
      {showFilter ? (
        <div
          className='flex flex-wrap items-center gap-2'
          role='group'
          aria-label={ui.filterMajorGroupLabel}
        >
          <FilterChip
            active={selected === 'all'}
            onClick={() => setSelected('all')}
          >
            {ui.filterMajorAll}
          </FilterChip>
          {majorsDesc.map((m) => (
            <FilterChip
              key={m}
              active={selected === m}
              onClick={() => setSelected(m)}
            >
              {m}.x
            </FilterChip>
          ))}
          {hasOther ? (
            <FilterChip
              active={selected === 'other'}
              onClick={() => setSelected('other')}
            >
              {ui.filterMajorOther}
            </FilterChip>
          ) : null}
        </div>
      ) : null}

      {filtered.length === 0 ? (
        <p className='rounded-xl border border-dashed border-slate-200 bg-slate-50/80 px-6 py-10 text-center text-slate-600 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-400'>
          {ui.filterMajorEmpty}
        </p>
      ) : (
        <PatchNoteListTable
          productId={productId}
          locale={locale}
          items={filtered}
          onNavigateToDetailStart={() => setNavigateToDetailPending(true)}
        />
      )}
    </div>
  );
}

function FilterChip({
  children,
  active,
  onClick,
}: {
  children: ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type='button'
      onClick={onClick}
      aria-pressed={active}
      className={
        active
          ? 'rounded-full bg-indigo-600 px-3.5 py-1.5 text-sm font-medium text-white shadow-sm dark:bg-violet-600'
          : 'rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:border-indigo-300 hover:bg-indigo-50/80 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-violet-500/50 dark:hover:bg-slate-700/80'
      }
    >
      {children}
    </button>
  );
}

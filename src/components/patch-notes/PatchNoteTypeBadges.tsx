import type { PatchNoteLocale, PatchNoteType } from '@/data/patch-notes/types';
import { patchNoteTypeLabel } from '@/lib/patch-notes/typeLabels';

const badgeClass =
  'inline-flex rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-800 dark:bg-indigo-950/80 dark:text-indigo-200';

type PatchNoteTypeBadgesProps = {
  types: PatchNoteType[];
  locale: PatchNoteLocale;
};

export function PatchNoteTypeBadges({ types, locale }: PatchNoteTypeBadgesProps) {
  return (
    <span className='flex flex-wrap items-center gap-1'>
      {types.map((t) => (
        <span
          key={t}
          className={badgeClass}
        >
          {patchNoteTypeLabel(t, locale)}
        </span>
      ))}
    </span>
  );
}

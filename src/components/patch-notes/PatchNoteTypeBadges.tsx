import type { PatchNoteLocale, PatchNoteType } from '@/data/patch-notes/types';
import { PATCH_NOTE_TYPE_BADGE_COLOR } from '@/lib/patch-notes/patchNoteTypeBadgeStyles';
import { patchNoteTypeLabel } from '@/lib/patch-notes/typeLabels';

const badgeBase =
  'inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ring-black/[0.06] dark:ring-white/10';

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
          className={`${badgeBase} ${PATCH_NOTE_TYPE_BADGE_COLOR[t]}`}
        >
          {patchNoteTypeLabel(t, locale)}
        </span>
      ))}
    </span>
  );
}

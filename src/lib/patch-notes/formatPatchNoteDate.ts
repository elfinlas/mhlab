import type { PatchNoteLocale } from '@/data/patch-notes/types';

const INTL_LOCALE: Record<PatchNoteLocale, string> = {
  ko: 'ko-KR',
  en: 'en-US',
};

export function formatPatchNoteDate(
  iso: string,
  locale: PatchNoteLocale = 'en'
): string {
  const t = Date.parse(iso);
  if (Number.isNaN(t)) return iso;
  return new Intl.DateTimeFormat(INTL_LOCALE[locale], {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date(t));
}

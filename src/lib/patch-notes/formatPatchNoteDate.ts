import type { PatchNoteLocale } from '@/data/patch-notes/types';

const INTL_LOCALE: Record<PatchNoteLocale, string> = {
  ko: 'ko-KR',
  en: 'en-US',
};

export function formatPatchNoteDate(
  iso: string,
  locale: PatchNoteLocale = 'en'
): string {
  const trimmed = iso.trim();
  const t = Date.parse(trimmed);
  if (Number.isNaN(t)) return iso;
  /** 서버(Node)·브라우저 타임존 차이로 하이드레이션 불일치 나지 않도록 UTC 기준 */
  return new Intl.DateTimeFormat(INTL_LOCALE[locale], {
    timeZone: 'UTC',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date(t));
}

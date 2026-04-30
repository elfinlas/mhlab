import type { PatchNoteType } from '@/data/patch-notes/types';

/**
 * 패치노트 타입별 배지 색 (Tailwind 전체 클래스 문자열 — JIT 이슈 방지).
 * 공통 레이아웃은 `PatchNoteTypeBadges`에서 합칩니다.
 */
export const PATCH_NOTE_TYPE_BADGE_COLOR: Record<PatchNoteType, string> = {
  app: 'bg-orange-100 text-orange-900 dark:bg-orange-950/85 dark:text-orange-200',
  web: 'bg-sky-100 text-sky-900 dark:bg-sky-950/85 dark:text-sky-200',
  renewal:
    'bg-violet-100 text-violet-900 dark:bg-violet-950/85 dark:text-violet-200',
  feature:
    'bg-emerald-100 text-emerald-900 dark:bg-emerald-950/85 dark:text-emerald-200',
  fix: 'bg-rose-100 text-rose-900 dark:bg-rose-950/85 dark:text-rose-200',
  improvement:
    'bg-blue-100 text-blue-900 dark:bg-blue-950/85 dark:text-blue-200',
  security:
    'bg-amber-100 text-amber-950 dark:bg-amber-950/75 dark:text-amber-100',
  maintenance:
    'bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200',
  other: 'bg-zinc-200 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-100',
};

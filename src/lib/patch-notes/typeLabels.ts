import type { PatchNoteLocale, PatchNoteType } from '@/data/patch-notes/types';

/** 리스트·상세 UI용 타입 라벨 */
export const PATCH_NOTE_TYPE_LABEL_KO: Record<PatchNoteType, string> = {
  app: '앱',
  web: '웹',
  renewal: '리뉴얼',
  feature: '기능',
  fix: '수정',
  improvement: '개선',
  security: '보안',
  maintenance: '유지보수',
  other: '기타',
};

export const PATCH_NOTE_TYPE_LABEL_EN: Record<PatchNoteType, string> = {
  app: 'App',
  web: 'Web',
  renewal: 'Renewal',
  feature: 'Feature',
  fix: 'Fix',
  improvement: 'Improvement',
  security: 'Security',
  maintenance: 'Maintenance',
  other: 'Other',
};

export function patchNoteTypeLabel(
  type: PatchNoteType,
  locale: PatchNoteLocale
): string {
  return locale === 'en'
    ? PATCH_NOTE_TYPE_LABEL_EN[type]
    : PATCH_NOTE_TYPE_LABEL_KO[type];
}

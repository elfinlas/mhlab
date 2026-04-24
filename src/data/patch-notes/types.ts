/** 패치노트 콘텐츠 로케일 — `public/patch-notes/{productId}/{locale}/*.md` | `*.mdx` */
export const PATCH_NOTE_LOCALES = ['ko', 'en'] as const;

export type PatchNoteLocale = (typeof PATCH_NOTE_LOCALES)[number];

export function isPatchNoteLocale(value: string): value is PatchNoteLocale {
  return (PATCH_NOTE_LOCALES as readonly string[]).includes(value);
}

/** `/product/.../patch_notes` 진입 시 기본 목록 로케일 */
export const DEFAULT_PATCH_NOTE_LOCALE: PatchNoteLocale = 'en';

/** 패치노트 분류 — frontmatter `type` 값과 동일해야 합니다. */
export const PATCH_NOTE_TYPES = [
  'app',
  'web',
  'renewal',
  'feature',
  'fix',
  'improvement',
  'security',
  'maintenance',
  'other',
] as const;

export type PatchNoteType = (typeof PATCH_NOTE_TYPES)[number];

export function isPatchNoteType(value: string): value is PatchNoteType {
  return (PATCH_NOTE_TYPES as readonly string[]).includes(value);
}

/** 마크다운 상단 frontmatter 스키마 (YAML `type`은 문자열 또는 배열) */
export type PatchNoteFrontmatter = {
  title: string;
  /** frontmatter `type`에서 정규화 — 최소 1개 */
  types: PatchNoteType[];
  /** ISO 8601 날짜 문자열 (예: 2025-04-01 또는 2025-04-01T12:00:00+09:00) */
  createdAt: string;
  /** 없으면 로더에서 `createdAt`과 동일하게 취급 */
  updatedAt?: string;
};

export type PatchNoteListItem = {
  slug: string;
  title: string;
  types: PatchNoteType[];
  createdAt: string;
  updatedAt: string;
};

export type PatchNoteDocument = PatchNoteListItem & {
  /** frontmatter 제외 본문(마크다운 / MDX / HTML) */
  body: string;
  /** `mdx`: `*.mdx` — MDX+컴포넌트; `markdown`: `*.md`; `html`: `meta.json`+`index.html` 번들 */
  bodyKind?: 'markdown' | 'mdx' | 'html';
};

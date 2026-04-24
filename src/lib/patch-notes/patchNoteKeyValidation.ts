import type { PatchNoteLocale } from '@/data/patch-notes/types';
import { isPatchNoteLocale } from '@/data/patch-notes/types';

/** 제품 id: 소문자·숫자·밑줄·하이픈 (데이터와 동일한 관례) */
const PRODUCT_ID_RE = /^[a-z0-9_-]+$/;
/** 슬러그: 소문자 정규화 후 — 첫 글자는 영숫자, 이후 `.` `_` `-` 허용 (예: 3_0_0_ko, 3.0.0-ko) */
const SLUG_RE = /^[a-z0-9][a-z0-9_.-]*$/;

export function normalizePatchNoteProductId(raw: string): string {
  return raw.trim().toLowerCase();
}

export function normalizePatchNoteSlug(raw: string): string {
  return raw.trim().toLowerCase().replace(/\s+/g, '_');
}

export function isValidPatchNoteProductId(value: string): boolean {
  return value.length > 0 && value.length <= 64 && PRODUCT_ID_RE.test(value);
}

export function isValidPatchNoteSlug(value: string): boolean {
  return value.length > 0 && value.length <= 120 && SLUG_RE.test(value);
}

export function parsePatchNoteLocale(value: string): PatchNoteLocale | null {
  return isPatchNoteLocale(value) ? value : null;
}

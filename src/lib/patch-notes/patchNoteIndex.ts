import fs from 'fs';
import path from 'path';
import type { PatchNoteListItem, PatchNoteLocale, PatchNoteType } from '@/data/patch-notes/types';
import { isPatchNoteType } from '@/data/patch-notes/types';

export const PATCH_NOTES_ROOT = path.join(process.cwd(), 'public', 'patch-notes');

const INDEX_BASENAME = 'notes-index.json';

export function patchNoteListIndexFilePath(
  productId: string,
  locale: PatchNoteLocale
): string {
  return path.join(PATCH_NOTES_ROOT, productId, locale, INDEX_BASENAME);
}

export type PatchNoteListIndexV1 = {
  version: 1;
  items: PatchNoteListItem[];
};

/**
 * `notes-index.json`이 있고 스키마가 맞으면 항목만 반환. 없거나 훼손이면 `null` (디스크 전체 읽기로 대체).
 */
export function readPatchNoteListIndexFile(
  productId: string,
  locale: PatchNoteLocale
): PatchNoteListItem[] | null {
  const p = patchNoteListIndexFilePath(productId, locale);
  if (!fs.existsSync(p)) return null;
  try {
    const raw = fs.readFileSync(p, 'utf8');
    const data = JSON.parse(raw) as unknown;
    if (!data || typeof data !== 'object') return null;
    const rec = data as Record<string, unknown>;
    if (rec.version !== 1) return null;
    if (!Array.isArray(rec.items)) return null;
    const items: PatchNoteListItem[] = [];
    for (const it of rec.items) {
      if (!it || typeof it !== 'object') return null;
      const o = it as Record<string, unknown>;
      if (typeof o.slug !== 'string' || typeof o.title !== 'string') return null;
      if (
        !Array.isArray(o.types) ||
        o.types.some(
          (t) => typeof t !== 'string' || !isPatchNoteType(t)
        )
      ) {
        return null;
      }
      if (typeof o.createdAt !== 'string' || typeof o.updatedAt !== 'string') {
        return null;
      }
      items.push({
        slug: o.slug,
        title: o.title,
        types: o.types as PatchNoteType[],
        createdAt: o.createdAt,
        updatedAt: o.updatedAt,
      });
    }
    return items;
  } catch {
    return null;
  }
}

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { cache } from 'react';
import type {
  PatchNoteDocument,
  PatchNoteFrontmatter,
  PatchNoteListItem,
  PatchNoteLocale,
  PatchNoteType,
} from '@/data/patch-notes/types';
import { isPatchNoteType } from '@/data/patch-notes/types';
import {
  isValidPatchNoteProductId,
  isValidPatchNoteSlug,
  normalizePatchNoteProductId,
  normalizePatchNoteSlug,
} from '@/lib/patch-notes/patchNoteKeyValidation';
import {
  PATCH_NOTES_ROOT,
  readPatchNoteListIndexFile,
} from '@/lib/patch-notes/patchNoteIndex';

/** 마크다운·MDX·HTML 번들(`meta.json`+`index.html`) — 루트는 `patchNoteIndex`와 동일 */

function productDir(productId: string): string {
  return path.join(PATCH_NOTES_ROOT, productId);
}

function productLocaleDir(productId: string, locale: PatchNoteLocale): string {
  return path.join(productDir(productId), locale);
}

export function publicPatchNoteBundleDir(
  productId: string,
  locale: PatchNoteLocale,
  slug: string
): string {
  return path.join(PATCH_NOTES_ROOT, productId, locale, slug);
}

/** gray-matter/js-yaml이 `2025-04-01`을 Date로 파싱하는 경우를 포함해 문자열로 통일 */
function coerceFrontmatterDate(value: unknown): string {
  if (typeof value === 'string') return value.trim();
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }
  if (typeof value === 'number' && Number.isFinite(value)) {
    const d = new Date(value);
    if (!Number.isNaN(d.getTime())) return d.toISOString().slice(0, 10);
  }
  return '';
}

function normalizeTypesFromFrontmatter(rawType: unknown): PatchNoteType[] {
  const seen = new Set<PatchNoteType>();
  const ordered: PatchNoteType[] = [];
  const push = (t: PatchNoteType) => {
    if (seen.has(t)) return;
    seen.add(t);
    ordered.push(t);
  };

  if (Array.isArray(rawType)) {
    for (const entry of rawType) {
      if (typeof entry !== 'string') continue;
      const s = entry.trim();
      if (isPatchNoteType(s)) push(s);
    }
    return ordered.length > 0 ? ordered : ['other'];
  }
  if (typeof rawType === 'string') {
    const s = rawType.trim();
    if (isPatchNoteType(s)) push(s);
    return ordered.length > 0 ? ordered : ['other'];
  }
  return ['other'];
}

function parseFrontmatter(raw: Record<string, unknown>): PatchNoteFrontmatter {
  const title = typeof raw.title === 'string' ? raw.title.trim() : '';
  const types = normalizeTypesFromFrontmatter(raw.type);
  const createdAt = coerceFrontmatterDate(raw.createdAt);
  const updatedRaw = coerceFrontmatterDate(raw.updatedAt);
  const updatedAt = updatedRaw || createdAt;

  return {
    title: title || '(제목 없음)',
    types,
    createdAt,
    updatedAt: updatedAt || createdAt,
  };
}

function parseMetaJsonObject(raw: unknown): PatchNoteFrontmatter | null {
  if (!raw || typeof raw !== 'object') return null;
  return parseFrontmatter(raw as Record<string, unknown>);
}

/** `public/patch-notes/.../{locale}` 에서 `.md` · `.mdx` 파일 슬러그(확장자 제외, 합집합) */
export function listMarkdownSlugsForProduct(
  productId: string,
  locale: PatchNoteLocale
): string[] {
  const pid = normalizePatchNoteProductId(productId);
  if (!isValidPatchNoteProductId(pid)) return [];
  const dir = productLocaleDir(pid, locale);
  if (!fs.existsSync(dir)) return [];
  const slugs = new Set<string>();
  for (const f of fs.readdirSync(dir)) {
    if (f.endsWith('.md')) slugs.add(f.replace(/\.md$/i, ''));
    if (f.endsWith('.mdx')) slugs.add(f.replace(/\.mdx$/i, ''));
  }
  return Array.from(slugs);
}

function publicLocaleDir(productId: string, locale: PatchNoteLocale): string {
  return path.join(PATCH_NOTES_ROOT, productId, locale);
}

export function listHtmlBundleSlugsForProduct(
  productId: string,
  locale: PatchNoteLocale
): string[] {
  const pid = normalizePatchNoteProductId(productId);
  if (!isValidPatchNoteProductId(pid)) return [];
  const base = publicLocaleDir(pid, locale);
  if (!fs.existsSync(base)) return [];
  return fs.readdirSync(base, { withFileTypes: true }).flatMap((e) => {
    if (!e.isDirectory()) return [];
    const slug = e.name;
    if (!isValidPatchNoteSlug(slug)) return [];
    const dir = path.join(base, slug);
    const metaPath = path.join(dir, 'meta.json');
    const htmlPath = path.join(dir, 'index.html');
    if (!fs.existsSync(metaPath) || !fs.existsSync(htmlPath)) return [];
    return [slug];
  });
}

/** 마크다운 슬러그 + `public/patch-notes` HTML 번들 슬러그(합집합) */
export function listPatchNoteSlugsForProduct(
  productId: string,
  locale: PatchNoteLocale
): string[] {
  const md = listMarkdownSlugsForProduct(productId, locale);
  const html = listHtmlBundleSlugsForProduct(productId, locale);
  return Array.from(new Set([...md, ...html]));
}

function readMarkdownPatchNote(
  productId: string,
  locale: PatchNoteLocale,
  slug: string
): PatchNoteDocument | null {
  const filePath = path.join(productLocaleDir(productId, locale), `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  const fm = parseFrontmatter(data as Record<string, unknown>);

  return {
    slug,
    ...fm,
    updatedAt: fm.updatedAt || fm.createdAt,
    body: content.trim(),
    bodyKind: 'markdown',
  };
}

function readMdxPatchNote(
  productId: string,
  locale: PatchNoteLocale,
  slug: string
): PatchNoteDocument | null {
  const filePath = path.join(productLocaleDir(productId, locale), `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  const fm = parseFrontmatter(data as Record<string, unknown>);

  return {
    slug,
    ...fm,
    updatedAt: fm.updatedAt || fm.createdAt,
    body: content.trim(),
    bodyKind: 'mdx',
  };
}

function readHtmlBundlePatchNote(
  productId: string,
  locale: PatchNoteLocale,
  slug: string
): PatchNoteDocument | null {
  if (!isValidPatchNoteSlug(slug) || !isValidPatchNoteProductId(productId)) {
    return null;
  }
  const dir = publicPatchNoteBundleDir(productId, locale, slug);
  const metaPath = path.join(dir, 'meta.json');
  const htmlPath = path.join(dir, 'index.html');
  if (!fs.existsSync(metaPath) || !fs.existsSync(htmlPath)) return null;

  let metaRaw: unknown;
  try {
    metaRaw = JSON.parse(fs.readFileSync(metaPath, 'utf8')) as unknown;
  } catch {
    return null;
  }
  const fm = parseMetaJsonObject(metaRaw);
  if (!fm) return null;

  const body = fs.readFileSync(htmlPath, 'utf8').trim();

  return {
    slug,
    ...fm,
    updatedAt: fm.updatedAt || fm.createdAt,
    body,
    bodyKind: 'html',
  };
}

/** `3.0.0` 형태 슬러그를 숫자 세그먼트로 비교 — 동일 날짜일 때 목록을 최신 버전 우선으로 */
function comparePatchNoteSlugDesc(a: string, b: string): number {
  const pa = a.split('.').map((s) => {
    const n = parseInt(s, 10);
    return Number.isFinite(n) ? n : 0;
  });
  const pb = b.split('.').map((s) => {
    const n = parseInt(s, 10);
    return Number.isFinite(n) ? n : 0;
  });
  const len = Math.max(pa.length, pb.length);
  for (let i = 0; i < len; i++) {
    const da = pa[i] ?? 0;
    const db = pb[i] ?? 0;
    if (da !== db) return db - da;
  }
  return b.localeCompare(a, undefined, { numeric: true, sensitivity: 'base' });
}

function readPatchNoteFile(
  productId: string,
  locale: PatchNoteLocale,
  slug: string
): PatchNoteDocument | null {
  const pid = normalizePatchNoteProductId(productId);
  const s = normalizePatchNoteSlug(slug);
  if (!isValidPatchNoteProductId(pid) || !isValidPatchNoteSlug(s)) return null;
  const mdDoc = readMarkdownPatchNote(pid, locale, s);
  if (mdDoc) return mdDoc;
  const mdxDoc = readMdxPatchNote(pid, locale, s);
  if (mdxDoc) return mdxDoc;
  return readHtmlBundlePatchNote(pid, locale, s);
}

/** `notes-index.json` 없이 슬러그마다 전체 파일 읽기+frontmatter (빌드 스크립트·폴백) */
export function listPatchNotesForProductFromDisk(
  productId: string,
  locale: PatchNoteLocale
): PatchNoteListItem[] {
  const slugs = listPatchNoteSlugsForProduct(productId, locale);
  const items: PatchNoteListItem[] = [];

  for (const slug of slugs) {
    const doc = readPatchNoteFile(productId, locale, slug);
    if (!doc) continue;
    items.push({
      slug: doc.slug,
      title: doc.title,
      types: doc.types,
      createdAt: doc.createdAt,
      updatedAt: doc.updatedAt,
    });
  }

  items.sort((a, b) => {
    const tb = Date.parse(b.updatedAt) || 0;
    const ta = Date.parse(a.updatedAt) || 0;
    if (tb !== ta) return tb - ta;
    return comparePatchNoteSlugDesc(a.slug, b.slug);
  });

  return items;
}

function listPatchNotesForProductImpl(
  productId: string,
  locale: PatchNoteLocale
): PatchNoteListItem[] {
  const fromIndex = readPatchNoteListIndexFile(productId, locale);
  if (fromIndex !== null) {
    return [...fromIndex].sort((a, b) => {
      const tb = Date.parse(b.updatedAt) || 0;
      const ta = Date.parse(a.updatedAt) || 0;
      if (tb !== ta) return tb - ta;
      return comparePatchNoteSlugDesc(a.slug, b.slug);
    });
  }
  return listPatchNotesForProductFromDisk(productId, locale);
}

/** 인덱스 JSON 우선, 없으면 디스크 스캔. 요청·렌더당 중복 제거. */
export const listPatchNotesForProduct = cache(listPatchNotesForProductImpl);

const getPatchNoteDocumentImpl = (
  productId: string,
  locale: PatchNoteLocale,
  slug: string
): PatchNoteDocument | null => readPatchNoteFile(productId, locale, slug);

export const getPatchNoteDocument = cache(getPatchNoteDocumentImpl);

/** `generateStaticParams`용 — `public/patch-notes` 아래 제품 디렉터리명 */
export function listProductIdsWithPatchNotes(): string[] {
  const set = new Set<string>();
  if (!fs.existsSync(PATCH_NOTES_ROOT)) return [];
  for (const e of fs.readdirSync(PATCH_NOTES_ROOT, { withFileTypes: true })) {
    if (e.isDirectory() && isValidPatchNoteProductId(e.name)) set.add(e.name);
  }
  return Array.from(set);
}

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { DEFAULT_PATCH_NOTE_LOCALE } from '@/data/patch-notes/types';

const PATCH_NOTE_LOCALE_SEGMENTS = new Set(['ko', 'en']);

/**
 * 예전 상세 URL `/product/{id}/patch_notes/{slug}` → 기본 로케일 상세
 * (목록 `/patch_notes/ko`, `/patch_notes/en` 은 그대로 통과)
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const match = pathname.match(/^\/product\/([^/]+)\/patch_notes\/([^/]+)$/);
  if (!match) return NextResponse.next();
  const [, productId, segment] = match;
  if (PATCH_NOTE_LOCALE_SEGMENTS.has(segment)) {
    return NextResponse.next();
  }
  const url = request.nextUrl.clone();
  url.pathname = `/product/${productId}/patch_notes/${DEFAULT_PATCH_NOTE_LOCALE}/${segment}`;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ['/product/:id/patch_notes/:segment'],
};

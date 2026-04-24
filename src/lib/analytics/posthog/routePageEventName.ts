import type { Locale } from '@/lib/i18n';

/**
 * PostHog 이벤트 접미사: `page_{base}_en` · `page_{base}_kr` · `page_{base}_ja`
 * - 한국어 UI/경로 `ko` → `_kr` (요청하신 네이밍)
 */
export type PosthogPageEventLocaleSuffix = 'en' | 'kr' | 'ja';

/**
 * 경로(페이지) 베이스 키 — 실제 이벤트는 `page_{base}_{en|kr|ja}`
 * 규칙은 **위에서 아래 순서**로 첫 매칭만 사용합니다.
 */
const ROUTE_BASE_RULES: Array<{
  base: string;
  match: (pathname: string) => boolean;
}> = [
  { base: 'home', match: (p) => p === '/' },
  { base: 'about', match: (p) => p === '/about' },
  { base: 'product', match: (p) => p === '/product' },
  {
    base: 'patch_notes_detail',
    match: (p) =>
      /^\/product\/[^/]+\/patch_notes\/[^/]+\/[^/]+$/.test(p),
  },
  {
    base: 'patch_notes_list',
    match: (p) =>
      /^\/product\/[^/]+\/patch_notes\/[^/]+$/.test(p),
  },
  {
    base: 'patch_notes_entry',
    match: (p) => /^\/product\/[^/]+\/patch_notes$/.test(p),
  },
  {
    base: 'product_detail',
    match: (p) => /^\/product\/[^/]+$/.test(p),
  },
  {
    base: 'privacy_myc',
    match: (p) => p === '/support/privacy/myc',
  },
  {
    base: 'privacy_travel_log',
    match: (p) => p === '/support/privacy/travel_log',
  },
];

function appLocaleToSuffix(locale: Locale): PosthogPageEventLocaleSuffix {
  if (locale === 'en') return 'en';
  if (locale === 'ja') return 'ja';
  return 'kr';
}

/**
 * `…/patch_notes/ko/…` · `…/patch_notes/en/…` 는 URL에 나온 언어로 접미사.
 * 그 외 경로는 앱 UI 로케일(`useLanguage`) 기준.
 */
function resolveEventLocaleSuffix(
  pathname: string,
  uiLocale: Locale
): PosthogPageEventLocaleSuffix {
  const m = pathname.match(
    /^\/product\/[^/]+\/patch_notes\/(ko|en)(?:\/.*)?$/
  );
  if (m) {
    return m[1] === 'en' ? 'en' : 'kr';
  }
  return appLocaleToSuffix(uiLocale);
}

/**
 * `pathname` + UI 로케일 → `page_{base}_{en|kr|ja}`. 매칭 없음이면 `null`.
 */
export function getPosthogPageEventName(
  pathname: string,
  uiLocale: Locale
): string | null {
  const normalized =
    pathname === '' ? '/' : pathname.startsWith('/') ? pathname : `/${pathname}`;
  for (const rule of ROUTE_BASE_RULES) {
    if (rule.match(normalized)) {
      const suffix = resolveEventLocaleSuffix(normalized, uiLocale);
      return `page_${rule.base}_${suffix}`;
    }
  }
  return null;
}

/** 문서·대시보드용: 베이스 키 목록 (이벤트명은 `page_{base}_en` 등) */
export const POSTHOG_PAGE_EVENT_BASES = ROUTE_BASE_RULES.map((r) => r.base);

/** 가능한 이벤트 접미사 */
export const POSTHOG_PAGE_EVENT_LOCALE_SUFFIXES: PosthogPageEventLocaleSuffix[] =
  ['en', 'kr', 'ja'];

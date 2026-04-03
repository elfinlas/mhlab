import type { Locale } from '@/lib/i18n';

/**
 * 노출 규칙
 * - `published: false` — 완전 비공개. `/product` 목록·홈 카드·상세(`/product/[id]`) 모두 제외(404).
 * - `hidden: true` — **목록·홈에서만** 숨김. `published !== false`이면 상세 URL은 열림(링크 전용·비노출).
 * 같은 id는 `productList`와 `productItemList` **양쪽**에 `published` / `hidden` / `supportedLocales`를 맞출 것.
 */

/** 한국어·영어 스크린샷. 비어 있으면 다른 로케일 배열로 폴백 */
export type LocalizedImageSet = {
  ko: string[];
  en: string[];
};

/**
 * - 공통: `images: ['/a.webp', '/b.webp']` (기존과 동일)
 * - 분리: `images: { ko: ['/ko/a.webp'], en: ['/en/a.webp'] }`
 * 일본어(`ja`)는 영어 배열을 우선 사용하고, 비어 있으면 한국어로 폴백합니다.
 */
export type ProductImages = string[] | LocalizedImageSet;

export function resolveProductImages(
  images: ProductImages,
  locale: Locale
): string[] {
  if (Array.isArray(images)) return images;
  const { ko, en } = images;
  const forKo = ko.length ? ko : en;
  const forEn = en.length ? en : ko;
  if (locale === 'ko') return forKo;
  if (locale === 'en') return forEn;
  return forEn;
}

/** 단일 문자열: `string` 또는 `{ ko, en }` */
export type LocalizedString = string | { ko: string; en: string };

/** 문단·불릿 등: `string[]` 또는 `{ ko, en }` */
export type LocalizedStringList = string[] | { ko: string[]; en: string[] };

export function resolveLocalizedString(
  value: LocalizedString,
  locale: Locale
): string {
  if (typeof value === 'string') return value;
  const { ko, en } = value;
  if (locale === 'ko') return ko || en;
  if (locale === 'en') return en || ko;
  return en || ko;
}

export function resolveLocalizedStringList(
  value: LocalizedStringList,
  locale: Locale
): string[] {
  if (Array.isArray(value)) return value;
  const { ko, en } = value;
  if (locale === 'ko') return ko.length ? ko : en;
  if (locale === 'en') return en.length ? en : ko;
  return en.length ? en : ko;
}

/** 검색 등: 한·영 문구를 모두 인덱싱 */
export function flattenLocalizedString(value: LocalizedString): string {
  if (typeof value === 'string') return value;
  return `${value.ko} ${value.en}`.trim();
}

export function flattenLocalizedStringList(value: LocalizedStringList): string {
  if (Array.isArray(value)) return value.join(' ');
  return [...value.ko, ...value.en].join(' ');
}

/** 앱·서비스 UI에서 제공하는 언어 (`Locale` 코드) */
export type ProductSupportedLocales = readonly Locale[];

const PRODUCT_LOCALE_DISPLAY_ORDER: Locale[] = ['ko', 'en', 'ja'];

export function orderedProductLocales(
  locales: ProductSupportedLocales
): Locale[] {
  return [...locales].sort(
    (a, b) =>
      PRODUCT_LOCALE_DISPLAY_ORDER.indexOf(a) -
      PRODUCT_LOCALE_DISPLAY_ORDER.indexOf(b)
  );
}

export type ProductPublished = {
  published?: boolean;
  /** true면 카탈로그·홈 그리드에서 제외. 상세는 `published !== false`일 때만 접근 가능 */
  hidden?: boolean;
};

export function isProductPublished(p: ProductPublished): boolean {
  return p.published !== false;
}

export function isProductHidden(p: ProductPublished): boolean {
  return p.hidden === true;
}

/** `/product` 목록·검색·홈 제품 카드에 올라가는 항목 */
export function isProductListed(p: ProductPublished): boolean {
  return isProductPublished(p) && !isProductHidden(p);
}

export interface ProductListItemType extends ProductPublished {
  id: string;
  title: LocalizedString;
  category: LocalizedString;
  description: LocalizedStringList;
  mainFeatures: LocalizedStringList;
  images: ProductImages;
  supportedLocales: ProductSupportedLocales;
  color: string;
}

export interface ProductItemType extends ProductPublished {
  id: string;
  title: LocalizedString;
  category: LocalizedString;
  description: LocalizedStringList;
  keyPoints: LocalizedStringList;
  links: {
    website: string;
    appStore: string;
    googlePlay: string;
    type: 'mobile' | 'web' | 'full';
  };
  supportedLocales: ProductSupportedLocales;
  images: ProductImages;
  functions: {
    id: string;
    title: LocalizedString;
    description: LocalizedStringList;
    features: LocalizedStringList;
    images: ProductImages;
  }[];
}


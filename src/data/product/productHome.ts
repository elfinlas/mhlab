import type { Locale } from '@/lib/i18n';
import { productItemList } from './productItemList.data';
import { productList } from './productList.data';
import {
  isProductListed,
  resolveLocalizedString,
  resolveLocalizedStringList,
  type ProductItemType,
  type ProductSupportedLocales,
} from './productModel';

/** 홈 제품 카드 플랫폼 뱃지 (ProductCard 등) */
export type HomePlatform = 'iOS' | 'android' | 'web';

/** 메인 홈 제품 카드 — 제목·한 줄 설명은 `productList`의 로컬라이즈 필드에서 */
export type HomeProduct = {
  id: string;
  icon: string;
  platforms: HomePlatform[];
  href: string;
  supportedLocales: ProductSupportedLocales;
};

/** 홈 그리드 노출 순서 (`productItemList`에 동일 id 필요) */
const HOME_PRODUCT_CARD_ORDER = [
  'myc_app',
  'myc_web',
  'travellog',
  'bcow',
  'reservelog',
] as const;

/** 목록 데이터에 없는 앱 아이콘 경로 */
const HOME_PRODUCT_ICONS: Record<
  (typeof HOME_PRODUCT_CARD_ORDER)[number],
  string
> = {
  travellog: '/product/travellog/app_icon.webp',
  myc_web: '/product/myc/myc_icon.png',
  myc_app: '/product/myc/app_icon.png',
  bcow: '/product/bcow/bcow_icon.webp',
  reservelog: '/product/reservelog/reservelog_icon.webp',
};

function homePlatformsFromLinks(
  links: ProductItemType['links']
): HomePlatform[] {
  const out: HomePlatform[] = [];
  if (links.appStore) out.push('iOS');
  if (links.googlePlay) out.push('android');
  if (links.type === 'web') out.push('web');
  else if (links.type === 'full' && links.website) out.push('web');
  return out;
}

const productItemById = new Map(productItemList.map(p => [p.id, p] as const));
const productListById = new Map(productList.map(p => [p.id, p] as const));

/** 홈 카드는 목록(`productList`)·상세(`productItemList`) **둘 다** `isProductListed`일 때만 노출 */
function isHomeProductVisible(id: string): boolean {
  const item = productItemById.get(id);
  const listRow = productListById.get(id);
  if (!item || !listRow) return false;
  return isProductListed(item) && isProductListed(listRow);
}

export const homeProducts: HomeProduct[] = HOME_PRODUCT_CARD_ORDER.filter(id =>
  isHomeProductVisible(id)
).map(id => {
  const item = productItemById.get(id)!;
  const listRow = productListById.get(id)!;
  return {
    id,
    icon: HOME_PRODUCT_ICONS[id],
    platforms: homePlatformsFromLinks(item.links),
    href: `/product/${id}`,
    /** 카탈로그 `productList`와 동일 — 홈 카드 배지가 목록 데이터와 항상 일치 */
    supportedLocales: listRow.supportedLocales,
  };
});

/** 홈·랜딩 제품 카드 카피 — `productList` 기준 */
export function homeProductCardTitle(
  productId: string,
  locale: Locale
): string {
  const row = productListById.get(productId);
  if (!row) return productId;
  return resolveLocalizedString(row.title, locale);
}

/** 카드에 노출할 짧은 설명 — 본문(`description`)의 첫 문단 */
export function homeProductCardDescription(
  productId: string,
  locale: Locale
): string {
  const row = productListById.get(productId);
  if (!row) return '';
  return resolveLocalizedStringList(row.description, locale)[0] ?? '';
}

/**
 * 랜딩 제품 그리드 — `homeProducts`와 동일 노출 규칙.
 * 제목·설명은 `productList` 한국어 기준(레거시 랜딩용).
 */
export type LandingProjectCardModel = {
  id: string;
  title: string;
  description: string;
  icon: string;
  platform: { title: HomePlatform }[];
  /** 호환용 — 랜딩 `ProductCard`는 현재 `/product/:id`로만 이동 */
  link: string;
};

export const landingProducts: LandingProjectCardModel[] =
  HOME_PRODUCT_CARD_ORDER.filter(isHomeProductVisible).map(id => {
    const item = productItemById.get(id)!;
    return {
      id,
      title: homeProductCardTitle(id, 'ko'),
      description: homeProductCardDescription(id, 'ko'),
      icon: HOME_PRODUCT_ICONS[id],
      platform: homePlatformsFromLinks(item.links).map(platform => ({
        title: platform,
      })),
      link: `/product/${id}`,
    };
  });

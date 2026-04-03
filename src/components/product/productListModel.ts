import {
  flattenLocalizedString,
  flattenLocalizedStringList,
  type ProductListItemType,
} from '@/data/Product';

export type ProductListItem = ProductListItemType;

export type ProductAccent = {
  panel: string;
  badge: string;
  badgeText: string;
  checkDot: string;
};

export const PRODUCT_ACCENTS: Record<string, ProductAccent> = {
  travellog: {
    panel: 'bg-indigo-50',
    badge: 'bg-[#eef2ff]',
    badgeText: 'text-indigo-700',
    checkDot: 'bg-[#6366F1]',
  },
  reservelog: {
    panel: 'bg-sky-50',
    badge: 'bg-sky-100',
    badgeText: 'text-sky-800',
    checkDot: 'bg-sky-600',
  },
  myc_app: {
    panel: 'bg-rose-50',
    badge: 'bg-rose-100',
    badgeText: 'text-rose-800',
    checkDot: 'bg-rose-500',
  },
  myc_web: {
    panel: 'bg-violet-50',
    badge: 'bg-violet-100',
    badgeText: 'text-violet-800',
    checkDot: 'bg-violet-600',
  },
  bcow: {
    panel: 'bg-amber-50',
    badge: 'bg-amber-100',
    badgeText: 'text-amber-900',
    checkDot: 'bg-amber-600',
  },
};

export const DEFAULT_PRODUCT_ACCENT: ProductAccent = {
  panel: 'bg-indigo-50',
  badge: 'bg-[#eef2ff]',
  badgeText: 'text-indigo-700',
  checkDot: 'bg-[#6366F1]',
};

export function editorialProductTitle(title: string) {
  const i = title.indexOf('(');
  if (i <= 0) return title.trim();
  return title.slice(0, i).trim() || title.trim();
}

export function productSearchBlob(p: ProductListItem) {
  const locales = p.supportedLocales.join(' ');
  return `${flattenLocalizedString(p.title)} ${flattenLocalizedString(p.category)} ${flattenLocalizedStringList(p.description)} ${flattenLocalizedStringList(p.mainFeatures)} ${locales}`.toLowerCase();
}

export function filterProducts(
  items: ProductListItem[],
  query: string,
): ProductListItem[] {
  const needle = query.trim().toLowerCase();
  if (!needle) return items;
  return items.filter((p) => productSearchBlob(p).includes(needle));
}

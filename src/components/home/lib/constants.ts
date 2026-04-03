export const HERO_BADGE_KEYS = [
  { icon: '🍷', key: 'wine' },
  { icon: '🏠', key: 'realEstate' },
  { icon: '📈', key: 'stock' },
  { icon: '👨‍💻', key: 'hobbyDev' },
  { icon: '📸', key: 'photo' },
] as const;

export const PRODUCT_VISUAL: Record<
  string,
  { featured?: boolean; iconBg: string }
> = {
  travellog: { iconBg: 'bg-orange-100' },
  myc_web: { iconBg: 'bg-green-100' },
  myc_app: { featured: true, iconBg: 'bg-green-200' },
  bcow: { iconBg: 'bg-pink-100' },
  reservelog: { iconBg: 'bg-blue-100' },
};

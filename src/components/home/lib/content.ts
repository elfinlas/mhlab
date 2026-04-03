export type { HomePlatform, HomeProduct } from '@/data/Product';
export { homeProducts } from '@/data/Product';

export const interestBadges = [
  { icon: '🍷', label: 'Wine lover' },
  { icon: '🏘️', label: 'Real estate' },
  { icon: '🏦', label: 'Stock investing' },
  { icon: '👨‍💻', label: 'Hobby coding' },
  { icon: '📸', label: 'Photography' },
] as const;

/** 링크 카드 제목은 messages의 stitchPage.linkTitles.<icon> (ko/en/ja) */
export type HomeSocialLink = {
  href: string;
  handle: string;
  icon: 'github' | 'globe' | 'naver' | 'threads';
};

/** 번역 누락 시 폴백 — en.json stitchPage.linkTitles 와 동일 */
export const HOME_SOCIAL_LINK_TITLE_FALLBACK_EN: Record<
  HomeSocialLink['icon'],
  string
> = {
  github: 'GitHub',
  globe: 'Dev blog',
  naver: 'Hobby blog',
  threads: 'Threads',
};

export const homeSocialLinks: HomeSocialLink[] = [
  {
    href: 'https://github.com/elfinlas',
    handle: '@elfinlas',
    icon: 'github',
  },
  {
    href: 'https://elfinlas.github.io/',
    handle: 'elfinlas.github.io',
    icon: 'globe',
  },
  {
    href: 'https://blog.naver.com/wisseraph',
    handle: 'blog.naver.com/wisseraph',
    icon: 'naver',
  },
  {
    href: 'https://www.threads.com/@vvoid_life',
    handle: '@elfinlas',
    icon: 'threads',
  },
];

import {
  HOME_SOCIAL_LINK_TITLE_FALLBACK_EN,
  type HomeSocialLink,
} from '@/components/home/lib/content';

export function pickMessageWithFallback(
  t: (key: string) => string,
  messageKey: string,
  fallback: string,
) {
  const value = t(messageKey);
  return value === messageKey ? fallback : value;
}

export function tHomeSocialLinkTitle(
  t: (key: string) => string,
  icon: HomeSocialLink['icon'],
) {
  const fb = HOME_SOCIAL_LINK_TITLE_FALLBACK_EN[icon];
  return pickMessageWithFallback(t, `stitchPage.linkTitles.${icon}`, fb);
}

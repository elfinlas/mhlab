import posthog from 'posthog-js';
import type { Locale } from '@/lib/i18n';
import { getPosthogClientEnv, isPosthogEnabled } from './env';
import { getPosthogPageEventName } from './routePageEventName';

export type CapturePosthogRoutePageviewArgs = {
  /** `usePathname()` 값 (쿼리 제외) — 어떤 이벤트를 쏠지 결정 */
  pathname: string;
  /** 쿼리 포함 전체 경로 (`/a?b=1`). `$current_url`에 사용 */
  pathWithQuery: string;
  /** `LanguageContext` UI 로케일 — `page_{base}_en` / `page_{base}_kr` 등 */
  uiLocale: Locale;
};

/**
 * 경로에 맞는 **커스텀 이벤트명**으로 `posthog.capture` (표준 `$pageview` 미사용).
 * `getPosthogPageEventName(pathname, uiLocale)`이 `null`이면 전송하지 않습니다.
 */
export function capturePosthogRoutePageview(
  args: CapturePosthogRoutePageviewArgs
): void {
  const { token } = getPosthogClientEnv();
  if (!token || !isPosthogEnabled()) return;

  const eventName = getPosthogPageEventName(args.pathname, args.uiLocale);
  if (!eventName) return;

  try {
    const $current_url = new URL(
      args.pathWithQuery,
      window.location.origin
    ).href;
    posthog.capture(eventName, { $current_url });
  } catch {
    // ignore invalid URL
  }
}

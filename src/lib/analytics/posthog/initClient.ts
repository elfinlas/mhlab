import posthog from 'posthog-js';
import { getPosthogClientEnv, isPosthogEnabled } from './env';

/** Next `instrumentation-client`에서 한 번 호출 */
export function initPosthogClient(): void {
  const { token, host } = getPosthogClientEnv();
  if (!token || !isPosthogEnabled()) return;
  try {
    posthog.init(token, {
      api_host: host,
      person_profiles: 'identified_only',

      //페이지 떠날 때 기록
      capture_pageleave: false,
      /** 라우트별 이벤트는 `PostHogRouteCapture` + `getPosthogPageEventName` */
      capture_pageview: false,
      autocapture: false,

      //session recording 비활성화
      disable_session_recording: true,
    });
  } catch {
    // instrumentation must not break the app
  }
}

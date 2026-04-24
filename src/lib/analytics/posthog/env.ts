export type PosthogClientEnv = {
  token: string | undefined;
  host: string;
};

export function getPosthogClientEnv(): PosthogClientEnv {
  return {
    token: process.env.NEXT_PUBLIC_POSTHOG_TOKEN,
    host:
      process.env.NEXT_PUBLIC_POSTHOG_HOST ?? 'https://us.i.posthog.com',
  };
}

/**
 * PostHog 전송 여부.
 * - 기본: Vercel **Production** 배포만 (`next.config`의 `NEXT_PUBLIC_VERCEL_ENV`).
 * - 로컬·Preview·스테이징(Preview): 집계 안 함.
 * - Vercel이 아닌 운영: Production 환경 변수에만 `NEXT_PUBLIC_POSTHOG_ENABLED=true` 설정.
 * - 강제 끔: `NEXT_PUBLIC_POSTHOG_ENABLED=false`
 */
export function isPosthogEnabled(): boolean {
  const raw = process.env.NEXT_PUBLIC_POSTHOG_ENABLED?.trim().toLowerCase();
  if (raw === '0' || raw === 'false') return false;
  if (raw === '1' || raw === 'true') return true;
  return (process.env.NEXT_PUBLIC_VERCEL_ENV ?? '') === 'production';
}

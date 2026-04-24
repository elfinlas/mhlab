'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { capturePosthogRoutePageview } from '@/lib/analytics/posthog';
import { useLanguage } from '@/contexts/LanguageContext';

/** App Router 경로·쿼리 변경마다 커스텀 `pageview` + `$current_url` */
export function PostHogRouteCapture() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { locale: uiLocale } = useLanguage();

  useEffect(() => {
    const q = searchParams.toString();
    const pathWithQuery = q ? `${pathname}?${q}` : pathname;
    capturePosthogRoutePageview({ pathname, pathWithQuery, uiLocale });
  }, [pathname, searchParams, uiLocale]);

  return null;
}

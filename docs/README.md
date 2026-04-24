# PostHog (클라이언트 라우트)

## 동작 요약

1. **`instrumentation-client`**에서 `posthog.init` — `autocapture: false`, `capture_pageview: false`로 **자동 수집을 끕니다.**
2. **`PostHogRouteCapture`**가 `pathname` / `search` / **`useLanguage()` UI 로케일**이 바뀔 때마다 `capturePosthogRoutePageview`를 호출합니다.
3. **`getPosthogPageEventName(pathname, uiLocale)`**으로 **이벤트 이름**을 정하고, 매칭되지 않으면 **아무 것도 보내지 않습니다** (화이트리스트).
4. `posthog.capture(이벤트명, { $current_url })` — 이벤트명은 **`page_{base}_en`**, **`page_{base}_kr`**, **`page_{base}_ja`** 형식 (`routePageEventName.ts`).

## 경로·언어

- **정의**는 `src/lib/analytics/posthog/routePageEventName.ts`의 `ROUTE_BASE_RULES`를 참고하세요.
- **상세한 규칙**은 `src/lib/analytics/posthog/README.md`에 적어 두었습니다.

## 환경 변수

| 변수 | 의미 |
|------|------|
| `NEXT_PUBLIC_POSTHOG_TOKEN` | 프로젝트 API 키 |
| `NEXT_PUBLIC_POSTHOG_HOST` | 없으면 US 기본 호스트 |
| `NEXT_PUBLIC_POSTHOG_ENABLED` | `true` / `false`로 강제; 기본은 production에서만 전송 (`env.ts` 참고) |

## PostHog 대시보드에서

- **이벤트**는 `page_home_kr` 등 **페이지+언어**가 드러나는 이름으로 쌓입니다.
- 기본 “페이지뷰” 집계는 `$pageview`를 기준으로 하는 경우가 있어, **인사이트/퍼널**을 만들 때 위 이벤트들을 직접 선택하거나, **필터**로 묶어 사용합니다.
- `$current_url` 프로퍼티에 **쿼리 스트링까지 포함한 전체 URL**이 들어가므로, URL 기반 분석은 그대로 가능합니다.

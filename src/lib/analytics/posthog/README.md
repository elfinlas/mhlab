# PostHog (클라이언트 라우트)

## 동작 요약

1. **`instrumentation-client`**에서 `posthog.init` — `autocapture: false`, `capture_pageview: false`로 **자동 수집을 끕니다.**
2. **`PostHogRouteCapture`**가 `pathname` / `search` / **`useLanguage()` UI 로케일**이 바뀔 때마다 `capturePosthogRoutePageview`를 호출합니다.
3. **`getPosthogPageEventName(pathname, uiLocale)`**으로 **이벤트 이름**(`page_{base}_en` · `page_{base}_kr` · `page_{base}_ja`)을 정하고, 매칭되지 않으면 **아무 것도 보내지 않습니다** (화이트리스트).
4. `posthog.capture(이벤트명, { $current_url })` — PostHog 이벤트 목록에는 예: `page_home_kr`, `page_patch_notes_list_en` 처럼 보입니다.

## 이벤트명 규칙: `page_{base}_{en|kr|ja}`

- **베이스 키**(`home`, `about`, `patch_notes_detail` …)는 `routePageEventName.ts`의 `ROUTE_BASE_RULES`에서 `match`로 결정됩니다.
- **접미사**
  - **패치노트 URL** `…/patch_notes/ko/…` 또는 `…/patch_notes/en/…`가 있으면: URL에 맞게 **`_kr`**(ko) 또는 **`_en`**(en).
  - **그 밖의 경로**(`/`, `/about`, `/product/…` 제품만 등): **앱 UI 로케일** — `en` → `_en`, `ja` → `_ja`, `ko` → **`_kr`**.

`POSTHOG_PAGE_EVENT_BASES`에 베이스 키만 나열해두었고, 실제 수집 이벤트는 항상 접미사가 붙습니다.

## 환경 변수

| 변수 | 의미 |
|------|------|
| `NEXT_PUBLIC_POSTHOG_TOKEN` | 프로젝트 API 키 |
| `NEXT_PUBLIC_POSTHOG_HOST` | 없으면 US 기본 호스트 |
| `NEXT_PUBLIC_POSTHOG_ENABLED` | `true` / `false`로 강제; 기본은 production에서만 전송 (`env.ts` 참고) |

## 경로 → 베이스 키 (접미사는 위 규칙)

| base | 대표 경로 |
|------|------------|
| `home` | `/` |
| `about` | `/about` |
| `product` | `/product` |
| `product_detail` | `/product/{id}` |
| `patch_notes_entry` | `/product/{id}/patch_notes` |
| `patch_notes_list` | `/product/{id}/patch_notes/{ko\|en}` |
| `patch_notes_detail` | `/product/{id}/patch_notes/{ko\|en}/{slug}` |
| `privacy_myc` | `/support/privacy/myc` |
| `privacy_travel_log` | `/support/privacy/travel_log` |

새 페이지는 **`ROUTE_BASE_RULES`에 `base` + `match`** 를 추가합니다.

## PostHog 대시보드에서

- **이벤트**는 `page_home_kr`, `page_about_en` 등 **언어/경로가 구분된 이름**으로 쌓입니다.
- **인사이트/퍼널**에서 위 이벤트들을 선택하거나, `page_product_detail_*`처럼 패턴으로 보면 됩니다.
- `$current_url`에 쿼리까지 포함한 전체 URL이 들어갑니다.

## 이벤트명 바꾸기

- `base` 문구·`match`만 수정. 접미사 `_en`/`_kr`/`_ja` 로직은 `resolveEventLocaleSuffix` / `appLocaleToSuffix`에서 담당합니다.

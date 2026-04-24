import { normalizeMdxLabels } from '@/components/patch-notes/mdx/normalizeMdxLabels';

/** 패치노트 MDX — 카테고리/기능 한 덩어리 (아이콘 + 제목 + 라벨 칩 + 설명, 선택적 배경 이미지) */
export function PatchNoteCategoryItem({
  icon,
  title,
  label,
  description,
  bgImage,
  overlayOpacity = 0.48,
}: {
  /** 이모지 등 (선택) */
  icon?: string;
  title: string;
  /** 칩으로 나열 — 문자열, `a|b|c`, 또는 배열 */
  label?: string | string[];
  /** 본문 설명 (`bgImage`만 쓸 때는 생략 가능) */
  description?: string;
  /** 배경 이미지 URL (`public` 기준). 없으면 카드(보더) 스타일 */
  bgImage?: string;
  /** 배경 사용 시 검은 오버레이 강도 0~1 */
  overlayOpacity?: number;
}) {
  const labelItems = normalizeMdxLabels(label);
  const descText = description?.trim() ?? '';
  const bgUrl = bgImage?.trim() ?? '';
  const hasBg = bgUrl.length > 0;
  const dim = Math.min(1, Math.max(0, overlayOpacity));

  const chipLight =
    'rounded-lg border border-white/35 bg-white/15 px-2 py-0.5 text-xs font-semibold leading-snug text-white';
  const chipFlat =
    'rounded-lg border border-indigo-200/80 bg-indigo-50 px-2 py-0.5 text-xs font-semibold text-indigo-800 dark:border-indigo-500/35 dark:bg-indigo-950/50 dark:text-indigo-200';

  const body = (
    <div className='flex gap-3 md:gap-4'>
      {icon ? (
        <div
          className={
            hasBg
              ? 'flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/30 bg-white/15 text-2xl leading-none text-white'
              : 'flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-2xl leading-none dark:bg-slate-800/90'
          }
          aria-hidden
        >
          {icon}
        </div>
      ) : null}
      <div className='min-w-0 flex-1'>
        <div className='flex flex-wrap items-baseline gap-x-2 gap-y-1'>
          <h3
            className={
              hasBg
                ? 'text-lg font-semibold tracking-tight text-white'
                : 'text-lg font-semibold tracking-tight text-slate-900 dark:text-white'
            }
          >
            {title}
          </h3>
          {labelItems.length > 0 ? (
            <ul className='flex list-none flex-wrap gap-1.5 p-0'>
              {labelItems.map((text, i) => (
                <li
                  key={`${i}-${text}`}
                  className={
                    hasBg
                      ? `max-w-full break-words ${chipLight}`
                      : `max-w-full break-words ${chipFlat}`
                  }
                >
                  {text}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        {descText ? (
          <p
            className={
              hasBg
                ? 'mt-2 text-sm leading-relaxed text-white/90'
                : 'mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400'
            }
          >
            {descText}
          </p>
        ) : null}
      </div>
    </div>
  );

  if (!hasBg) {
    return (
      <section className='mb-4 rounded-2xl border border-slate-200/90 bg-white/90 px-4 py-4 shadow-md shadow-slate-200/40 dark:border-slate-700/60 dark:bg-slate-900/40 dark:shadow-black/20 md:px-5 md:py-5'>
        {body}
      </section>
    );
  }

  return (
    <section
      className='relative mb-4 min-h-[9rem] overflow-hidden rounded-2xl md:min-h-[10rem]'
      aria-label={title}
    >
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${bgUrl})` }}
        aria-hidden
      />
      <div
        className='absolute inset-0 bg-black'
        style={{ opacity: dim }}
        aria-hidden
      />
      <div className='relative flex min-h-[9rem] flex-col justify-end px-4 pb-4 pt-10 md:min-h-[10rem] md:px-6 md:pb-5 md:pt-12'>
        {body}
      </div>
    </section>
  );
}

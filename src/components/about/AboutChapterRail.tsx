'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { cn } from '@/lib/utils';

type AboutStitchChapterRailProps = {
  /** 관찰할 섹션 id 목록 (순서대로) */
  sectionIds: readonly string[];
  navAriaLabel: string;
  getChapterButtonAriaLabel: (index: number) => string;
};

export default function AboutStitchChapterRail({
  sectionIds,
  navAriaLabel,
  getChapterButtonAriaLabel,
}: AboutStitchChapterRailProps) {
  const [activeId, setActiveId] = useState<string>(() => sectionIds[0] ?? '');

  const idsKey = useMemo(() => sectionIds.join(','), [sectionIds]);

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const updateActive = () => {
      const vh = window.innerHeight;
      const vw = window.innerWidth;
      const lastId = sectionIds[sectionIds.length - 1]!;
      const idSet = new Set(sectionIds);

      /* 오른쪽 레일·고정 UI를 피해 화면 안쪽에서 “지금 읽는 줄” 근처 노드 탐색 */
      const probeX = Math.min(vw * 0.38, vw - 120);
      const probeY = vh * 0.34;
      const topEl = document.elementFromPoint(probeX, probeY);
      if (topEl) {
        let node: Element | null = topEl;
        for (let d = 0; d < 28 && node; d++) {
          if (node instanceof HTMLElement && node.id && idSet.has(node.id)) {
            const picked = node.id;
            setActiveId((prev) => (prev === picked ? prev : picked));
            return;
          }
          node = node.parentElement;
        }
      }

      const scrollBottom = window.scrollY + vh;
      const docHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
      );
      const endSlack = Math.max(96, vh * 0.08);
      if (scrollBottom >= docHeight - endSlack) {
        setActiveId((prev) => (prev === lastId ? prev : lastId));
        return;
      }

      const markerY = vh * 0.32;
      const lastEl = document.getElementById(lastId);
      if (lastEl) {
        const r = lastEl.getBoundingClientRect();
        /* 읽기 밴드(대략 상단~중간)와 마지막 섹션이 겹치면 08 — 긴 07 직후 top>marker 인 경우 대비 */
        const bandTop = vh * 0.18;
        const bandBot = vh * 0.58;
        if (r.bottom > bandTop && r.top < bandBot) {
          setActiveId((prev) => (prev === lastId ? prev : lastId));
          return;
        }
      }

      let current = sectionIds[0]!;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= markerY) current = id;
      }
      setActiveId((prev) => (prev === current ? prev : current));
    };

    let ticking = false;
    const onScrollOrResize = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        updateActive();
      });
    };

    updateActive();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, [idsKey, sectionIds]);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  }, []);

  if (sectionIds.length === 0) return null;

  const activeIndex = Math.max(0, sectionIds.indexOf(activeId));

  return (
    <nav
      aria-label={navAriaLabel}
      className='pointer-events-auto fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 lg:block xl:right-6'
    >
      <ol className='flex flex-col items-center gap-1.5'>
        {sectionIds.map((id, i) => {
          const active = activeId === id;
          const segmentDone = activeIndex >= i;
          return (
            <li key={id} className='flex flex-col items-center'>
              {i > 0 && (
                <div
                  className={cn(
                    'mb-1.5 h-5 w-px transition-colors duration-500',
                    segmentDone
                      ? 'bg-[#530211]/45 dark:bg-[#eab4b8]/40'
                      : 'bg-[#edeeef] dark:bg-stone-700',
                  )}
                  aria-hidden
                />
              )}
              <button
                type='button'
                onClick={() => scrollTo(id)}
                className={cn(
                  'flex h-8 w-8 items-center justify-center rounded-full border text-[0.65rem] font-bold tabular-nums transition-all duration-300 xl:h-9 xl:w-9',
                  active
                    ? 'scale-110 border-[#530211] bg-[#530211] text-white shadow-md shadow-[#530211]/20 dark:border-[#eab4b8] dark:bg-[#eab4b8] dark:text-[#1a0a0c] dark:shadow-[#eab4b8]/15'
                    : 'border-[#e1e3e4] bg-white/95 text-[#564242] opacity-55 hover:scale-105 hover:opacity-100 dark:border-stone-600 dark:bg-stone-900/95 dark:text-stone-400',
                )}
                aria-current={active ? 'location' : undefined}
                aria-label={getChapterButtonAriaLabel(i)}
              >
                {String(i + 1).padStart(2, '0')}
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

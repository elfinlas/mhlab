'use client';

import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

type RevealOnViewProps = {
  children: React.ReactNode;
  className?: string;
  /** 스크롤 등장 시 순차 딜레이 (ms) */
  delayMs?: number;
};

export default function RevealOnView({
  children,
  className,
  delayMs = 0,
}: RevealOnViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      /* reduced-motion: 스크롤 애니 없이 즉시 표시 (마운트 후 한 번) */
      // eslint-disable-next-line react-hooks/set-state-in-effect -- prefers-reduced-motion 즉시 노출
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.06, rootMargin: '0px 0px -8% 0px' },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        'about-reveal',
        shown ? 'about-reveal-visible' : 'about-reveal-hidden',
        className,
      )}
      style={{
        transitionDelay: shown ? `${delayMs}ms` : '0ms',
      }}
    >
      {children}
    </div>
  );
}

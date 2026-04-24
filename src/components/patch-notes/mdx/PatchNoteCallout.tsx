import type { ReactNode } from 'react';

/** MDX 본문에서 `<Callout variant="warning">…</Callout>` 등으로 사용 */
export function PatchNoteCallout({
  children,
  variant = 'info',
}: {
  children?: ReactNode;
  variant?: 'info' | 'warning';
}) {
  const styles =
    variant === 'warning'
      ? 'border-amber-200/90 bg-amber-50/90 text-amber-950 dark:border-amber-500/30 dark:bg-amber-950/30 dark:text-amber-100'
      : 'border-indigo-200/90 bg-indigo-50/80 text-slate-800 dark:border-indigo-500/30 dark:bg-indigo-950/40 dark:text-slate-100';
  return (
    <div
      className={`mb-4 rounded-xl border px-4 py-3 text-sm leading-relaxed ${styles}`}
    >
      {children}
    </div>
  );
}

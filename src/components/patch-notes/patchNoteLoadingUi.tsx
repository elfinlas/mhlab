import { cn } from '@/lib/ui/utils';
import type { PatchNoteLocale } from '@/data/patch-notes/types';
import { isPatchNoteLocale } from '@/data/patch-notes/types';

export function patchNoteLoadingLabel(locale: unknown): string {
  if (typeof locale === 'string' && isPatchNoteLocale(locale) && locale === 'en') {
    return 'Loading';
  }
  return '로딩 중';
}

export function PatchNoteLoadingBlock({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex min-h-[50vh] flex-col items-center justify-center gap-8',
        className
      )}
    >
      <div className='flex flex-col items-center gap-3'>
        <div
          className='h-9 w-9 animate-spin rounded-full border-2 border-slate-200 border-t-indigo-600 dark:border-slate-700 dark:border-t-indigo-400'
          aria-hidden
        />
        <p className='text-sm font-medium text-slate-600 dark:text-slate-300'>{label}</p>
      </div>
      <div className='w-full max-w-2xl space-y-3'>
        <div className='h-5 w-2/3 animate-pulse rounded-md bg-slate-200/90 dark:bg-slate-700/80' />
        <div className='h-4 w-full animate-pulse rounded-md bg-slate-100 dark:bg-slate-800' />
        <div className='h-4 w-full animate-pulse rounded-md bg-slate-100 dark:bg-slate-800' />
        <div className='h-4 w-4/5 animate-pulse rounded-md bg-slate-100 dark:bg-slate-800' />
      </div>
    </div>
  );
}

export function PatchNoteFullPageLoadingShell({ label }: { label: string }) {
  return (
    <div
      className='min-h-screen bg-white dark:bg-[oklch(0.145_0_0)]'
      role='status'
      aria-live='polite'
    >
      <div className='mx-auto max-w-3xl px-6 py-10 md:px-8 md:py-14'>
        <PatchNoteLoadingBlock label={label} />
      </div>
    </div>
  );
}

/** 목록에서 행 클릭 직후 — 전 화면 덮는 고정 오버레이 (라우트 `loading` 전에 표시) */
export function PatchNoteNavigateOverlay({ locale }: { locale: PatchNoteLocale }) {
  const label = patchNoteLoadingLabel(locale);
  return (
    <div
      className='fixed inset-0 z-[200] flex bg-white/95 dark:bg-[oklch(0.145_0_0)]/95'
      role='status'
      aria-live='polite'
      aria-busy='true'
    >
      <div className='mx-auto flex w-full max-w-3xl flex-1 items-center justify-center px-6 py-10 md:px-8 md:py-14'>
        <PatchNoteLoadingBlock
          className='min-h-0 w-full'
          label={label}
        />
      </div>
    </div>
  );
}

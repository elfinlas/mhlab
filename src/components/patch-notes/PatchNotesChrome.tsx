import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import type { PatchNoteLocale } from '@/data/patch-notes/types';
import { getPatchNoteDocument } from '@/lib/patch-notes/loadPatchNotes';
import { patchNotesUi } from '@/lib/patch-notes/patchNotesUi';

type PatchNotesChromeProps = {
  productId: string;
  productTitle: string;
  locale: PatchNoteLocale;
  /** 상세 페이지에서만 패치노트 목록 링크 강조용 */
  variant?: 'list' | 'detail';
  detailSlug?: string;
};

function patchNotesBasePath(productId: string, loc: PatchNoteLocale): string {
  return `/product/${productId}/patch_notes/${loc}`;
}

const LANG_NAV_EN = 'English';
const LANG_NAV_KO = '한국어';

const langNavInactiveClass =
  'rounded-md px-2.5 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white';

const langNavActiveClass =
  'rounded-md bg-indigo-600 px-2.5 py-1.5 text-xs font-semibold text-white shadow-sm dark:bg-indigo-500';

export function PatchNotesChrome({
  productId,
  productTitle,
  locale,
  variant = 'list',
  detailSlug,
}: PatchNotesChromeProps) {
  const ui = patchNotesUi(locale);
  const listHref = patchNotesBasePath(productId, locale);
  const productHref = `/product/${productId}`;

  const koEntryHref =
    detailSlug && getPatchNoteDocument(productId, 'ko', detailSlug)
      ? `${patchNotesBasePath(productId, 'ko')}/${detailSlug}`
      : patchNotesBasePath(productId, 'ko');
  const enEntryHref =
    detailSlug && getPatchNoteDocument(productId, 'en', detailSlug)
      ? `${patchNotesBasePath(productId, 'en')}/${detailSlug}`
      : patchNotesBasePath(productId, 'en');

  return (
    <header className='border-b border-slate-200/70 bg-white/70 py-4 backdrop-blur-md dark:border-slate-800/50 dark:bg-slate-950/60'>
      <div className='mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 md:px-8'>
        <div className='flex flex-wrap items-center gap-x-4 gap-y-2 text-sm'>
          <Link
            href='/product'
            className='font-semibold text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
          >
            {ui.chromeServices}
          </Link>
          <span className='hidden text-slate-300 dark:text-slate-600 sm:inline'>
            /
          </span>
          <Link
            href={productHref}
            className='font-semibold text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300'
          >
            ← {productTitle}
          </Link>
          {variant === 'detail' ? (
            <>
              <span className='hidden text-slate-300 dark:text-slate-600 sm:inline'>
                /
              </span>
              <Link
                href={listHref}
                className='font-semibold text-slate-700 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
              >
                {ui.chromePatchNotes}
              </Link>
            </>
          ) : null}
        </div>
        <div className='flex flex-wrap items-center justify-end gap-2 sm:gap-3'>
          <ThemeToggle />
          <nav
            aria-label='Patch notes language: English or 한국어'
            className='flex items-center gap-1 rounded-lg border border-slate-200/90 bg-slate-50/80 p-0.5 dark:border-slate-700/80 dark:bg-slate-900/50'
          >
            <Link
              href={enEntryHref}
              className={
                locale === 'en' ? langNavActiveClass : langNavInactiveClass
              }
              hrefLang='en'
            >
              {LANG_NAV_EN}
            </Link>
            <Link
              href={koEntryHref}
              className={
                locale === 'ko' ? langNavActiveClass : langNavInactiveClass
              }
              hrefLang='ko'
            >
              {LANG_NAV_KO}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

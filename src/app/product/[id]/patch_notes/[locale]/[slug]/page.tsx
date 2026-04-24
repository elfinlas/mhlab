import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import {
  isProductPublished,
  productItemList,
  resolveLocalizedString,
} from '@/data/Product';
import {
  isPatchNoteLocale,
  PATCH_NOTE_LOCALES,
} from '@/data/patch-notes/types';
import { PatchNotesChrome } from '@/components/patch-notes/PatchNotesChrome';
import { PatchNoteDetailArticle } from '@/components/patch-notes/PatchNoteDetailArticle';
import {
  getPatchNoteDocument,
  listPatchNoteSlugsForProduct,
  listProductIdsWithPatchNotes,
} from '@/lib/patch-notes/loadPatchNotes';
import { patchNotesUi } from '@/lib/patch-notes/patchNotesUi';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
});

const backToListLinkClassName =
  'inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-900 dark:border-slate-600 dark:bg-slate-900/50 dark:text-slate-100 dark:hover:border-indigo-500/40 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-100';

export async function generateStaticParams(): Promise<
  { id: string; locale: string; slug: string }[]
> {
  const params: { id: string; locale: string; slug: string }[] = [];
  const dirIds = listProductIdsWithPatchNotes();

  for (const id of dirIds) {
    const project = productItemList.find((p) => p.id === id);
    if (!project || !isProductPublished(project)) continue;
    for (const locale of PATCH_NOTE_LOCALES) {
      for (const slug of listPatchNoteSlugsForProduct(id, locale)) {
        params.push({ id, locale, slug });
      }
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; locale: string; slug: string }>;
}): Promise<Metadata> {
  const { id, locale: localeParam, slug } = await params;
  if (!isPatchNoteLocale(localeParam)) {
    return { title: 'Not Found - MHLab' };
  }
  const locale = localeParam;
  const ui = patchNotesUi(locale);
  const project = productItemList.find((p) => p.id === id);
  const doc = getPatchNoteDocument(id, locale, slug);

  if (!project || !isProductPublished(project) || !doc) {
    return { title: 'Not Found - MHLab' };
  }

  const productTitle = resolveLocalizedString(project.title, locale);
  return {
    title: `${doc.title} — ${ui.detailMetaPatchNotes} - ${productTitle} - MHLab`,
    description:
      locale === 'ko'
        ? `${productTitle} 패치노트: ${doc.title}`
        : `${productTitle} patch notes: ${doc.title}`,
  };
}

export default async function PatchNoteDetailPage({
  params,
}: {
  params: Promise<{ id: string; locale: string; slug: string }>;
}) {
  const { id, locale: localeParam, slug } = await params;
  if (!isPatchNoteLocale(localeParam)) {
    notFound();
  }
  const locale = localeParam;
  const project = productItemList.find((p) => p.id === id);

  if (!project || !isProductPublished(project)) {
    notFound();
  }

  const doc = getPatchNoteDocument(id, locale, slug);
  if (!doc) {
    notFound();
  }

  const productTitle = resolveLocalizedString(project.title, locale);
  const ui = patchNotesUi(locale);

  return (
    <div
      className={`${manrope.className} min-h-screen bg-white text-gray-900 selection:bg-indigo-100 dark:bg-[oklch(0.145_0_0)] dark:text-slate-100 dark:selection:bg-violet-950 dark:selection:text-violet-100`}
    >
      <PatchNotesChrome
        productId={id}
        productTitle={productTitle}
        locale={locale}
        variant='detail'
        detailSlug={slug}
      />
      <main className='mx-auto max-w-3xl px-6 py-10 md:px-8 md:py-14'>
        <div className='mb-8'>
          <Link
            href={`/product/${id}/patch_notes/${locale}`}
            className={backToListLinkClassName}
          >
            {ui.backToList}
          </Link>
        </div>
        <PatchNoteDetailArticle
          doc={doc}
          locale={locale}
        />
        <div className='mt-10 border-t border-slate-200 pt-8 dark:border-slate-700'>
          <Link
            href={`/product/${id}/patch_notes/${locale}`}
            className={backToListLinkClassName}
          >
            {ui.backToList}
          </Link>
        </div>
      </main>
    </div>
  );
}

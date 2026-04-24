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
import { PatchNoteListWithMajorFilter } from '@/components/patch-notes/PatchNoteListWithMajorFilter';
import {
  listPatchNoteSlugsForProduct,
  listPatchNotesForProduct,
  listProductIdsWithPatchNotes,
} from '@/lib/patch-notes/loadPatchNotes';
import { patchNotesUi } from '@/lib/patch-notes/patchNotesUi';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
});

export async function generateStaticParams(): Promise<
  { id: string; locale: string }[]
> {
  const out: { id: string; locale: string }[] = [];
  const dirIds = listProductIdsWithPatchNotes();

  for (const id of dirIds) {
    const project = productItemList.find((p) => p.id === id);
    if (!project || !isProductPublished(project)) continue;
    for (const locale of PATCH_NOTE_LOCALES) {
      if (listPatchNoteSlugsForProduct(id, locale).length > 0) {
        out.push({ id, locale });
      }
    }
  }

  return out;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}): Promise<Metadata> {
  const { id, locale: localeParam } = await params;
  if (!isPatchNoteLocale(localeParam)) {
    return { title: 'Not Found - MHLab' };
  }
  const locale = localeParam;
  const ui = patchNotesUi(locale);
  const project = productItemList.find((p) => p.id === id);
  if (!project || !isProductPublished(project)) {
    return { title: 'Not Found - MHLab' };
  }
  const title = resolveLocalizedString(project.title, locale);
  return {
    title: `${ui.listHeading} — ${title} - MHLab`,
    description:
      locale === 'ko'
        ? `${title} 앱의 업데이트 및 패치노트 목록입니다.`
        : `${title}: app updates and patch notes.`,
  };
}

export default async function PatchNoteListPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id, locale: localeParam } = await params;
  if (!isPatchNoteLocale(localeParam)) {
    notFound();
  }
  const locale = localeParam;
  const project = productItemList.find((p) => p.id === id);

  if (!project || !isProductPublished(project)) {
    notFound();
  }

  const productTitle = resolveLocalizedString(project.title, locale);
  const items = listPatchNotesForProduct(id, locale);
  const ui = patchNotesUi(locale);

  return (
    <div
      className={`${manrope.className} min-h-screen bg-white text-gray-900 selection:bg-indigo-100 dark:bg-[oklch(0.145_0_0)] dark:text-slate-100 dark:selection:bg-violet-950 dark:selection:text-violet-100`}
    >
      <PatchNotesChrome
        productId={id}
        productTitle={productTitle}
        locale={locale}
        variant='list'
      />
      <main className='mx-auto max-w-5xl px-6 py-10 md:px-8 md:py-14'>
        <div className='mb-8'>
          <h1 className='mb-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white'>
            {ui.listHeading}
          </h1>
          <p className='text-slate-600 dark:text-slate-400'>
            <span className='font-semibold text-slate-800 dark:text-slate-200'>
              {productTitle}
            </span>
            {ui.listIntroSuffix}
          </p>
        </div>
        <PatchNoteListWithMajorFilter
          productId={id}
          locale={locale}
          items={items}
        />
      </main>
    </div>
  );
}

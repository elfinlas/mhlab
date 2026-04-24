import { PatchNoteHtmlBody } from '@/components/patch-notes/PatchNoteHtmlBody';
import { PatchNoteMarkdown } from '@/components/patch-notes/PatchNoteMarkdown';
import { PatchNoteMdxBody } from '@/components/patch-notes/PatchNoteMdxBody';
import { PatchNoteTypeBadges } from '@/components/patch-notes/PatchNoteTypeBadges';
import type { PatchNoteDocument, PatchNoteLocale } from '@/data/patch-notes/types';
import { formatPatchNoteDate } from '@/lib/patch-notes/formatPatchNoteDate';
import { patchNotesUi } from '@/lib/patch-notes/patchNotesUi';

type PatchNoteDetailArticleProps = {
  doc: PatchNoteDocument;
  locale: PatchNoteLocale;
};

export async function PatchNoteDetailArticle({
  doc,
  locale,
}: PatchNoteDetailArticleProps) {
  const ui = patchNotesUi(locale);
  const updated = doc.updatedAt ?? doc.createdAt;

  return (
    <article className='rounded-2xl border border-slate-200/90 bg-white/90 px-6 py-8 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/50 md:px-10 md:py-10'>
      <header className='mb-8 border-b border-slate-200 pb-8 dark:border-slate-700'>
        <p className='mb-2 text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400'>
          {ui.detailEyebrow}
        </p>
        <h1 className='text-2xl font-bold tracking-tight text-slate-900 dark:text-white md:text-3xl'>
          {doc.title}
        </h1>
        <dl className='mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600 dark:text-slate-400'>
          <div className='flex items-center gap-2'>
            <dt className='font-medium text-slate-500 dark:text-slate-500'>
              {ui.fieldType}
            </dt>
            <dd>
              <PatchNoteTypeBadges
                types={doc.types}
                locale={locale}
              />
            </dd>
          </div>
          <div className='flex items-center gap-2'>
            <dt className='font-medium text-slate-500 dark:text-slate-500'>
              {ui.fieldCreated}
            </dt>
            <dd>{formatPatchNoteDate(doc.createdAt, locale)}</dd>
          </div>
          <div className='flex items-center gap-2'>
            <dt className='font-medium text-slate-500 dark:text-slate-500'>
              {ui.fieldUpdated}
            </dt>
            <dd>{formatPatchNoteDate(updated, locale)}</dd>
          </div>
        </dl>
      </header>
      {doc.bodyKind === 'html' ? (
        <PatchNoteHtmlBody
          html={doc.body}
          locale={locale}
        />
      ) : doc.bodyKind === 'mdx' ? (
        <PatchNoteMdxBody
          source={doc.body}
          locale={locale}
        />
      ) : (
        <PatchNoteMarkdown
          markdown={doc.body}
          locale={locale}
        />
      )}
    </article>
  );
}

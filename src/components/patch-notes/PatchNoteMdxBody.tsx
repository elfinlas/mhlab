import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import type { PatchNoteLocale } from '@/data/patch-notes/types';
import { getPatchNoteMdxComponents } from '@/components/patch-notes/mdx/patchNoteMdxComponents';

type PatchNoteMdxBodyProps = {
  source: string;
  locale: PatchNoteLocale;
};

export async function PatchNoteMdxBody({ source, locale }: PatchNoteMdxBodyProps) {
  return (
    <article className='patch-note-mdx text-slate-700 dark:text-slate-300'>
      <MDXRemote
        source={source}
        components={getPatchNoteMdxComponents(locale)}
        options={{
          /** 로컬 패치노트만 사용 — `label={[...]}` 등 JSX 속성 표현식 허용 */
          blockJS: false,
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        }}
      />
    </article>
  );
}

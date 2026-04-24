import { PatchNoteHtmlBodyClient } from '@/components/patch-notes/PatchNoteHtmlBodyClient';
import type { PatchNoteLocale } from '@/data/patch-notes/types';
import { sanitizePatchNoteHtml } from '@/lib/patch-notes/sanitizePatchNoteHtml';

type PatchNoteHtmlBodyProps = {
  html: string;
  locale: PatchNoteLocale;
};

export function PatchNoteHtmlBody({ html, locale }: PatchNoteHtmlBodyProps) {
  const clean = sanitizePatchNoteHtml(html);
  return (
    <PatchNoteHtmlBodyClient
      html={clean}
      locale={locale}
    />
  );
}

import { redirect } from 'next/navigation';
import { DEFAULT_PATCH_NOTE_LOCALE } from '@/data/patch-notes/types';

/** 기본 로케일(`DEFAULT_PATCH_NOTE_LOCALE`) 목록으로 보냅니다. */
export default async function PatchNotesRootRedirect({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  redirect(`/product/${id}/patch_notes/${DEFAULT_PATCH_NOTE_LOCALE}`);
}

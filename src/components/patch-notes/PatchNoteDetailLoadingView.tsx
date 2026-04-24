'use client';

import { useParams } from 'next/navigation';
import {
  PatchNoteFullPageLoadingShell,
  patchNoteLoadingLabel,
} from '@/components/patch-notes/patchNoteLoadingUi';

/** App Router `loading.tsx` — RSC 대기 중 */
export function PatchNoteDetailLoadingView() {
  const params = useParams();
  const label = patchNoteLoadingLabel(params?.locale);
  return <PatchNoteFullPageLoadingShell label={label} />;
}

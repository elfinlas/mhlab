/**
 * 패치노트 파일 슬러그(예: `3.0.1`)에서 메이저 버전만 추출합니다.
 * 시맨틱하지 않은 슬러그는 `null`입니다.
 */
export function parseMajorFromPatchNoteSlug(slug: string): number | null {
  const head = slug.split('.')[0] ?? '';
  const n = parseInt(head, 10);
  if (!Number.isFinite(n) || n < 0) return null;
  return n;
}

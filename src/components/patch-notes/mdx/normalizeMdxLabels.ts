/** MDX 컴포넌트 공통 — `label` 문자열·`|` 구분·배열 → 칩용 문자열 배열 */
export function normalizeMdxLabels(label?: string | string[]): string[] {
  if (label == null) return [];
  if (Array.isArray(label)) {
    return label
      .map((s) => (typeof s === 'string' ? s.trim() : ''))
      .filter(Boolean);
  }
  const s = label.trim();
  if (!s) return [];
  if (s.includes('|')) {
    return s
      .split('|')
      .map((p) => p.trim())
      .filter(Boolean);
  }
  return [s];
}

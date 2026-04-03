/** 제품 설명 문자열의 `<b>`를 `<strong>`으로 통일 (dangerouslySetInnerHTML용) */
export function sanitizeProductParagraph(html: string): string {
  return html.replace(/<b>/g, "<strong>").replace(/<\/b>/g, "</strong>")
}

export function formatFeatureOrdinal(index: number): string {
  return String(index + 1).padStart(2, "0")
}

export function formatSlideCounter(current: number, total: number): string {
  return `${String(current + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`
}

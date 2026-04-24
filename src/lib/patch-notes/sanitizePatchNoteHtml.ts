import DOMPurify from 'isomorphic-dompurify';
import { cache } from 'react';

/** 레거시 HTML 번들 등에서 `font-size`만 허용하고 그 외 `style` 속성은 제거 */
const FONT_SIZE_DECL = /^font-size\s*:\s*[\d.]+\s*(px|pt|em|rem|%)\s*$/i;

function keepOnlyFontSizeDeclarations(styleValue: string): string | null {
  const parts = styleValue
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean);
  const kept = parts.filter((p) => FONT_SIZE_DECL.test(p));
  if (kept.length === 0) return null;
  return kept.join('; ');
}

let fontSizeStyleHookRegistered = false;

function registerFontSizeStyleSanitizeHook(): void {
  if (fontSizeStyleHookRegistered) return;
  fontSizeStyleHookRegistered = true;
  DOMPurify.addHook('uponSanitizeAttribute', (_node, data) => {
    if (data.attrName !== 'style') return;
    const next = keepOnlyFontSizeDeclarations(String(data.attrValue ?? ''));
    if (next === null) data.keepAttr = false;
    else data.attrValue = next;
  });
}

function sanitizePatchNoteHtmlImpl(html: string): string {
  registerFontSizeStyleSanitizeHook();
  return DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });
}

/** 동일 HTML에 대한 DOMPurify 중복 비용을 요청·렌더 경계에서 제거 */
export const sanitizePatchNoteHtml = cache(sanitizePatchNoteHtmlImpl);

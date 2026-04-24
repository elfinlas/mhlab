import { normalizeMdxLabels } from '@/components/patch-notes/mdx/normalizeMdxLabels';

type SectionLabelKind = 'new' | 'update' | 'delete';

const LABEL_TO_KIND = new Map<string, SectionLabelKind>([
  ['신규', 'new'],
  ['new', 'new'],
  ['업데이트', 'update'],
  ['update', 'update'],
  ['삭제', 'delete'],
  ['delete', 'delete'],
]);

function resolveSectionLabelKind(text: string): SectionLabelKind | null {
  const t = text.trim();
  if (!t) return null;
  if (LABEL_TO_KIND.has(t)) return LABEL_TO_KIND.get(t)!;
  const lower = t.toLowerCase();
  if (LABEL_TO_KIND.has(lower)) return LABEL_TO_KIND.get(lower)!;
  return null;
}

const KIND_CHIP_CLASS: Record<SectionLabelKind, string> = {
  new: 'border-emerald-300/90 bg-emerald-50 text-emerald-900 dark:border-emerald-500/40 dark:bg-emerald-950/45 dark:text-emerald-100',
  update:
    'border-blue-300/90 bg-blue-50 text-blue-900 dark:border-blue-500/40 dark:bg-blue-950/45 dark:text-blue-100',
  delete:
    'border-red-300/90 bg-red-50 text-red-900 dark:border-red-500/40 dark:bg-red-950/45 dark:text-red-100',
};

const SECTION_CARD_CLASS =
  'mb-5 mt-8 rounded-2xl border border-slate-200/90 bg-white/90 px-4 py-4 shadow-md shadow-slate-200/40 first:mt-0 dark:border-slate-700/60 dark:bg-slate-900/40 dark:shadow-black/20 md:px-5 md:py-5';

/** `## 아이콘 제목 _(태그)_` 패턴용 MDX 섹션 제목 (시맨틱 h2) */
export function PatchNoteSectionHeading({
  title,
  icon,
  label,
}: {
  title: string;
  /** 앞에 붙는 이모지 등 (예: 🏠) */
  icon?: string;
  /**
   * h2 아래 라벨 — `신규|new`, `업데이트|update`, `삭제|delete` 만 표시 (한/영, `|`·배열).
   * 그 외 값은 무시합니다.
   */
  label?: string | string[];
}) {
  const rawItems = normalizeMdxLabels(label);
  const seen = new Set<SectionLabelKind>();
  const labelItems: { kind: SectionLabelKind; text: string }[] = [];
  for (const text of rawItems) {
    const kind = resolveSectionLabelKind(text);
    if (!kind || seen.has(kind)) continue;
    seen.add(kind);
    labelItems.push({ kind, text: text.trim() });
  }

  return (
    <section className={SECTION_CARD_CLASS}>
      <div className='flex gap-3 md:gap-4'>
        {icon ? (
          <div
            className='flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-2xl leading-none dark:bg-slate-800/90'
            aria-hidden
          >
            {icon}
          </div>
        ) : null}
        <div className='min-w-0 flex-1'>
          <h2 className='text-xl font-bold tracking-tight text-slate-900 dark:text-white'>
            {title}
          </h2>
          {labelItems.length > 0 ? (
            <ul className='mt-2 flex list-none flex-wrap gap-2 p-0'>
              {labelItems.map(({ kind, text }, i) => (
                <li
                  key={`${i}-${kind}`}
                  className={`max-w-full break-words rounded-lg border px-2.5 py-1 text-sm font-medium leading-snug ${KIND_CHIP_CLASS[kind]}`}
                >
                  {text}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}

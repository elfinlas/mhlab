import type { PatchNoteLocale } from '@/data/patch-notes/types';

export type PatchNoteWineRegionRow = {
  country: string;
  regions: string;
};

export type PatchNoteWineRegionSection = {
  title: string;
  rows: PatchNoteWineRegionRow[];
};

function trimStr(v: unknown): string {
  return typeof v === 'string' ? v.trim() : '';
}

function normalizeWineRegionSections(raw: unknown): PatchNoteWineRegionSection[] {
  if (!Array.isArray(raw)) return [];
  const out: PatchNoteWineRegionSection[] = [];
  for (const block of raw) {
    if (!block || typeof block !== 'object') continue;
    const b = block as Record<string, unknown>;
    const title = trimStr(b.title);
    if (!title) continue;
    const rowsIn = b.rows;
    const rows: PatchNoteWineRegionRow[] = [];
    if (Array.isArray(rowsIn)) {
      for (const r of rowsIn) {
        if (!r || typeof r !== 'object') continue;
        const row = r as Record<string, unknown>;
        const country = trimStr(row.country);
        const regions = trimStr(row.regions);
        if (!country || !regions) continue;
        rows.push({ country, regions });
      }
    }
    if (rows.length > 0) out.push({ title, rows });
  }
  return out;
}

/** 패치노트 MDX — 국가별 와인 산지·지역을 표로 표시 (`sections`: `{ title, rows: [{ country, regions }] }[]`) */
export function PatchNoteWineRegionAppellationTable({
  sections,
  caption,
  countryColumnHeading,
  regionsColumnHeading,
  locale = 'ko',
}: {
  sections: unknown;
  caption?: string;
  /** 명시하면 `locale` 기본 헤더보다 우선 */
  countryColumnHeading?: string;
  regionsColumnHeading?: string;
  /** MDX 제공자에서 주입 — 미지정 시 한국어 헤더 */
  locale?: PatchNoteLocale;
}) {
  const normalized = normalizeWineRegionSections(sections);

  const isEn = locale === 'en';
  const countryHdr =
    countryColumnHeading?.trim() ??
    (isEn ? 'Country' : '국가 · 지역');
  const regionsHdr =
    regionsColumnHeading?.trim() ??
    (isEn ? 'Regions / appellations' : '세부 산지');

  const th =
    'border border-slate-200 bg-slate-100 px-3 py-2 text-left text-sm font-semibold text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white';
  const td =
    'border border-slate-200 px-3 py-2 align-top text-sm text-slate-700 dark:border-slate-700 dark:text-slate-300';
  const countryCell =
    `${td} w-[10rem] font-medium whitespace-nowrap text-slate-900 dark:text-white md:w-[11rem]`;

  const cap = caption?.trim() ?? '';

  if (normalized.length === 0) return null;

  return (
    <div className='mb-4 overflow-x-auto rounded-xl border border-slate-200/90 bg-white/90 dark:border-slate-700/60 dark:bg-slate-900/40'>
      <div className='p-3 md:p-4'>
        {cap ? (
          <p className='mb-3 text-center text-xs font-semibold tracking-wide text-slate-600 dark:text-slate-400'>
            {cap}
          </p>
        ) : null}
        <table className='w-full min-w-[280px] border-collapse text-left'>
          <thead>
            <tr>
              <th
                scope='col'
                className={th}
              >
                {countryHdr}
              </th>
              <th
                scope='col'
                className={th}
              >
                {regionsHdr}
              </th>
            </tr>
          </thead>
          {normalized.map((block) => (
            <tbody key={block.title}>
              <tr className='bg-indigo-50/90 dark:bg-indigo-950/45'>
                <th
                  colSpan={2}
                  scope='colgroup'
                  className='border border-slate-200 px-3 py-2 text-left text-sm font-bold text-indigo-900 dark:border-slate-700 dark:text-indigo-100'
                >
                  {block.title}
                </th>
              </tr>
              {block.rows.map((row) => (
                <tr key={`${block.title}-${row.country}`}>
                  <th
                    scope='row'
                    className={countryCell}
                  >
                    {row.country}
                  </th>
                  <td className={`${td} leading-relaxed`}>{row.regions}</td>
                </tr>
              ))}
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

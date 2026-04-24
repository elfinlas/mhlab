/**
 * `public/patch-notes/{productId}/{locale}/notes-index.json` 생성.
 * 목록 페이지는 이 파일만 읽어 슬러그당 전체 MD/MDX/HTML을 열지 않습니다.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { PATCH_NOTE_LOCALES } from '../src/data/patch-notes/types';
import {
  listPatchNoteSlugsForProduct,
  listPatchNotesForProductFromDisk,
  listProductIdsWithPatchNotes,
} from '../src/lib/patch-notes/loadPatchNotes';
import { patchNoteListIndexFilePath } from '../src/lib/patch-notes/patchNoteIndex';
import type { PatchNoteListIndexV1 } from '../src/lib/patch-notes/patchNoteIndex';

function main(): void {
  const productIds = listProductIdsWithPatchNotes();
  let written = 0;

  for (const id of productIds) {
    for (const locale of PATCH_NOTE_LOCALES) {
      if (listPatchNoteSlugsForProduct(id, locale).length === 0) continue;
      const items = listPatchNotesForProductFromDisk(id, locale);
      const filePath = patchNoteListIndexFilePath(id, locale);
      mkdirSync(path.dirname(filePath), { recursive: true });
      const payload: PatchNoteListIndexV1 = { version: 1, items };
      writeFileSync(
        filePath,
        `${JSON.stringify(payload, null, 2)}\n`,
        'utf8'
      );
      written += 1;
      console.log(`wrote ${path.relative(process.cwd(), filePath)}`);
    }
  }

  console.log(`patch-note index: ${written} file(s)`);
}

main();

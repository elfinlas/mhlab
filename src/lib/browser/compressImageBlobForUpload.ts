/** 브라우저 전용 — Server Action 1MB 제한 여유를 두고 업로드 전 압축 */

const MAX_SIDE = 1920;
/** multipart 인코딩 여유 포함 */
const TARGET_MAX_BYTES = 850 * 1024;

function extensionForMime(mime: string): string {
  if (mime === 'image/webp') return 'webp';
  if (mime === 'image/jpeg') return 'jpg';
  if (mime === 'image/png') return 'png';
  if (mime === 'image/gif') return 'gif';
  return 'img';
}

async function decodeToBitmap(blob: Blob): Promise<ImageBitmap> {
  try {
    return await createImageBitmap(blob);
  } catch {
    return await new Promise<ImageBitmap>((resolve, reject) => {
      const url = URL.createObjectURL(blob);
      const img = new Image();
      img.onload = () => {
        createImageBitmap(img)
          .then((b) => {
            URL.revokeObjectURL(url);
            resolve(b);
          })
          .catch(reject);
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error('이미지를 불러올 수 없습니다.'));
      };
      img.src = url;
    });
  }
}

async function canvasToBlob(
  canvas: HTMLCanvasElement,
  mime: 'image/webp' | 'image/jpeg',
  quality: number
): Promise<Blob | null> {
  return new Promise((resolve) => {
    canvas.toBlob((b) => resolve(b), mime, quality);
  });
}

/**
 * 큰 이미지는 긴 변 기준으로 축소하고, WebP(실패 시 JPEG)로 품질을 내려가며 TARGET_MAX_BYTES 이하로 맞춥니다.
 * SVG는 그대로 둡니다.
 */
export async function compressImageBlobForUpload(blob: Blob): Promise<{
  blob: Blob;
  filename: string;
}> {
  if (!blob.type.startsWith('image/') || blob.type === 'image/svg+xml') {
    const name =
      blob instanceof File && blob.name
        ? blob.name
        : `upload.${extensionForMime(blob.type || 'image/png')}`;
    return { blob, filename: name };
  }

  const bitmap = await decodeToBitmap(blob);
  const { width: iw, height: ih } = bitmap;

  try {
    if (
      blob.size <= TARGET_MAX_BYTES &&
      Math.max(iw, ih) <= MAX_SIDE
    ) {
      return {
        blob,
        filename:
          blob instanceof File && blob.name
            ? blob.name
            : `upload.${extensionForMime(blob.type)}`,
      };
    }

    const scale = Math.min(1, MAX_SIDE / Math.max(iw, ih));
    const w = Math.max(1, Math.round(iw * scale));
    const h = Math.max(1, Math.round(ih * scale));

    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return {
        blob,
        filename:
          blob instanceof File && blob.name
            ? blob.name
            : `upload.${extensionForMime(blob.type)}`,
      };
    }
    ctx.drawImage(bitmap, 0, 0, w, h);

    const tryEncode = async (
      mime: 'image/webp' | 'image/jpeg',
      startQ: number
    ): Promise<Blob | null> => {
      let q = startQ;
      for (let i = 0; i < 14; i++) {
        const b = await canvasToBlob(canvas, mime, q);
        if (b && b.size <= TARGET_MAX_BYTES) return b;
        q -= 0.07;
        if (q < 0.28) break;
      }
      return null;
    };

    let out =
      (await tryEncode('image/webp', 0.9)) ??
      (await tryEncode('image/jpeg', 0.9)) ??
      (await canvasToBlob(canvas, 'image/jpeg', 0.22));

    if (!out || out.size > TARGET_MAX_BYTES) {
      let cw = w;
      let ch = h;
      for (let pass = 0; pass < 6 && (!out || out.size > TARGET_MAX_BYTES); pass++) {
        cw = Math.max(400, Math.round(cw * 0.72));
        ch = Math.max(400, Math.round(ch * 0.72));
        canvas.width = cw;
        canvas.height = ch;
        ctx.drawImage(bitmap, 0, 0, cw, ch);
        const q = Math.max(0.22, 0.55 - pass * 0.06);
        out = await canvasToBlob(canvas, 'image/jpeg', q);
      }
    }

    if (!out) {
      return {
        blob,
        filename:
          blob instanceof File && blob.name
            ? blob.name
            : `upload.${extensionForMime(blob.type)}`,
      };
    }

    const ext = extensionForMime(out.type);
    return { blob: out, filename: `upload.${ext}` };
  } finally {
    bitmap.close();
  }
}

// Downloads the real photos from the old site over the committed
// placeholders. Run on a machine (or CI runner) with normal internet:
//   npm run fetch-assets
//
// Safety: a download only replaces the existing file if it is a genuine
// JPEG/PNG (magic-byte check) — the old site's host intermittently serves
// HTML block pages with HTTP 200, which once got committed as ".jpg" files.
import { MANIFEST } from './asset-manifest.mjs';
import { writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { setTimeout as sleep } from 'node:timers/promises';

const DEST = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'assets', 'photos');
await mkdir(DEST, { recursive: true });

const HEADERS = {
  'user-agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Safari/537.36',
  accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
  referer: 'https://www.techniconstruction.co.za/',
};

const isRealImage = (buf) =>
  (buf.length > 2048 && buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) || // JPEG
  (buf.length > 2048 && buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47); // PNG

// FETCH_ATTEMPTS=1 makes CI fail fast; default 3 for interactive runs.
const ATTEMPTS = Math.max(1, Number(process.env.FETCH_ATTEMPTS) || 3);

let ok = 0;
const failed = [];
for (const [local, url] of Object.entries(MANIFEST)) {
  let done = false;
  for (let attempt = 1; attempt <= ATTEMPTS && !done; attempt++) {
    try {
      // Hard per-request timeout — the host has been observed holding
      // connections open indefinitely when rate limiting.
      const res = await fetch(url, { headers: HEADERS, signal: AbortSignal.timeout(15_000) });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      if (!isRealImage(buf)) throw new Error(`not an image (${buf.length} B — likely a block page)`);
      await writeFile(join(DEST, local), buf);
      ok++;
      done = true;
      console.log(`ok   ${local}  (${(buf.length / 1024).toFixed(0)} KB)`);
    } catch (e) {
      if (attempt === ATTEMPTS) {
        failed.push(local);
        console.error(`FAIL ${local}  — ${e.message} (existing file left untouched)`);
      } else {
        await sleep(attempt * 15_000);
      }
    }
  }
  await sleep(400); // gentle pacing — bulk pulls have tripped the host's rate limiting
}
console.log(`\n${ok}/${Object.keys(MANIFEST).length} downloaded${failed.length ? `; failed: ${failed.join(', ')}` : ''}`);
if (failed.length) process.exit(1);

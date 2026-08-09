// Downloads the real photos from the old site over the committed
// placeholders. Run once, on a machine with normal internet access,
// before the production build:  npm run fetch-assets
import { MANIFEST } from './asset-manifest.mjs';
import { writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const DEST = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'assets', 'photos');
await mkdir(DEST, { recursive: true });

let ok = 0, failed = [];
for (const [local, url] of Object.entries(MANIFEST)) {
  try {
    const res = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0 (asset mirror for site rebuild)' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 1024) throw new Error(`suspiciously small (${buf.length} B)`);
    await writeFile(join(DEST, local), buf);
    ok++;
    console.log(`ok   ${local}  (${(buf.length / 1024).toFixed(0)} KB)`);
  } catch (e) {
    failed.push(local);
    console.error(`FAIL ${local}  ${url}  — ${e.message}`);
  }
}
console.log(`\n${ok}/${Object.keys(MANIFEST).length} downloaded${failed.length ? `; failed: ${failed.join(', ')}` : ''}`);
if (failed.length) process.exit(1);

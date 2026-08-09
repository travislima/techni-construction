// Generates neutral placeholder images for every manifest entry so the site
// builds before `npm run fetch-assets` has been run. Placeholders are solid
// warm-grey (the design's image-loading colour #E4DED5) at realistic sizes.
import { MANIFEST } from './asset-manifest.mjs';
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const DEST = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'assets', 'photos');
await mkdir(DEST, { recursive: true });

const size = (name) => {
  if (name === 'logo.png') return [270, 270];
  if (name.startsWith('leader-')) return [700, 805];   // 1/1.15 crop
  if (name.startsWith('thumb-')) return [1200, 900];   // 4:3
  return [1600, 1200];                                 // gallery 4:3
};

for (const local of Object.keys(MANIFEST)) {
  const [w, h] = size(local);
  const img = sharp({ create: { width: w, height: h, channels: 3, background: '#E4DED5' } });
  const out = join(DEST, local);
  if (local.endsWith('.png')) await img.png({ compressionLevel: 9 }).toFile(out);
  else await img.jpeg({ quality: 50 }).toFile(out);
  console.log(`placeholder ${local} ${w}x${h}`);
}
console.log('Done. Run `npm run fetch-assets` on a networked machine to replace with real photos.');

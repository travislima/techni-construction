// Emits small review thumbnails of the six hero-image candidates (the set
// the design handoff shortlisted) into design/hero-candidates/ so the hero
// choice can be reviewed without access to the full-size originals.
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, 'src', 'assets', 'photos');
const OUT = join(ROOT, '..', 'design', 'hero-candidates');
await mkdir(OUT, { recursive: true });

const CANDIDATES = [
  'venter-1.jpg',    // House Venter, garden side (current hero)
  'venter-2.jpg',    // House Venter, front elevation
  'thorndale-1.jpg', // Thorndale Lodge, Greater Addo
  'buco-1.jpg',      // BUCO warehouse, Walker Drive
  'southcity-1.jpg', // South City office block
  'nanaga-1.jpg',    // Nanaga fuel station & farm stall
];

for (const f of CANDIDATES) {
  await sharp(join(SRC, f)).resize({ width: 720 }).jpeg({ quality: 70 }).toFile(join(OUT, f));
  console.log('thumbnail', f);
}

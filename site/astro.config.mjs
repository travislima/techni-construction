import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL/BASE_PATH are set by the GitHub Pages workflow so the same build
// works at the domain root in production and under /techni-construction/ on
// github.io staging.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://www.techniconstruction.co.za',
  base: process.env.BASE_PATH ?? '/',
  integrations: [sitemap()],
  build: {
    // The whole design system is ~15 KB of CSS — inlining removes a render-blocking request.
    inlineStylesheets: 'always',
  },
  image: {
    // Placeholder images are tiny; real photos re-encode through sharp at build.
    responsiveStyles: true,
  },
});

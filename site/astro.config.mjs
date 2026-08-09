import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.techniconstruction.co.za',
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

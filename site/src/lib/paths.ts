// Internal links go through href() so the site works both at the root
// (production: techniconstruction.co.za) and under a base path
// (GitHub Pages staging: /techni-construction/).
const raw = import.meta.env.BASE_URL;
const base = raw.endsWith('/') ? raw.slice(0, -1) : raw;

export const href = (path: string): string => `${base}${path}`;

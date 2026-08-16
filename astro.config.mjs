// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // User site (fwdesai.github.io) serves from the root, so `base` stays at
  // its default of '/'. If this ever moves to a project repo, set
  // `base: '/reponame/'` here and re-check every absolute path in the site.
  site: 'https://fwdesai.github.io',

  vite: {
    plugins: [tailwindcss()]
  }
});

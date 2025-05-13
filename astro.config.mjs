// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      // Configure the Tailwind integration with the new PostCSS plugin
      applyBaseStyles: false,
    }),
  ],
});

// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

/**
 * @type {import('astro').AstroUserConfig}
 */
// https://astro.build/config
export default defineConfig({
  // Add experimental options here at the same level as integrations
  experimental: {
    responsiveImages: true,
  },
  integrations: [
    tailwind({
      // Configure the Tailwind integration with the new PostCSS plugin
      applyBaseStyles: false,
    }),
  ],
});

import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  base: '/lrdev.me/',
  site: 'https://lrdev.me',
  integrations: [
	react(),
	tailwind({
	  applyBaseStyles: false,
	}),
	mdx(),
  ],
  markdown: {
	shikiConfig: {
	  theme: 'github-dark-dimmed',
	  themes: {
		light: 'github-light',
		dark: 'github-dark-dimmed',
	  },
	},
  },
});
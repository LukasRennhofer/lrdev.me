import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  base: '/',
  site: 'https://lrdev.me',
  integrations: [
	react(),
	tailwind({
	  applyBaseStyles: false,
	}),
	mdx(),
	sitemap()
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
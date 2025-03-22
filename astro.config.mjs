import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import rehypePrettyCode from 'rehype-pretty-code';
import { siteConfig } from './src/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: siteConfig.site,
  base: 'AIAU_Blog',
  integrations: [tailwind(), sitemap()],
  markdown: {
    rehypePlugins: [
      [rehypePrettyCode, {
        theme: 'github-dark',
        onVisitLine(node) {
          if (node.children.length === 0) {
            node.children = [{type: 'text', value: ' '}];
          }
        },
      }],
    ],
  },
});
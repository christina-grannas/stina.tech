import preprocess from 'svelte-preprocess';
import {mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';

const env = process.env.ENV;

const extensions = ['.svelte', '.md'];
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: extensions,
	preprocess: [
		preprocess({
      preserve: ['module']
    }),
		mdsvex({
			/*layout: {
				article: './src/routes/__layout-article@default.svelte'
			},*/
			extensions: extensions,
      /*rehypePlugins: [
				rehypeExternalLinks, // Adds 'target' and 'rel' to external links
				rehypeSlug, // Adds 'id' attributes to Headings (h1,h2,etc)
				[rehypeAutolinkHeadings, { // Adds hyperlinks to the headings, requires rehypeSlug
					behavior: 'append',
					content: {
						type: 'element',
						tagName: 'span',
						properties: {className:['heading-link']},
						children: [{type: 'text', value: '#'}]
					}
				}]
			]*/
		})
	],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		  }),
		  prerender: {
			  default: true
		  },
		  trailingSlash: 'always',

		// Comment the paths if wants to run in dev mode.
		paths: {
			base: '/stina.tech'
		},
	}
};

export default config;

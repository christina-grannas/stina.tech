import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import {mdsvex } from 'mdsvex';

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
		adapter: adapter()
	}
};

export default config;

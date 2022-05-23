<!-- By using context="module", I declare that this code will run on the server 
and fetch this data before page actually loads -->
<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type { Post } from './index.json';
	import { base } from '$app/paths';
	export const load: Load = async ({ fetch }) => {
		const url = `${base}/blog.json`;
		const res = await fetch(url);

		return {
			props: {
				posts: await res.json()
			}
		};
	};
</script>

<script lang="ts">
	export let posts: Post[];
</script>

<main>
	<h1>Things I've learnt</h1>

	<ul>
		{#each posts as post}
			<li>
				<a href="{base}{post.slug}">{post.title}</a> - {new Date(post.date)
					.toISOString()
					.slice(0, 10)}
			</li>
		{/each}
	</ul>
</main>

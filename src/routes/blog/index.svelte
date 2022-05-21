<!-- By using context="module", I declare that this code will run on the server 
and fetch this data before page actually loads -->
<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type { Post } from '../posts.json';
	export const load: Load = async ({ fetch }) => {
		const url = '/posts.json';
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

<h1>Welcome to my blawg</h1>

<ul>
	{#each posts as post}
		<li><a href={post.slug}>{post.title}</a> - {new Date(post.date).toISOString().slice(0, 10)}</li>
	{/each}
</ul>
<ul>
	<li class="done">Make blog in SvelteKit + md files</li>
	<li class="done">Put in github repo</li>
	<li class="done">Build it somehow</li>
	<li class="done">Host on github pages</li>
	<li>Images?</li>
	<li class="done">Frontmatter</li>
	<li class="done">Listings</li>
	<li>Art part?</li>
</ul>

<style>
	.done {
		text-decoration: line-through;
	}
</style>

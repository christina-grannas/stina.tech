import posts from '../../lib/posts';
export type Post = {
	slug: string;
	title: string;
	date: string;
	tags: string[];
};
export async function get() {
	const body = posts.slice(0, 4);

	return {
		status: 200,
		body: JSON.stringify(body)
	};
}

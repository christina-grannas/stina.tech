export { matchers } from './client-matchers.js';

export const components = [
	() => import("../runtime/components/layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/blog/azure-diagram-template-in-figjam.md"),
	() => import("../../src/routes/blog/index.svelte"),
	() => import("../../src/routes/blog/variadic-tuple-types-in-typescript.md"),
	() => import("../../src/routes/index.svelte")
];

export const dictionary = {
	"": [[0, 5], [1]],
	"blog": [[0, 3], [1]],
	"blog/azure-diagram-template-in-figjam": [[0, 2], [1]],
	"blog/variadic-tuple-types-in-typescript": [[0, 4], [1]]
};
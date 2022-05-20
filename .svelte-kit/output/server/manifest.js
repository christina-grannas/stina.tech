export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-fff11760.js","js":["start-fff11760.js","chunks/index-c3650d4a.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "blog",
				pattern: /^\/blog\/?$/,
				names: [],
				types: [],
				path: "/blog",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "blog/azure-diagram-template-in-figjam",
				pattern: /^\/blog\/azure-diagram-template-in-figjam\/?$/,
				names: [],
				types: [],
				path: "/blog/azure-diagram-template-in-figjam",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "blog/variadic-tuple-types-in-typescript",
				pattern: /^\/blog\/variadic-tuple-types-in-typescript\/?$/,
				names: [],
				types: [],
				path: "/blog/variadic-tuple-types-in-typescript",
				shadow: null,
				a: [0,5],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

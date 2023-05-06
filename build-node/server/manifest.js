const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","headline.png","smui-dark.css","smui.css"]),
	mimeTypes: {".png":"image/png",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.dc595a40.js","app":"_app/immutable/entry/app.55cf6abd.js","imports":["_app/immutable/entry/start.dc595a40.js","_app/immutable/chunks/index.1a09564c.js","_app/immutable/chunks/singletons.2dba8a5c.js","_app/immutable/chunks/index.36402250.js","_app/immutable/entry/app.55cf6abd.js","_app/immutable/chunks/index.1a09564c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-71511a1a.js'),
			() => import('./chunks/1-56091454.js'),
			() => import('./chunks/2-d9a4fbd8.js'),
			() => import('./chunks/3-2d5b7f38.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/auth/redirect",
				pattern: /^\/auth\/redirect\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map

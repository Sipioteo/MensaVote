const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","headline.png","smui-dark.css","smui.css"]),
	mimeTypes: {".png":"image/png",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.663bbc84.js","app":"_app/immutable/entry/app.155b0ed1.js","imports":["_app/immutable/entry/start.663bbc84.js","_app/immutable/chunks/index.1a09564c.js","_app/immutable/chunks/singletons.6ae30fc1.js","_app/immutable/chunks/index.36402250.js","_app/immutable/entry/app.155b0ed1.js","_app/immutable/chunks/index.1a09564c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-71511a1a.js'),
			() => import('./chunks/1-c58bcbaa.js'),
			() => import('./chunks/2-fa246e90.js'),
			() => import('./chunks/3-c5f4660d.js')
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

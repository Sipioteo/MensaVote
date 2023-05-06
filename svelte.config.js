import adapterStatic from '@sveltejs/adapter-static';
import adapterNode from '@sveltejs/adapter-node';
import adapterMulti from '@macfja/svelte-multi-adapter';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapterMulti([
			adapterStatic({ pages: 'build-static', assets: 'build-static', precompress: false, fallback: "index.html" }),
			adapterNode({ out: 'build-node', precompress: false, fallback: "index.html" })
		]),
	}
};

export default config;
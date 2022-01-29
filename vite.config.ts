import { defineConfig } from 'vite';
import plugins from './vite-plugins.config';

// https://vitejs.dev/config/
export default defineConfig({
	cacheDir: 'node_modules/.cache/vite',
	plugins: plugins(true),
	resolve: {
		dedupe: [
			'react',
			'react-dom',
			'react-router-dom',
			'react-hemet-async',
			'@mdx-js/react',
			'storeon',
		],
	},
	build: {
		polyfillModulePreload: false,
		assetsDir: 'static',
		assetsInlineLimit: 512,
		sourcemap: 'hidden',
	},
});

import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import WindiCSS from 'vite-plugin-windicss';
import svgrPlugin from 'vite-plugin-svgr';
import { minifyHtml } from 'vite-plugin-html';
import Icons from 'unplugin-icons/vite';
import { envConfig } from 'vite-plugin-env-config';
import Pages, { ImportMode, ImportModeResolveFn } from 'vite-plugin-pages';
// TODO: https://github.com/JonasKruckenberg/imagetools/blob/main/docs/README.md
// TODO: https://github.com/activeguild/vite-plugin-sass-dts
// TODO: https://github.com/nystudio107/rollup-plugin-critical

import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import { remarkMdxFrontmatter } from 'remark-mdx-frontmatter';

let shown = false;
const importMode: ImportModeResolveFn = (path) => {
	let retVal: ImportMode = 'async';
	if (path.endsWith('/src/routes/[...].tsx')) {
		retVal = 'sync';
	}
	console.log(`${shown ? '' : '\n'}Importing '${path}' ${retVal}hronously`);
	shown = true;
	return retVal;
};

// https://vitejs.dev/config/
export default defineConfig({
	cacheDir: 'node_modules/.cache/vite',
	plugins: [
		tsconfigPaths(),
		react(),
		WindiCSS(),
		Pages({
			extensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
			dirs: 'src/routes',
			syncIndex: false,
			resolver: 'react',
			importMode,
		}),
		mdx({
			remarkPlugins: [
				[remarkGfm, { singleTilde: false }],
				remarkFrontmatter,
				remarkMdxFrontmatter,
			],
		}),
		svgrPlugin(),
		envConfig(),
		Icons({
			compiler: 'jsx',
			jsx: 'react',
		}),
		minifyHtml({
			collapseWhitespace: true,
			removeComments: true,
			decodeEntities: true,
			minifyCSS: true,
			minifyJS: true,
			removeAttributeQuotes: false,
			removeEmptyAttributes: true,
			processConditionalComments: true,
			useShortDoctype: false,
		}),
		//imagetools(),
	],
	resolve: {
		dedupe: ['react', 'react-dom', 'storeon'],
	},
	build: {
		polyfillModulePreload: false,
		assetsDir: 'static',
		assetsInlineLimit: 512,
		sourcemap: 'hidden',
	},
});

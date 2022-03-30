import { defineConfig, type Plugin } from 'vite';

import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import WindiCSS from 'vite-plugin-windicss';
import svgrPlugin from 'vite-plugin-svgr';
import { createHtmlPlugin } from 'vite-plugin-html';
import Icons from 'unplugin-icons/vite';
import { envConfig } from 'vite-plugin-env-config';
import Pages, {
	type ImportMode,
	type ImportModeResolver,
} from 'vite-plugin-pages';
// TODO: https://github.com/JonasKruckenberg/imagetools/blob/main/docs/README.md
import Inspect from 'vite-plugin-inspect';

import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import torchlight from 'remark-torchlight';
import remarkFrontmatter from 'remark-frontmatter';
import { remarkMdxFrontmatter } from 'remark-mdx-frontmatter';

let shown = false;
const importMode: ImportModeResolver = (path) => {
	let retVal: ImportMode = 'async';
	if (path.endsWith('/src/routes/[...].tsx')) {
		retVal = 'sync';
	}
	console.log(`${shown ? '' : '\n'}Importing '${path}' ${retVal}hronously`);
	shown = true;
	return retVal;
};

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
	const isDev =
		/^dev(?:elop(?:ment)?)?$/i.test(process.env.NODE_ENV) ||
		command === 'serve';

	return {
		cacheDir: 'node_modules/.cache/vite',
		plugins: [
			Inspect({ enabled: false }),
			vitePluginAxe(),
			tsconfigPaths(),
			react(),
			WindiCSS(),
			Pages({
				extensions: ['jsx', 'tsx', 'md', 'mdx'],
				dirs: 'src/routes',
				resolver: 'react',
				importMode,
			}),
			mdx({
				remarkPlugins: [
					[remarkGfm, { singleTilde: false }],
					[torchlight, { config: 'torchlight.config.cjs' }],
					remarkFrontmatter,
					remarkMdxFrontmatter,
				],
				providerImportSource: '@mdx-js/react',
				//jsx: true,
				//jsxRuntime: 'automatic',
				//jsxImportSource: 'react',
				development: isDev,
			}),
			svgrPlugin(),
			envConfig(),
			Icons({
				compiler: 'jsx',
				jsx: 'react',
			}),
			createHtmlPlugin({
				minify: {
					collapseWhitespace: true,
					removeComments: true,
					decodeEntities: true,
					minifyCSS: true,
					minifyJS: true,
					removeAttributeQuotes: false,
					removeEmptyAttributes: true,
					processConditionalComments: true,
					useShortDoctype: false,
				},
				entry: undefined,
			}),
		],
		optimizeDeps: {
			include: [
				//* mdx loads `react/jsx-runtime` in dev
				'react/jsx-runtime',
				'react/jsx-dev-runtime',
			],
		},
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
			rollupOptions: {
				output: {
					//* https://tradingstrategy.ai/blog/optimizing-page-load-speed-on-sveltekit#optimizing-css-bundles
					manualChunks: undefined,
				},
			},
			polyfillModulePreload: false,
			assetsDir: 'static',
			assetsInlineLimit: 512,
			sourcemap: 'hidden',
		},
	};
});

function vitePluginAxe(): Plugin {
	let command: 'build' | 'serve';
	return {
		name: 'vite-plugin-axe',
		configResolved: (config) => {
			command = config.command;
		},
		resolveId(id) {
			if (id === '~axe') return '\x00~axe';
			else return null;
		},
		load(id, { ssr }) {
			if (id === '~axe' || id === '\x00~axe') {
				if (command === 'serve' && !ssr) {
					return `import R from'react';import D from'react-dom';import a from'@axe-core/react';await a(R,D,500)`;
				} else {
					return '\n';
				}
			}
			return null;
		},
	};
}

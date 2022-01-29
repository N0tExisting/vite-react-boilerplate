import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import WindiCSS from 'vite-plugin-windicss';
import svgrPlugin from 'vite-plugin-svgr';
import { minifyHtml } from 'vite-plugin-html';
import Icons from 'unplugin-icons/vite';
import { envConfig } from 'vite-plugin-env-config';
import Pages, { ImportMode, ImportModeResolveFn } from 'vite-plugin-pages';
// TODO: https://github.com/patak-dev/vite-plugin-terminal

// TODO: https://github.com/JonasKruckenberg/imagetools/blob/main/docs/README.md
// TODO: https://github.com/activeguild/vite-plugin-sass-dts
// TODO: https://github.com/nystudio107/rollup-plugin-critical

import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import torchlight from 'remark-torchlight';
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

const plugins = (withReact: boolean) => [
	tsconfigPaths({ loose: true }),
	withReact && react(),
	WindiCSS(),
	Pages({
		extensions: ['jsx', 'tsx', 'md', 'mdx'],
		dirs: 'src/routes',
		syncIndex: false,
		resolver: 'react',
		importMode,
	}),
	mdx({
		// TODO: Syntax Highlighting (https://mdxjs.com/guides/syntax-highlighting/) & (https://torchlight.dev/)
		remarkPlugins: [
			[remarkGfm, { singleTilde: false }],
			[torchlight, { config: 'torchlight.config.cjs' }],
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
];

export default plugins;

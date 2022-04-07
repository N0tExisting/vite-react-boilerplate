import { defineConfig } from '@peeky/test';

// See https://peeky.dev/guide/config.html
export default defineConfig({
	match: ['**/tests/**/*.(spec|test).(ts|js|mjs|cjs|jsx|tsx)'],
	ignored: [
		'**/node_modules/**',
		'**/dist/**',
		'**/coverage/**',
		'**/analysis/**',
	],
	watchMatch: ['**/*.(js|ts|tsx|jsx|md|mdx|json)'],
	watchIgnored: [
		'**/node_modules/**',
		'**/dist/**',
		'**/coverage/**',
		'**/analysis/**',
	],
	isolate: true,
	// TODO: Configure coverage once it outputs files
	collectCoverage: true,
	coverageOptions: {
		all: true,
		include: ['**/src/**/*.ts', '**/src/**/*.tsx'],
		excludeNodeModules: true,
		extension: ['.ts', '.tsx', 'js', 'jsx'],
		reporter: ['text', 'text-summary', 'lcov', 'clover', 'cobertura', 'json'],
	},
	runtimeEnv: 'dom',
	reporters: ['console-fancy'],
});

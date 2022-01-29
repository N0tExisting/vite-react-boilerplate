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
	//collectCoverage: true,
	collectCoverageMatch: ['src/**/*.(js|jsx|ts|tsx)'],
	runtimeEnv: 'dom',
	reporters: ['console-fancy'],
});

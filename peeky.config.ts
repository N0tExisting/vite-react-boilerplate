import { defineConfig } from '@peeky/test';

export default defineConfig({
	// Peeky options here...
	match: ['**/tests/**/*.(spec|test).(ts|js|mjs|cjs|jsx|tsx)'],
	ignored: [
		'**/node_modules/**',
		'**/dist/**',
		'**/coverage/**',
		'**/analysis/**',
	],
	watchMatch: ['**/*.(js|ts|tsx|jsx)'],
	watchIgnored: [
		'**/node_modules/**',
		'**/dist/**',
		'**/coverage/**',
		'**/analysis/**',
	],
	collectCoverageMatch: ['src/**/*.(js|jsx|ts|tsx)'],
	runtimeEnv: 'dom',
	reporters: ['console-fancy'],
	//setupFiles: [],
});

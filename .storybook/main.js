// @ts-check
process.env.STORYBOOK = 'true';
const path = require('path');
const vite = require('vite');

module.exports = {
	/**
	 * Configures vite for `storybook-builder-vite`
	 * @see https://github.com/eirslett/storybook-builder-vite/issues/113
	 * @see https://github.com/eirslett/storybook-builder-vite#customize-vite-config
	 * @param {import('vite').UserConfig} config
	 * @param {{ configType: 'PRODUCTION' | 'DEVELOPMENT' }} details - Details about the env
	 * @return {Promise<import('vite').UserConfig>}
	 */
	async viteFinal(config, details) {
		const ViteCommand = details.configType === 'PRODUCTION' ? 'build' : 'serve';
		const ViteMode = details.configType === 'PRODUCTION' ? 'production' : 'dev';
		const configFile = path.join(__dirname, '..', 'vite.config.ts');

		const fileConfig = (
			await vite.loadConfigFromFile(
				{
					command: ViteCommand,
					mode: ViteMode,
				},
				configFile,
			)
		).config;

		fileConfig.plugins = fileConfig.plugins.filter((plugin) => {
			if (Array.isArray(plugin)) {
				// /^vite:react-(?:babel|jsx|refresh)$/
				if (plugin[0] && /^vite:react-/.test(plugin[0].name)) {
					return false;
				}
			} else {
				return true;
			}
		});

		//config = fileConfig;

		return {
			...config,
			...fileConfig,
		};
	},
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'storybook-dark-mode',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
	],
	framework: '@storybook/react',
	core: {
		builder: 'storybook-builder-vite',
	},
};

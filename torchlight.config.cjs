const path = require('path');

module.exports = {
	// Your token from https://torchlight.dev
	token: process.env.TORCHLIGHT_TOKEN,

	// The Torchlight client caches highlighted code blocks. Here you
	// can define which directory you'd like to use. You'll likely
	// want to add this directory to your .gitignore. Set to
	// `false` to use an in-memory cache. You may also
	// provide a full cache implementation.
	cache: path.resolve(__dirname, './node_modules/.cache/torchlight/'),

	// Which theme you want to use. You can find all of the themes at
	// https://torchlight.dev/docs/themes.
	theme: 'dark-plus',

	// The Host of the API.
	host: 'https://api.torchlight.dev',

	// Global options to control block-level settings.
	// https://torchlight.dev/docs/options
	options: {
		// Turn line numbers on or off globally.
		lineNumbers: true,

		// Control the `style` attribute applied to line numbers.
		//lineNumbersStyle: '',

		// Turn on +/- diff indicators.
		diffIndicators: true,

		// If there are any diff indicators for a line, put them
		// in place of the line number to save horizontal space.
		diffIndicatorsInPlaceOfLineNumbers: true,

		// When lines are collapsed, this is the text that will
		// be shown to indicate that they can be expanded.
		//summaryCollapsedIndicator: '...',
	},
};

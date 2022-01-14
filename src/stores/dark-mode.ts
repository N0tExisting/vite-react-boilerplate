import type { StoreonModule } from 'storeon';

export type DarkMode = 'dark' | 'light';

export type DarkModeEvent<T extends string = string> = `darkMode/${T}`;

// TODO: Make this automatically type itself if needed
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DarkModeEventMap = Record<DarkModeEvent, any>;

// Events declaration: map of event names to type of event data
export interface DarkModeEvents extends DarkModeEventMap {
	// `toggle` event which do not goes with any data
	'darkMode/toggle': undefined;
	// `reset` event which reset dark mode to browser default
	'darkMode/reset': undefined;
	// `set` event which goes with the mode as data
	'darkMode/set': DarkMode;
}

// State structure
export interface DarkModeState {
	darkMode: DarkMode;
}

const getInitial = (): DarkMode => {
	if (import.meta.env.SSR) {
		return 'dark';
	} else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
		return 'light';
	} else {
		return 'dark';
	}
};

// TODO: Use React Helmet to toggle the header
export function safelySetMode(mode: DarkMode) {
	if (!import.meta.env.SSR) {
		document.documentElement.classList.toggle('dark', mode !== 'light');
	}
}

const DarkModeStore: StoreonModule<DarkModeState, DarkModeEvents> = (store) => {
	store.on('@init', () => ({ darkMode: getInitial() }));
	store.on('@changed', (_, data) => safelySetMode(data.darkMode));
	// Reducers
	store.on('darkMode/reset', () => ({ darkMode: getInitial() }));
	store.on('darkMode/toggle', ({ darkMode: mode }) => {
		return {
			darkMode: mode === 'light' ? 'dark' : 'light',
		};
	});
	store.on('darkMode/set', (_, event) => ({ darkMode: event }));
};

export default DarkModeStore;

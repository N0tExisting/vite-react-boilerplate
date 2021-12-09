import * as isBrowser from 'is-browser';
import type { StoreonModule } from 'storeon';

export type DarkMode = 'dark' | 'light';

export type DarkModeEvent<T extends string = string> = `darkMode/${T}`;

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
	if (!isBrowser) {
		return 'dark';
	} else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
		return 'light';
	} else {
		return 'dark';
	}
};

function toggleSafe(mode: DarkMode) {
	if (isBrowser) {
		document.documentElement.classList.toggle('dark', mode !== 'light');
	}
}

const DarkModeStore: StoreonModule<DarkModeState, DarkModeEvents> = (store) => {
	store.on('@init', () => {
		const initial = getInitial();
		toggleSafe(initial);
		return { darkMode: initial };
	});
	store.on('@changed', (_, data) => toggleSafe(data.darkMode));
	// Reducers
	store.on('darkMode/reset', () => ({ darkMode: getInitial() }));
	store.on('darkMode/toggle', ({ darkMode: mode }) => {
		const newMode = mode === 'light' ? 'dark' : 'light';
		toggleSafe(newMode);
		return {
			darkMode: newMode,
		};
	});
	store.on('darkMode/set', (_, event) => {
		toggleSafe(event);
		return { darkMode: event };
	});
};

export default DarkModeStore;

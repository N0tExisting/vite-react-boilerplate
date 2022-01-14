import * as isBrowser from 'is-browser';
import { createContext, useContext } from 'react';
import { createStoreon } from 'storeon';
import { customContext } from 'storeon/react';
//import { createHistory } from '@storeon/undo';
import { persistState } from '@storeon/localstorage';
import { crossTab } from '@storeon/crosstab';
import { storeonDevtools } from 'storeon/devtools';
import DarkMode from './darkMode';

//const { module: undo, UNDO, REDO } = createHistory([]);

export const store = createStoreon(
	[DarkMode]
		// eslint-disable-next-line unicorn/prefer-spread -- spread will make this harder to read
		.concat(
			(() => {
				if (!isBrowser) return [];
				const plugs = [
					//undo,
					persistState(['darkMode']),
					crossTab({
						filter: (type) => {
							const name = type.toString();
							return name.startsWith('darkMode/');
						},
					}),
				];
				if (import.meta.env.DEV) plugs.push(storeonDevtools());
				return plugs;
			})(),
		),
);

//export const Undo = () => store.dispatch(UNDO.valueOf());
//export const Redo = () => store.dispatch(REDO.valueOf());

export const StoreContext = createContext(store);
export const StoreProvider = StoreContext.Provider;
export const useStore = () => useContext(StoreContext);

// useStoreon will automatically recognize your storeon store and event types
export const useStoreon = customContext(StoreContext);

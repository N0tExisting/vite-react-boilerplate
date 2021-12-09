import * as isBrowser from 'is-browser';
import { createContext, useContext } from 'react';
import { createStoreon } from 'storeon';
import { customContext } from 'storeon/react';
//import { undoable, UNDO, REDO } from '@storeon/undo/full';
import { persistState } from '@storeon/localstorage';
import { crossTab } from '@storeon/crosstab';
import { storeonDevtools } from 'storeon/devtools';
import DarkMode from './darkMode';

export const store = createStoreon([
	DarkMode,
	persistState(['darkMode']),
	isBrowser &&
		crossTab({
			filter: (type) => {
				const name = type.toString();
				return name.startsWith('darkMode/');
			},
		}),
	import.meta.env.DEV && storeonDevtools(),
]);

export const StoreContext = createContext(store);
export const StoreProvider = StoreContext.Provider;
export const useStore = () => useContext(StoreContext);

// useStoreon will automatically recognize your storeon store and event types
export const useStoreon = customContext(StoreContext);

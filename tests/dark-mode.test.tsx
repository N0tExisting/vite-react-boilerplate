//import DarkMode from '$comp/DarkMode';
import { createStoreon } from 'storeon';
import DarkStore from '$store/dark-mode';

describe('Dark Mode', () => {
	describe('Toggle', () => {
		// TODO: Test Component
	});
	describe('Store', () => {
		let store = createStoreon([DarkStore]);
		beforeEach(() => {
			store = createStoreon([DarkStore]);
		});

		// XXX: window.matchMedia is not in the current env
		it.skip('should match window media preference', () => {
			const isLight = window.matchMedia(
				'(prefers-color-scheme: light)',
			).matches;
			const mode = isLight ? 'light' : 'dark';
			expect(store.get().darkMode === mode).toBe(true);
		});
		it('should be able to toggle', () => {
			const original = store.get().darkMode;
			const next = original === 'light' ? 'dark' : 'light';

			store.dispatch('darkMode/toggle');
			expect(store.get().darkMode).toBe(next);

			store.dispatch('darkMode/toggle');
			expect(store.get().darkMode).toBe(original);
		});
		describe('can be set', () => {
			it('to dark mode', () => {
				store.dispatch('darkMode/set', 'dark');
				expect(store.get().darkMode).toBe('dark');
			});
			it('to light mode', () => {
				store.dispatch('darkMode/set', 'light');
				expect(store.get().darkMode).toBe('light');
			});
		});
	});
});

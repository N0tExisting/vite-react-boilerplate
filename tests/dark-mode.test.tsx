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

/**
 * XXX: I don't know why, but if try only the 'store'
 * it throws an error:
$ peeky run
 PASS  Store › should be able to toggle (2.68ms)                               19:10:19
 PASS  can be set › to dark mode (0.44ms)                                      19:10:19
 PASS  can be set › to light mode (0.62ms)                                     19:10:19
FATAL ERROR: v8::FromJust Maybe value is Nothing.                              19:10:19

┌───────────────────────────────────────────────┐
│ Coverage   0/12 files (0%)   0/419 lines (0%) │
└───────────────────────────────────────────────┘

No coverage in 12 files                                                        19:10:19
  G:/source/Repos/vite-react-boilerplate/src/App.tsx
  G:/source/Repos/vite-react-boilerplate/src/main.tsx
  G:/source/Repos/vite-react-boilerplate/src/Root.tsx
  G:/source/Repos/vite-react-boilerplate/src/components/DarkMode.tsx
  G:/source/Repos/vite-react-boilerplate/src/layouts/Nav.tsx
  ...

                                                                               19:10:19
┌───────────────────────────┐
│ Ran 1 tests files (4.66s) │
└───────────────────────────┘

     Suites 2 / 2                                                              19:10:19
      Tests 3 / 3
  Snapshots 0 / 0
     Errors 0

 1: 00007FF7748330AF v8::internal::CodeObjectRegistry::~CodeObjectRegistry+112511
 2: 00007FF7747C2216 DSA_meth_get_flags+65542
 3: 00007FF7747C30CD node::OnFatalError+301
 4: 00007FF7750DF4C5 v8::V8::FromJustIsNothing+53
 5: 00007FF7746DFA0A v8::internal::wasm::WasmCode::code_comments_offset+22170
 6: 00007FF7746DF8AD v8::internal::wasm::WasmCode::code_comments_offset+21821
 7: 00007FF7746D9C30 v8::internal::OrderedNameDictionary::OrderedNameDictionary+43360
 8: 00007FF774886DB2 uv_pipe_pending_type+4242
 9: 00007FF774891850 uv_loop_init+1024
10: 00007FF774891AFA uv_run+202
11: 00007FF774860C05 node::SpinEventLoop+309
12: 00007FF7746FB4D0 v8::internal::wasm::SignatureMap::Freeze+35776
13: 00007FF7746F6B28 v8::internal::wasm::SignatureMap::Freeze+16920
14: 00007FF7748822DD uv_poll_stop+557
15: 00007FF775693DF0 v8::internal::compiler::RepresentationChanger::Uint32OverflowOperatorFor+146416
16: 00007FFB8BF77034 BaseThreadInitThunk+20
17: 00007FFB8C8E2651 RtlUserThreadStart+33
 */

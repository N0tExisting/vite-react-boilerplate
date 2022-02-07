import { StrictMode, VFC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MDXProvider } from '@mdx-js/react';
import { store, StoreProvider } from '$store';
import ErrorBoundary from '$comp/ErrorBoundary/Boundary';
import App from './App';
import '$style/global.css';
import 'windi.css';

const Root: VFC = () => (
	<StrictMode>
		<ErrorBoundary>
			<StoreProvider value={store}>
				<HelmetProvider>
					<MDXProvider>
						<BrowserRouter>
							<App />
						</BrowserRouter>
					</MDXProvider>
				</HelmetProvider>
			</StoreProvider>
		</ErrorBoundary>
	</StrictMode>
);

export default Root;

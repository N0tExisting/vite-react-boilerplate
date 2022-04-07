import { StrictMode, VFC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MDXProvider } from '@mdx-js/react';
import { ErrorBoundary } from '$comp/ErrorBoundary';
import { store, StoreProvider } from '$store';
import MdxComponents from '$util/mdx';
import App from './App';
import '$style/global.css';
import 'windi.css';

const Root: VFC = () => (
	<StrictMode>
		<ErrorBoundary>
			<StoreProvider value={store}>
				<HelmetProvider>
					<MDXProvider components={MdxComponents}>
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

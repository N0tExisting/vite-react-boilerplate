import { StrictMode, VFC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
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
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</HelmetProvider>
			</StoreProvider>
		</ErrorBoundary>
	</StrictMode>
);

export default Root;

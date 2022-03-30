import { Suspense } from 'react';
import { useRoutes, useLocation } from 'react-router-dom';

import routes from '~react-pages';

import Nav from '$layout/Nav';
import LoadingPage from '$comp/Suspense/Pages';
import ErrorBoundary from '$comp/ErrorBoundary/Boundary';

//import Index from '$route/index';
//import About from '$route/about.mdx';
//import NotFound from '$route/[...]';

function Pages() {
	const loc = useLocation();
	const route = useRoutes(routes, loc);
	// eslint-disable-next-line no-constant-condition
	if (import.meta.env.DEV && false) {
		console.log('Using Custom Route Component');
		return <LoadingPage />;
	}
	return <Suspense fallback={<LoadingPage />}>{route}</Suspense>;
}

function App() {
	return (
		<ErrorBoundary>
			<div
				id="main"
				className="w-screen h-screen transition-colors duration-500 ease-in-out">
				<Nav />
				<div
					id="page"
					className="h-full w-screen bg-gray-100 text-gray-700 dark:(text-gray-100 bg-gray-700)">
					<ErrorBoundary>
						<Pages />
					</ErrorBoundary>
				</div>
			</div>
		</ErrorBoundary>
	);
}

export default App;

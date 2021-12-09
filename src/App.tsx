import { useRoutes, useLocation } from 'react-router-dom';
import Nav from '$layout/Nav';
import ErrorBoundary from '$comp/ErrorBoundary/Boundary';
import routes from '~react-pages';
import Index from '$route/index';
import NotFound from '$route/[...]';

function Routes() {
	const loc = useLocation();
	const route = useRoutes(routes, loc);
	console.log('Routes:', routes, route);
	return route;
}

function App() {
	//const loc = useLocation();
	//const routing = useRoutes(routes, loc);
	//console.log('Routes:', routes, routing);
	// FIXME: useRoutes should return a React component, but doesn't
	return (
		<ErrorBoundary>
			<div
				id="main"
				className="h-full transition-colors duration-500 ease-in-out">
				<Nav />
				<div
					id="page"
					className="h-full bg-gray-100 text-gray-700 dark:(text-gray-100 bg-gray-700)">
					<ErrorBoundary>
						<Routes />
					</ErrorBoundary>
				</div>
			</div>
		</ErrorBoundary>
	);
}

export default App;

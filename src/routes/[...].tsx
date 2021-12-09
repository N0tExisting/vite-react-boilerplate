import type { VFC } from 'react';
import { Link as A } from 'react-router-dom';

const NotFound: VFC = () => {
	return (
		<div className="text-center">
			<main className="flex flex-col items-center justify-center h-screen pb-1 text-xl dark:(text-white bg-gray-700) bg-white text-gray-700 h-min-full">
				<h1 className="text-9xl">404</h1>
				<h2 className="py-2 text-6xl">Page not found</h2>
				<A
					className="text-5xl underline underline-cyan-400 underline-3 hover:underline-6"
					to="/">
					Back Home
				</A>
			</main>
		</div>
	);
};

export default NotFound;

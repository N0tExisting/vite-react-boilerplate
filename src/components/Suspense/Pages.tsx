import type { FC } from 'react';
import Spinner from '~icons/la/spinner';

const LoadingPage: FC = () => {
	return (
		<main className="flex flex-col items-center text-center">
			<h1 className="text-7xl mt-2 mb-5">Loading Page...</h1>
			<Spinner className="w-20 h-20 mt-2 animate-spin animate-duration-1000 animate-ease-[cubic-bezier(0.44,0.31,0.59,0.79)]" />
		</main>
	);
};

export default LoadingPage;

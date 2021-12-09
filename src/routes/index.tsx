import { useState } from 'react';
import logo from '$asset/logo.svg';

function Index() {
	const [count, setCount] = useState(0);

	return (
		<main className="text-center">
			<header className="flex flex-col items-center justify-center h-screen pb-1 text-xl dark:(text-white bg-gray-700) bg-white text-gray-700 h-min-full">
				<img
					src={logo}
					className="pointer-events-none h-[40vmin] animate-spin animate animate-loop animate-duration-[20s] animate-ease-linear"
					alt="React.js Logo"
				/>
				<p>Hello Vite + React!</p>
				<p>
					<button
						type="button"
						className="text-2xl"
						onClick={() => setCount((count) => count + 1)}>
						count is: <code>{count}</code>
					</button>
				</p>
				<p>
					Edit <code>App.tsx</code> and save to test HMR updates.
				</p>
				<p>
					<a
						className="text-cyan-400"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer">
						Learn React
					</a>
					{' | '}
					<a
						className="text-cyan-400"
						href="https://vitejs.dev/guide/features.html"
						target="_blank"
						rel="noopener noreferrer">
						Vite Docs
					</a>
				</p>
			</header>
		</main>
	);
}

export default Index;

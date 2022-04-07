import { Outlet } from 'react-router-dom';

export default function About() {
	return (
		<div className="flex justify-center justify-items-stretch">
			<main className="prose-2xl !m-0 !mt-2 *col-prim">
				<Outlet />
			</main>
		</div>
	);
}

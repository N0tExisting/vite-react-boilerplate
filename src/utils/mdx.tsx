import type { Components } from '@mdx-js/react/lib/index';

const MdxComponents: Components = {
	h1: (p) => (
		<h1 className="text-7xl" {...p}>
			{p.children}
		</h1>
	),
	h2: (p) => (
		<h2 className="text-6xl" {...p}>
			{p.children}
		</h2>
	),
	wrapper: (props) => {
		return (
			<div
				className="mdx prose prose-dark *col-prim dark:prose-light"
				{...props}
			/>
		);
	},
};

export default MdxComponents;

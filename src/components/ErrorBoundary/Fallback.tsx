/* eslint-disable react/prop-types */
import type { VFC } from 'react';
import type { FallbackProps } from './Boundary';

const DefaultFallback: VFC<FallbackProps> = (props) => (
	<section className="h-full text-center">
		<div className="flex flex-col items-center justify-center pb-1 text-xl dark:(text-white bg-gray-700) bg-white text-gray-700 h-min-full p-2">
			<h1 className="mb-3 text-7xl">Something went wrong</h1>
			<button
				// TODO: Focus Outline Looks bad (https://windicss.org/utilities/behaviors.html#outline)
				className="p-3 pt-1 m-2 mt-3 text-4xl bg-red-500 bg-opacity-50 border-red-600 border-solid rounded border-1 focus:outline-solid-fuchsia-600"
				type="reset"
				onClick={props.reset}>
				Try again
			</button>
			<code className="m-2">{props.error.toString()}</code>
			<code className="m-2">
				{JSON.stringify(props.error, undefined, '\t')}
			</code>
		</div>
	</section>
);

export default DefaultFallback;

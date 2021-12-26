import type { MouseEvent as ReactMouseEvent } from 'react';
import { useSpring, animated } from 'react-spring';
import { useStoreon } from '$store';

//* https://jfelix.info/blog/using-react-spring-to-animate-svg-icons-dark-mode-toggle

const properties = {
	sun: {
		r: 9,
		transform: 'rotate(40deg)',
		cx: 12,
		cy: 4,
		opacity: 0,
	},
	moon: {
		r: 5,
		transform: 'rotate(90deg)',
		cx: 30,
		cy: 0,
		opacity: 1,
	},
	springConfig: {
		mass: 4,
		tension: 250,
		friction: 35,
		//duration: 250,
	},
};

const Toggle = () => {
	const store = useStoreon('darkMode');

	const onRightClick = (e: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		store.dispatch('darkMode/reset');
	};
	const onClick = (e: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		store.dispatch('darkMode/toggle');
	};

	const { r, transform, cx, cy, opacity } =
		properties[store.darkMode === 'dark' ? 'sun' : 'moon'];

	const svgContainerProps = useSpring({
		transform,
		config: properties.springConfig,
	});
	const centerCircleProps = useSpring({
		r,
		config: properties.springConfig,
	});
	const maskedCircleProps = useSpring({
		cx,
		cy,
		config: properties.springConfig,
	});
	const linesProps = useSpring({
		opacity,
		config: properties.springConfig,
	});

	return (
		<button
			className="outline-none focus:outline-none hover:outline-none h-[24px] "
			onContextMenu={onRightClick}
			onClick={onClick}
			type="button"
			title={`Enable ${store.darkMode === 'light' ? 'dark' : 'light'} Mode`}>
			<animated.svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				stroke="currentColor"
				className="cursor-pointer text-dark-200 fill-dark-200 dark:(text-light-50 fill-light-50)"
				style={svgContainerProps}>
				<mask id="myMask2">
					<rect x="0" y="0" width="100%" height="100%" fill="white" />
					<animated.circle
						// @ts-expect-error React-Spring stuff
						style={maskedCircleProps}
						r="9"
						fill="black"
					/>
				</mask>

				<animated.circle
					cx="12"
					cy="12"
					className="text-dark-200 fill-dark-200 dark:(text-light-50 fill-light-50)"
					// @ts-expect-error React-Spring stuff
					style={centerCircleProps}
					fill="black"
					mask="url(#myMask2)"
				/>
				<animated.g stroke="currentColor" style={linesProps}>
					<line x1="12" y1="1" x2="12" y2="3" />
					<line x1="12" y1="21" x2="12" y2="23" />
					<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
					<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
					<line x1="1" y1="12" x2="3" y2="12" />
					<line x1="21" y1="12" x2="23" y2="12" />
					<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
					<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
				</animated.g>
			</animated.svg>
		</button>
	);
};

export default Toggle;

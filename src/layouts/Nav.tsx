import styles from '$style/nav.module.css';
import { Link } from 'react-router-dom';
import Toggle from '$comp/DarkMode';

const Nav = () => {
	return (
		<nav
			role="navigation"
			className="w-full max-w-screen contain-content bg-gray-200 text-gray-900 dark:(bg-gray-800 text-gray-200)">
			<ul className="flex flex-row items-center justify-center w-screen contain-content">
				<li className={styles.navItem}>
					<Link className={styles.link} to="/">
						Home
					</Link>
				</li>
				<li className={styles.navItem}>
					<Link className={styles.link} to="/about">
						About
					</Link>
				</li>
				<li className="flex items-center px-4 py-2 text-sm ml-full">
					<Toggle />
				</li>
			</ul>
		</nav>
	);
};

export default Nav;

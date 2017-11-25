// Libs
import React from 'react';
// Components
import NavLink from './NavLink';
// styles
import styles from '../static/css/adoptly.css';

const Header = () => {
		return (
			<header>
			<div className={[styles.header,'header'].join(' ')}>
				<div className={[styles.container,'container'].join(' ')}>
					<nav>
					<ul>
						<li className={[styles.main,'main'].join(' ')}><NavLink to="/" className="home">Adoptly</NavLink></li>
						<li><NavLink className="about" to="/about">About</NavLink></li>
						<li><NavLink className="animals" to="/animals">Animals</NavLink></li>
						<li><NavLink className="blog" to="/blog">Blog</NavLink></li>
						<li><NavLink className="events" to="/events">Events</NavLink></li>
					</ul>
					</nav>
				</div>
			</div>
			</header>
		);
	};

export default Header;

import React, { Component } from 'react';
import { Link } from 'react-router';

import NavLink from './NavLink';

class Header extends Component {
	render() {
		return (
			<header>
				<nav className="">
					<div className="">
						<Link to="/">
							<img className="desktop icon" src={require('./assets/logo-color.png')} alt="logo"></img>
							<img className="mobile icon" src={require('./assets/logo-mobile.png')} alt="logo"></img>
						</Link>
						<ul className="nav navbar-nav navbar-right">
							<li><NavLink to="/about">About</NavLink></li>
							<li><NavLink to="/classes">Classes</NavLink></li>
							<li><NavLink to="/faculty">Faculty</NavLink></li>
						</ul>
					</div>
				</nav>
			</header>
		);
	}
}

export default Header;

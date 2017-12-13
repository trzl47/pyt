// Libs
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// components
import NavLink from '../../NavLink.js';

// css
import '../../../static/css/header_mobile.css';
import '../../../static/css/header_desktop.css';
// import '../../../static/css/header_tablet.css';

class Header extends Component {
	render() {
		return (
			<header>
				<nav>
					<NavLink to="/" className="home">
						<img className="desktop icon" src={require('../../../static/img/logo-color.png')} alt="logo"></img>
						<img className="mobile icon" src={require('../../../static/img/logo-mobile.png')} alt="logo"></img>
					</NavLink>
					<span className='main-nav'>
						<NavLink className="about" to="/about" > About </NavLink>
						<NavLink className="classes" to="/classes" > Classes </NavLink>
						<NavLink className="faculty" to="/faculty" > Faculty </NavLink>
					</span>
				</nav>
			</header>
		);
	}
}

export default Header;

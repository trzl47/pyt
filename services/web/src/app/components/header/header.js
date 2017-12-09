// Libs
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// css
import '../../../static/css/header.css';

class Header extends Component {
	render() {
		return (
			<header>
				<nav>
					<Link to="/" className="home">
						<img className="desktop icon" src={require('../../../static/img/logo-color.png')} alt="logo"></img>
						<img className="mobile icon" src={require('../../../static/img/logo-mobile.png')} alt="logo"></img>
					</Link>
					<span className='main-nav'>
						<Link className="about" to="/about"> About </Link>
						<Link className="classes" to="/classes"> Classes </Link>
						<Link className="faculty" to="/faculty"> Faculty </Link>
					</span>
				</nav>
			</header>
		);
	}
}

export default Header;

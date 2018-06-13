// Libs
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// components
import NavLink from '../../NavLink.js';

// css
import '../../static/css/header.css';

class Header extends Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	checkHeader(pageID) {
		return this.props.page === pageID ? '#f5a623' : '#ffffff';
	}

	render() {
		return (
			<header>
				<nav>
					<NavLink to="/" className="home">
						<img className="desktop icon" src={require('../../static/img/logo-color.png')} alt="logo"></img>
						<img className="mobile icon" src={require('../../static/img/logo-mobile.png')} alt="logo"></img>
					</NavLink>
					<span className='main-nav'>
						<NavLink className="about" to="/about" style={{color: this.checkHeader(1)}}> About </NavLink>
						<NavLink className="classes" to="/classes" style={{color: this.checkHeader(2)}}> Classes </NavLink>
						<NavLink className="faculty" to="/faculty" style={{color: this.checkHeader(3)}}> Faculty </NavLink>
					</span>
				</nav>
			</header>
		);
	}
}

export default Header;

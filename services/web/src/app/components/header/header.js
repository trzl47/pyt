// Libs
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import NavLink from '../../NavLink';

class Header extends Component {
	render() {
		return (
			<header>
				{/* <div className="header container"> */}
					{/* <div className="row"> */}
						<nav> {/* className="navbar navbar-fixed-top" */}
							<NavLink to="/" className="home">
								<img className="desktop icon" src={require('../../../static/img/logo-color.png')} alt="logo"></img>
								<img className="mobile icon" src={require('../../../static/img/logo-mobile.png')} alt="logo"></img>
							</NavLink>
							<ul className="nav navbar-nav navbar-right">
								<li className="main-nav"><NavLink className="about" to="/about">About</NavLink></li>
								<li className="main-nav"><NavLink className="classes" to="/classes">Classes</NavLink></li>
								<li className="main-nav"><NavLink className="faculty" to="/faculty">Faculty</NavLink></li>
							</ul>
						</nav>
					{/* </div> */}
				{/* </div> */}
			</header>
		);
	}
}

export default Header;

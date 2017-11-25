// Libs
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<header>
				{/* <div className="header container"> */}
					{/* <div className="row"> */}
						<nav> {/* className="navbar navbar-fixed-top" */}
							<Link to="/" className="home">
								<img className="desktop icon" src={require('./assets/logo-color.png')} alt="logo"></img>
								<img className="mobile icon" src={require('./assets/logo-mobile.png')} alt="logo"></img>
							</Link>
							<ul className="nav navbar-nav navbar-right">
								<li className="main-nav"><Link className="about" to="/about">About</Link></li>
								<li className="main-nav"><Link className="classes" to="/classes">Classes</Link></li>
								<li className="main-nav"><Link className="faculty" to="/faculty">Faculty</Link></li>
							</ul>
						</nav>
					{/* </div> */}
				{/* </div> */}
			</header>
		);
	}
}

export default Header;

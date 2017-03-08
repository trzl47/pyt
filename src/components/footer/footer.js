import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer container">
				<div className="row media">
					<img className="desktop icon" src={require('./assets/logo-color.png')} alt="logo"></img>
					<a href=""><i className="fa fa-facebook fa-2x"></i><span></span></a>
					<a href=""><i className="fa fa-twitter fa-2x"></i><span></span></a>
					<a href=""><i className="fa fa-instagram fa-2x"></i><span></span></a>
					<span><a href=""> Contact Us </a> | <a href=""> Terms & Conditions </a></span>
				</div>
				<div className="row contact">
					<span> PYT Dance Studio | 14 Bridge STreet, New York, NY 10101 | 212.867.5309 | contact@pytdance.com </span>
					<br />
					<span> All Rights Reserved, &copy; 2016 PYT Dance Studio </span>
				</div>
      </div>
    );
  }
}

export default Footer;

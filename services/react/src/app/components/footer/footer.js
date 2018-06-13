import React, { Component } from 'react';
// css
import '../../static/css/footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
				<div className="media">
					<img className="desktop icon" src={require('../../static/img/logo-color.png')} alt="logo"></img>
					<div className="social-media">
						<a href="/"><i className="fab fa-facebook fa-2x"></i></a>
						<a href="/"><i className="fab fa-twitter fa-2x"></i></a>
						<a href="/"><i className="fab fa-instagram fa-2x"></i></a>
					</div>
					<span><a href="/"> Contact Us </a> | <a href="/"> Terms & Conditions </a></span>
				</div>
				<div className="contact">
					<ul className='info'>
						<dl className='desktop'>
							PYT Dance Studio | 14 Bridge Street, New York, NY 10101 | 212.867.5309 | contact@pytdance.com
						</dl>
						<dl className='mobile'>
							PYT Dance Studi0
						</dl>
						<dl className='mobile'>
							14 Bridge Street, New York, NY 10101
						</dl>
						<dl className='mobile'>
							212.867.5309 | contact@pytdance.com
						</dl>
					</ul>
					<p>
						All Rights Reserved, &copy; 2016 PYT Dance Studio
					</p>
				</div>
      </div>
    );
  }
}

export default Footer;
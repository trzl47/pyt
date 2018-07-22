// Libs
import React, { Component } from 'react';
// css
import '../../static/css/banner.css';

const renderBanner = (content) => {
	if (content.page === 'about') {
		return (
			<div className="about banner">
				<img className='about image' src={require('../../static/img/workout-photo.png')} />
				<div className="about bannerinfo">
					<h1> ABOUT PYT DANCE </h1>
					<p>Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit. Curabitur pharetra placerat felis<br />et dignissim. Morbi nec mi leo. Aliquam eget.</p>
				</div>
			</div>
		);
	}
	else if (content.page === 'classes') {
		return (
			<div className="classes banner">
				<img className='classes image' src={require('../../static/img/classes-photo.png')} />
				<div className="classes bannerinfo">
					<h1> CLASSES </h1>
					<p>Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit. Curabitur pharetra placerat felis<br />et dignissim. Morbi nec mi leo. Aliquam eget.</p>
				</div>
			</div>
		);
	}
	else if (content.page === 'faculty') {
		return (
			<div className="faculty banner">
				<div className="faculty image">
				</div>
				<div className="faculty bannerinfo">
					<h1> FACULTY </h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Curabitur pharetra placerat felis et dignissim. Morbi nec mi<br />leo. Aliquam eget.</p>
				</div>
			</div>
		);
	}
	else {
		return (
			<div>NOTHING RENDERED</div>
		);
	}
};
class Banner extends Component {
  render() {
		const bannerContent = this.props.page;
		return (
			<div>
				{ renderBanner(...bannerContent) }
			</div>
    );
  }
}

export default Banner;

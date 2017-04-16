// Libs
import React, { Component } from 'react';

const renderBanner = (content) => {
	if (content.page === "home") {
		return(
			<div className="home banner container">
				<div className="home attention container">
					<h1> MOVE YOUR BODY & YOUR SOUL </h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et risus nisi. Mauris euismod orci laoreet nisi mollis laoreet. Donec eu rhonecus orci, ut rhoncus nibh. Phasellus efficitur venenatis nibh.</p>
					<button className="home button btn btn-default"> Buy A Course Card </button>
				</div>
			</div>
		);
	}
	else if (content.page === "about") {
		return (
			<div className="about banner container">
				<div className="col-md-6">
				</div>
				<div className="col-md-6">
					<div className="about attention container">
						<h1> ABOUT PYT DANCE </h1>
						<p>Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit. Curabitur pharetra placerat felis<br />et dignissim. Morbi nec mi leo. Aliquam eget.</p>
					</div>
				</div>
			</div>
		);
	}
	else if (content.page === "classes") {
		return (
			<div className="classes banner container">
				<div className="col-md-6">
				</div>
				<div className="col-md-6">
					<div className="classes attention container">
						<h1> CLASSES </h1>
						<p>Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit. Curabitur pharetra placerat felis<br />et dignissim. Morbi nec mi leo. Aliquam eget.</p>
					</div>
				</div>
			</div>
		);
	}
	else if (content.page === "faculty") {
		return (
			<div className="faculty banner container">
				<div className="col-md-4">
				</div>
				<div className="col-md-8">
					<div className="faculty attention container">
						<h1> FACULTY </h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Curabitur pharetra placerat felis et dignissim. Morbi nec mi<br />leo. Aliquam eget.</p>
					</div>
				</div>
			</div>
		);
	}
	else {
		return (
			<div>NOTHING RENDERED</div>
		);
	}
}
class Banner extends Component {
  render() {
		const bannerContent = this.props.page;
		return (
			<div>
				{ console.log(bannerContent) }
				{ renderBanner(...bannerContent) }
			</div>
    );
  }
}

export default Banner;

// Libs
import React, { Component } from 'react';
// css
import '../../static/css/actionbanner.css';

const renderBanner = (content) => {
	if (content.page === 'home') {
		return(
			<div className="actionbanner">
				<div className="home attention">
					<h1> MOVE YOUR BODY & SOUL </h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et risus nisi. Mauris euismod orci laoreet nisi mollis laoreet. Donec eu rhonecus orci, ut rhoncus nibh. Phasellus efficitur venenatis nibh.</p>
					<button className="home button btn"> Buy A Course Card </button>
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
class ActionBanner extends Component {
  render() {
		const bannerContent = this.props.page;
		return (
			<div>
				{ renderBanner(...bannerContent) }
			</div>
    );
  }
}

export default ActionBanner;

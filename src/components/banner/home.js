import React, { Component } from 'react';

class HomeBanner extends Component {
  render() {
    return (
      <section>
				<div className="container">
					<h1 className="home banner"> MOVE YOUR BODY & YOUR<br /> SOUL </h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et risus nisi. Mauris euismod orci laoreet nisi mollis laoreet. Donec eu rhonecus orci, ut rhoncus nibh. Phasellus efficitur venenatis nibh.</p>
					<button className="home button"> Buy A Course Card </button>
				</div>
      </section>
    );
  }
}

export default HomeBanner;

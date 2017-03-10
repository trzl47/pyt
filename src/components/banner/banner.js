import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
				<div className="banner container">
					<div className="home attention container">
						<h1> MOVE YOUR BODY & YOUR SOUL </h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et risus nisi. Mauris euismod orci laoreet nisi mollis laoreet. Donec eu rhonecus orci, ut rhoncus nibh. Phasellus efficitur venenatis nibh.</p>
						<button className="home button btn btn-default"> Buy A Course Card </button>
						{/* <h1 className="about banner"> ABOUT PYT DANCE </h1> */}
						{/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra placerat felis et dignissim. Morbi nec mi leo. Aliquam eget.</p> */}
						{/* <h1 className="classes banner"> CLASSES </h1> */}
						{/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra placerat felis et dignissim. Morbi nec mi leo. Aliquam eget.</p> */}
						{/* <h1 className="faculty banner"> FACULTY </h1> */}
						{/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra placerat felis et dignissim. Morbi nec mi leo. Aliquam eget.</p> */}
					</div>
				</div>
    );
  }
}

// class Banner extends Component {
//   render() {
//     return (
//       <section>
// 				<div className="container">
// 					{ this.props.children }
// 				</div>
//       </section>
//     );
//   }
// }

export default Banner;

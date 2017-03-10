import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <section>
				<div className="container">
					<h1 className="home banner"> MOVE YOUR BODY & YOUR<br /> SOUL </h1>
					<button className="home button"> Buy A Course Card </button>
					<h1 className="about banner"> ABOUT PYT DANCE </h1>
					<h1 className="classes banner"> CLASSES </h1>
					<h1 className="faculty banner"> FACULTY </h1>
				</div>
      </section>
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

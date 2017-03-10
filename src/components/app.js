import React, { Component } from 'react';
import Header from './header/header.js';
import Banner from './banner/banner.js';
import Footer from './footer/footer.js';

class App extends Component {
  render() {
    return (
      <div>
				<Header />
				<Banner />
        { this.props.children }
				<Footer />
      </div>
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div>
// 				<Header />
// 				{ this.props.children }
// 				<Footer />
//       </div>
//     );
//   }
// }

export default App;

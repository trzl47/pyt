import React, { Component } from 'react';

class Supporting extends Component {
  render() {
    return (
      <section>
				<div className="container">
					{ this.props.children }
				</div>
      </section>
    );
  }
}

export default Supporting;

import React, { Component } from 'react';

class Supporting extends Component {
  render() {
    return (
				<div className="supporting container">
					{ this.props.children }
				</div>
    );
  }
}

export default Supporting;

//Libs
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import Header from '../app/Header.js';
import Home from '../app/homepage/Home.js';
import Footer from '../app/homepage/footer/Footer.js';
import NotFound from '../app/NotFound';

class Adoptly extends Component {
  render() {
		return (
			<div>
				<Switch>
					<Route exact path='/' render={({path}) =>
						<div>
							<Header />
							<Home />
							<Footer />
						</div>
					} />
					<Route path='*' component={NotFound} />
				</Switch>
			</div>
    );
  }
}

export default Adoptly;

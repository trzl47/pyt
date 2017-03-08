// Libs
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Components
import App from './components/app.js';
import Supporting from './components/supporting/supporting.js';
import Home from './components/supporting/home/home.js';
import About from './components/supporting/about/about.js';
import Classes from './components/supporting/classes/classes.js';
import Faculty from './components/supporting/faculty/faculty.js';
import NotFound from './components/NotFound';

// Routes
const routes = (
  <Router history={browserHistory}>
		<Route component={App}>
			<Route component={Supporting}>
				<Route path='/' component={Home} />
				<Route path='about' component={About} />
				<Route path='classes' component={Classes} />
				<Route path='faculty' component={Faculty} />
			</Route>
			<Route component={NotFound} />
		</Route>
  </Router>
);

export default routes;

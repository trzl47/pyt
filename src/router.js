// Libs
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Components
import App from './components/app.js';
import Supporting from './components/supporting/supporting.js';
import Home from './components/supporting/home.js';
import About from './components/supporting/about.js';
import Classes from './components/supporting/classes.js';
import Panels from './components/supporting/content/panels/panels.js';
import InfoBars from './components/supporting/content/infobar/infobars.js';
import ClassCards from './components/supporting/content/classcard/classcards.js';
import Faculty from './components/supporting/faculty.js';
import NotFound from './components/NotFound';

// Routes
const routes = (
  <Router history={browserHistory}>
		<Route component={App}>
			<Route component={Supporting}>
				<Route path='/' component={Home} panels={Panels.Home}/>
				<Route path='about' component={About} panels={Panels.About} infobars={InfoBars.About} />
				<Route path='classes' component={Classes} classcards={ClassCards.Classes} />
				<Route path='faculty' component={Faculty} />
			</Route>
			<Route component={NotFound} />
		</Route>
  </Router>
);

export default routes;

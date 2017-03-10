// Libs
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Components
import App from './components/app.js';
// import Banner from './components/banner/banner.js';
// import HomeBanner from './components/banner/home.js';
// import AboutBanner from './components/banner/about.js';
// import ClassesBanner from './components/banner/classes.js';
// import FacultyBanner from './components/banner/faculty.js';
import Supporting from './components/supporting/supporting.js';
import Home from './components/supporting/home.js';
import About from './components/supporting/about.js';
import Classes from './components/supporting/classes.js';
import Faculty from './components/supporting/faculty.js';
import Panels from './components/supporting/content/panels/panels.js';
import InfoBars from './components/supporting/content/infobar/infobars.js';
import ClassCards from './components/supporting/content/classcard/classcards.js';
import Profiles from './components/supporting/content/profilecard/profiles.js';
import NotFound from './components/NotFound';

// Routes
const routes = (
  <Router history={browserHistory}>
		<Route component={App}>
			{/* <Route component={Banner}>
				<Route path='/home' component={HomeBanner} />
				<Route path='about' component={AboutBanner} />
				<Route path='classes' component={ClassesBanner} />
				<Route path='faculty' component={FacultyBanner} />
			</Route> */}
			<Route component={Supporting}>
				<Route path='/' component={Home} panels={Panels.Home}/>
				<Route path='about' component={About} panels={Panels.About} infobars={InfoBars.About} />
				<Route path='classes' component={Classes} classes={ClassCards.Classes} />
				<Route path='faculty' component={Faculty} profiles={Profiles.Faculty} />
			</Route>
			<Route component={NotFound} />
		</Route>
  </Router>
);

export default routes;

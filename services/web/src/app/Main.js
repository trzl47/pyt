//Libs
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import Header from './components/header/header.js';
import Banner from './components/banner/banner.js';
import banners from './components/banner/banners.js';
import Footer from './components/footer/footer.js';
	import Home from './components/supporting/home.js';
	import About from './components/supporting/about.js';
	import Classes from './components/supporting/classes.js';
	import Faculty from './components/supporting/faculty.js';
		import panels from './components/supporting/content/panels/panels.js';
		import infobars from './components/supporting/content/infobar/infobars.js';
		import classCards from './components/supporting/content/classcard/classcards.js';
		import profiles from './components/supporting/content/profilecard/profiles.js';
import NotFound from '../app/NotFound';

class Main extends Component {
  render() {
		return (
			<div>
				<Switch>
					<Route exact path='/' render={({path}) => (
						<div>
							<Header />
							<Banner page={banners.Home} />
							<Home panels={panels.Home}/>
							<Footer />
						</div>
					)} />
					<Route exact path='/about' render={({path}) => (
						<div>
							<Header />
							<Banner page={banners.About} />
							<About panels={panels.About} infobars={infobars.About} />
							<Footer />
						</div>
					)} />
					<Route exact path='/classes' render={({path}) => (
						<div>
							<Header />
							<Banner page={banners.Classes} />
							<Classes classes={classCards.Classes} />
							<Footer />
						</div>
					)} />
					<Route exact path='/faculty' render={({path}) => (
						<div>
							<Header />
							<Banner page={banners.Faculty} />
							<Faculty profiles={profiles.Faculty} />
							<Footer />
						</div>
					)} />
					<Route path='*' component={NotFound} />
				</Switch>
			</div>
    );
  }
}

export default Main;

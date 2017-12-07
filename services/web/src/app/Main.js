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

const HomePage = () => (
	<div>
		<Banner page={banners.Home} />
		<Home panels={panels.Home}/>
	</div>
);

const AboutPage = () => (
	<div>
		<Banner page={banners.About} />
		<About panels={panels.About} infobars={infobars.About} />
	</div>
);

const ClassPage = () => (
	<div>
		<Banner page={banners.Classes} />
		<Classes classes={classCards.Classes} />
	</div>
);

const FacultyPage = () => (
	<div>
		<Banner page={banners.Faculty} />
		<Faculty profiles={profiles.Faculty} />
	</div>
);




class Main extends Component {
  render() {
		return (
			<div>
				<Header />

				<Switch>
					<Route exact path='/' render={({path}) => ( HomePage() )} />
					<Route exact path='/about' render={({path}) => ( AboutPage() )} />
					<Route exact path='/classes' render={({path}) => ( ClassPage() )} />
					<Route exact path='/faculty' render={({path}) => ( FacultyPage() )} />
					<Route path='*' component={NotFound} />
				</Switch>
				<Footer />
			</div>
    );
  }
}

export default Main;

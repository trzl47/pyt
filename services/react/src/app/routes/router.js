// Components
import Main from '../Main.js';
import NotFound from '../NotFound';

export default {
	routes: [
		{
			path: '/',
			component: Main,
			exact: true
		},
		{
			path: '/about',
			component: Main,
			exact: true
		},
		{
			path: '/classes',
			component: Main,
			exact: true
		},
		{
			path: '/faculty',
			component: Main,
			exact: true
		},
		{
		path: '*',
		component: NotFound,
		exact: false
		}
	],
	redirects: [
		{
			// from: '/people',
			// to: '/user',
			// status: 301
		}
	]
};
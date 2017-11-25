// Components
import Adoptly from '../app/Adoptly.js';
import NotFound from '../app/NotFound';

export default {
	routes: [
		{
			path: '/',
			component: Adoptly,
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
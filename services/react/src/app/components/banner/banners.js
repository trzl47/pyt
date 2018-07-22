let count = 0;
const banners = {
	'Home':[
		{
			page: 'home',
			img: require('../../static/img/dancers-photo.png'),
			id: count++
		},
	],
	'About':[
		{
			page: 'about',
			img: require('../../static/img/workout-photo.png'),
			id: count++
		},
	],
	'Classes':[
		{
			page: 'classes',
			img: require('../../static/img/classes-photo.png'),
			id: count++
		},
	],
	'Faculty':[
		{
			page: 'faculty',
			img: require('../../static/img/faculty-photo.png'),
			id: count++
		},
	],
};

export default banners;

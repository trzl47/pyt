let count = 0;
const banners = {
	"Home":[
		{
			page: 'home',
			img: require('./assets/dancers-photo.png'),
			id: count++
		},
	],
	"About":[
		{
			page: 'about',
			img: require('./assets/workout-photo.png'),
			id: count++
		},
	],
	"Classes":[
		{
			page: 'classes',
			img: require('./assets/classes-photo.png'),
			id: count++
		},
	],
	"Faculty":[
		{
			page: 'faculty',
			img: require('./assets/faculty-photo.png'),
			id: count++
		},
	],
};

export default banners;

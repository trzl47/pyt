let count = 0;
const panels = {
  'Home':[
    {
      title: 'Lorem ipsum dolor sit amet.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a felis ullamcorper, placerat orci eu, lobortis orci. Nullam pretium vehicula congue.',
      subtext:'Read more on the blog',
			img: { backgroundImage: 'url(' + require('../../../../static/img/graffiti-photo.png') + ')' },
			color: { backgroundColor: 'rgba(120,73,225,0.9)' },
      id: count++
    },
		{
      title: 'Lorem ipsum dolor sit amet.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a felis ullamcorper, placerat orci eu, lobortis orci. Nullam pretium vehicula congue.',
      subtext:'Read more on the blog',
			img: { backgroundImage: 'url(' + require('../../../../static/img/fire-photo.png') + ')' },
			color: { backgroundColor: 'rgba(173,74,226,0.9)' },
      id: count++
    },
		{
      title: 'Lorem ipsum dolor sit amet.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a felis ullamcorper, placerat orci eu, lobortis orci. Nullam pretium vehicula congue.',
      subtext:'Read more on the blog',
			img: { backgroundImage: 'url(' + require('../../../../static/img/jump-photo.png') + ')' },
			color: { backgroundColor: 'rgba(120,73,225,0.9)' },
      id: count++
    },
  ],
	'About':[
    {
      title: 'Just beside the Brooklyn Bridge.',
      description: 'PYT Dance Studio\r14 Bridge Street\rNew York, NY 10101\r212.867.5309\rcontact@pytdance.com',
			img: { backgroundImage: 'url(' + require('../../../../static/img/map.jpg') + ')' },
			color: { backgroundColor: 'rgba(120,73,225,0.9)' },
      id: count++
    },
  ],
};

export default panels;

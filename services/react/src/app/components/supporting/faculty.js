import React, { Component } from 'react';
import ProfileCard from './content/profilecard/profilecard.js';
// css
import '../../static/css/faculty-supporting.css';

const renderProfiles = (profiles, length) => {
	const profilecards = profiles.map((profilecard) => {
		return (
			<ProfileCard className={`profile${profilecard.id.toString()}`}
				key={profilecard.id}
				title={profilecard.title}
				img={profilecard.img}
				name={profilecard.name}
				random={profilecard.random} />
		);
	});
	return (
		profilecards
	);
};

class FacultySupporting extends Component {
	render() {
		const profilecardContent = this.props.profiles;
		return (
			<div className="faculty-supporting">
				{ renderProfiles(profilecardContent, profilecardContent.length) }
			</div>
		);
	}
}

	export default FacultySupporting;

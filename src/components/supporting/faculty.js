import React, { Component } from 'react';
import ProfileCard from './content/profilecard/profilecard.js';

const renderProfiles = (profiles, length) => {
	const profilecards = profiles.map((profilecard) => {
		return (
			<div className="col-md-3">
			 <ProfileCard
				title={profilecard.title}
				img={profilecard.img}
				name={profilecard.name}
				random={profilecard.random}
				key={profilecard.id} />
			</div>
		)
	});
	const chunkProfiles = (arr, size) => {
		let rows = [];
		for (let i = 0; i < arr.length; i+=size) {
			rows.push(arr.slice(i,i+size));
		}
		return rows;
	};
	const renderRows = () => {
		return (
			chunkProfiles(profilecards, 3).map((row, index) => {
				return (
					<div className="row" key={index}>
						{ row }
					</div>
				)
			})
		)
	};
	return (
		renderRows()
	);
};

class Faculty extends Component {
	render() {
		const profilecardContent = this.props.route.profiles;
		return (
			<section>
				<div className="faculty supporting container">
					{ renderProfiles(profilecardContent, profilecardContent.length) }
				</div>
			</section>
		);
	}
}

	export default Faculty;

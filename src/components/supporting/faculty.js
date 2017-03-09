import React, { Component } from 'react';
import ProfileCard from './content/profilecard/profilecard.js';

class Faculty extends Component {
	render() {
    let profilecardContent = this.props.route.profiles;
    let profilecards = profilecardContent.map((profilecard) => {
      return <ProfileCard title={profilecard.title}
										img={profilecard.img}
										name={profilecard.name}
                    random={profilecard.random}
                    key={profilecard.id} />
    });
    return (
      <section>
				<div className="faculty supporting container">
					{
						//loop through and add ClassCard components in rows of 3
						//until no more exist somehow?
						<div className="row">
						{/* { */}
							{/* // for (let counter=0; counter<2; counter++) { */}
								{ profilecards }
							{/*  } */}
						{/*  } */}
						</div>
					}
				</div>
      </section>
    );
  }
}

export default Faculty;

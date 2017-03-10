import React from 'react';

const ProfileCard = props => (
    <div className="profilecard">
			<img src={props.img} alt=''></img>
			<img src={require('./assets/johnny.png')} alt='' />
      <h3>{props.name}</h3>
			<p><em>{props.title}</em></p>
      <p>{props.random}</p>
    </div>
);

export default ProfileCard;

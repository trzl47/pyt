import React from 'react';
// css
import '../../../../static/css/profilecard.css';

const ProfileCard = props => (
    <div className="profilecard">
			<img className='photo' src={props.img} alt=''></img>
      <h3 className='name'>{props.name}</h3>
			<p className='title'><em>{props.title}</em></p>
      <p className='quote'>{props.random}</p>
    </div>
);

export default ProfileCard;
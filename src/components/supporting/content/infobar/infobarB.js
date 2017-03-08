import React from 'react';

const InfoBarB = props => (
    <div className="infobarB row">
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
			<img className="infobarA img" src={props.img} alt=''></img>
    </div>
);

export default InfoBarB;

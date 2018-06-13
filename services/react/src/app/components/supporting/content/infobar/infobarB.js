import React from 'react';
// css
import '../../../../static/css/infobarB.css';

const InfoBarB = props => (
		<div className="infobar infobarB">
			<img src={props.img} alt=''></img>
			<div className="description">
				<h3>{props.title}</h3>
				<p>{props.desc}</p>
			</div>
		</div>
);

export default InfoBarB;

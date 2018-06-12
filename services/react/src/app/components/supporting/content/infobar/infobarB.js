import React from 'react';
// css
// import './../../static/css/infobarB_mobile.css';
// import './../../static/css/infobarB_desktop.css';

const InfoBarB = props => (
		<div className="infobar infobarB row">
			<div className="description">
				<h3>{props.title}</h3>
				<p>{props.desc}</p>
			</div>
			<img src={props.img} alt=''></img>
		</div>
);

export default InfoBarB;

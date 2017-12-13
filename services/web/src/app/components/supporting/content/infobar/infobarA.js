import React from 'react';
// css
// import '../../../../../static/css/infobarA_mobile.css';
// import './../../../static/css/infobarA_desktop.css';

const InfoBarA = props => (
		<div className="infobar infobarA row">
			<img src={props.img} alt=''></img>
			<div className="description">
				<h3>{props.title}</h3>
				<p>{props.desc}</p>
			</div>
		</div>
);

export default InfoBarA;

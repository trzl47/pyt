import React from 'react';

const Panel = props => (
    <div className="home panel row" style={props.img}>
			<div className="panel info container" style={props.color}>
	      <h3>{props.title}</h3>
	      <p>{props.desc}</p>
				<a href=""><span>{props.sub}</span></a>
			</div>
    </div>
);

export default Panel;

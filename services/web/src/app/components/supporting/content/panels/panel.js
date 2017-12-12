import React from 'react';

// css
import '../../../../../static/css/panel_mobile.css';
import '../../../../../static/css/panel_desktop.css';

const Panel = props => (
		<div className="panel" style={props.img}>
			<div className="info" style={props.color}>
				<h3>{props.title}</h3>
				<p>{props.desc}</p>
				<a href="/"><span>{props.sub}</span></a>
			</div>
		</div>
);

export default Panel;
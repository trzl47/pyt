import React from 'react';

const Panel = props => (
    <div className="home panel row">
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
			<a href=""><span>{props.sub}</span></a>
    </div>
);

export default Panel;

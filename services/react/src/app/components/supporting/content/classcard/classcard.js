import React from 'react';

const ClassCard = props => (
    <div className="classcard">
      <h3>{props.title}</h3>
			<p><em>{props.weekdays}</em></p>
      <p>{props.weekdaysched}</p>
			<p><em>{props.weekends}</em></p>
			<p>{props.weekendSched}</p>
      <p>{props.desc}</p>
    </div>
);

export default ClassCard;

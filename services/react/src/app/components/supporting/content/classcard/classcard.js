import React from 'react';
// css
import '../../../../static/css/classcard.css';

const ClassCard = props => (
    <div className="classcard">
      <h3>{props.title}</h3>
			<div className='weekdays'>
				<p className='days'><em>{props.weekdays}</em></p>
				<p className='times'>{props.weekdaysched}</p>
			</div>
			<div className='weekends'>
				<p className='days'><em>{props.weekends}</em></p>
				<p className='times'>{props.weekendSched}</p>
			</div>
      <p>{props.desc}</p>
    </div>
);

export default ClassCard;
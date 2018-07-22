import React, { Component } from 'react';
import ClassCard from './content/classcard/classcard.js';

import '../../static/css/classes-supporting.css';

const renderClasses = (classes, length) => {
	const classcards = classes.map((classcard) => {
		return (
			<ClassCard className={`class${classcard.id.toString()}`}
				key={classcard.id}
				title={classcard.title}
				weekdays={classcard.weekdays}
				weekdaysched={classcard.weekdaysched}
				weekends={classcard.weekends}
				weekendSched={classcard.weekendSched}
				desc={classcard.description} />
		);
	});
	return (
		classcards
	);
};

class ClassesSupporting extends Component {
	render() {
		const classcardContent = this.props.classes;
		return (
				<div className="classes-supporting">
					{ renderClasses(classcardContent, classcardContent.length) }
				</div>
		);
	}
}

export default ClassesSupporting;

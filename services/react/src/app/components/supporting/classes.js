import React, { Component } from 'react';
import ClassCard from './content/classcard/classcard.js';

import '../../static/css/classes-supporting.css';

const renderClasses = (classes, length) => {
	const classcards = classes.map((classcard) => {
		return (
			<ClassCard key={classcard.id}
								title={classcard.title}
								weekdays={classcard.weekdays}
								weekdaysched={classcard.weekdaysched}
								weekends={classcard.weekends}
								weekendSched={classcard.weekendSched}
								desc={classcard.description} />
		);
	});
	const chunkClasses = (arr, size) => {
		let rows = [];
		for (let i = 0; i < arr.length; i+=size) {
			rows.push(arr.slice(i,i+size));
		}
		return rows;
	};
	const renderRows = () => {
		return (
			chunkClasses(classcards, 3).map((row, index) => {
				return (
					<div className="row" key={index}>
						{ row }
					</div>
				);
			})
		);
	};
	return (
		renderRows()
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

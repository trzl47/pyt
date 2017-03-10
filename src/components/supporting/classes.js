import React, { Component } from 'react';
import ClassCard from './content/classcard/classcard.js';

const renderClasses = (classes, length) => {
	const classcards = classes.map((classcard) => {
		return (
			<div className="col-md-3">
				<ClassCard title={classcard.title}
											weekdays={classcard.weekdays}
											weekdaysched={classcard.weekdaysched}
											weekends={classcard.weekends}
											weekendSched={classcard.weekendSched}
											desc={classcard.description}
											key={classcard.id} />
			</div>
		)
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
			chunkClasses(classcards, 3).map((row) => {
				return (
					<div className="row">
						{ row }
					</div>
				)
			})
		)
	};
	return (
		renderRows()
	);
};

class Classes extends Component {
	render() {
		const classcardContent = this.props.route.classes;
		return (
			<section>
				<div className="classes supporting container">
					{ renderClasses(classcardContent, classcardContent.length) }
				</div>
			</section>
		);
	}
}

export default Classes;

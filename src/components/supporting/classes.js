import React, { Component } from 'react';
import ClassCard from './content/classcard/classcard.js';

class Classes extends Component {
	render() {
    let classcardContent = this.props.route.classcards;
    let classcards = classcardContent.map((classcard) => {
      return <ClassCard title={classcard.title}
										weekdays={classcard.weekdays}
										weekdaysched={classcard.weekdaysched}
										weekends={classcard.weekends}
										weekendSched={classcard.weekendSched}
                    desc={classcard.description}
                    key={classcard.id} />
    });
    return (
      <section>
				<div className="classes supporting container">
					{
						//loop through and add ClassCard components in rows of 3
						//until no more exist somehow?
						<div className="row">
						{/* { */}
							{/* // for (let counter=0; counter<2; counter++) { */}
								{ classcards }
							{/*  } */}
						{/*  } */}
						</div>
					}
				</div>
      </section>
    );
  }
}

export default Classes;

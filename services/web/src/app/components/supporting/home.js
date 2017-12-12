import React, { Component } from 'react';
import Panel from './content/panels/panel.js';

class HomeSupporting extends Component {
	render() {
		let panelContent = this.props.panels;
		let panels = panelContent.map((panel) => {
			return <Panel title={panel.title}
										desc={panel.description}
										sub={panel.subtext}
										key={panel.id}
										img={panel.img}
										color={panel.color}/>;
		});
		return (
				<div className="supporting home">
					{panels}
				</div>
		);
	}
}

export default HomeSupporting;

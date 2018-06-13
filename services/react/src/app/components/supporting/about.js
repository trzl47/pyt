import React, { Component } from 'react';
import Panel from './content/panels/panel.js';
import InfoBarA from './content/infobar/infobarA.js';
import InfoBarB from './content/infobar/infobarB.js';

class AboutSupporting extends Component {
	render() {
		const panelContent = this.props.panels;
		const panels = panelContent.map((panel) => {
			return <Panel title={panel.title}
										desc={panel.description}
										key={panel.id}
										img={panel.img}
										color={panel.color}/>;
		});
		const infobarContent = this.props.infobars;
		let infobarA = [];
		let infobarB = [];
		infobarContent.forEach(function(obj) {
			obj.id % 2 === 0 ?
				infobarA.push(obj)
				:
				infobarB.push(obj);
		});
		infobarA = infobarA.map((infobar) => {
			return <InfoBarA title={infobar.title}
										desc={infobar.description}
										img={infobar.img}
										key={infobar.id} />;
		});
		infobarB = infobarB.map((infobar) => {
			return <InfoBarB title={infobar.title}
										desc={infobar.description}
										img={infobar.img}
										key={infobar.id} />;
		});
		return (
				<div className="about">
					{ infobarA.concat(infobarB).sort(function(a, b){ return a.key - b.key; }) }
					{ panels }
				</div>
		);
	}
}

export default AboutSupporting;
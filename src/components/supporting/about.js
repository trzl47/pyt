import React, { Component } from 'react';
import Panel from './content/panels/panel.js';
import InfoBarA from './content/infobar/infobarA.js';

class About extends Component {
	render() {
    let panelContent = this.props.route.panels;
    let panels = panelContent.map((panel) => {
      return <Panel title={panel.title}
										desc={panel.description}
                    key={panel.id} />
    });
		let infobarContent = this.props.route.infobars;
    let infobarAs = infobarContent.map((infobarA) => {
      return <InfoBarA title={infobarA.title}
										desc={infobarA.description}
										img={infobarA.img}
                    key={infobarA.id} />
    });
    return (
      <section>
				<div className="about supporting container">
					{ infobarAs }
					{ panels }
				</div>
      </section>
    );
  }
}

export default About;

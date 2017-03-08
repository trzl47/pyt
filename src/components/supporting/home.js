import React, { Component } from 'react';
import Panel from './content/panels/panel.js';

class Home extends Component {
	render() {
    let panelContent = this.props.route.panels;
    let panels = panelContent.map((panel) => {
      return <Panel title={panel.title}
										desc={panel.description}
                    sub={panel.subtext}
                    key={panel.id} />
    });
    return (
      <section>
				<div className="home supporting container">
					{panels}
				</div>
      </section>
    );
  }
}

export default Home;

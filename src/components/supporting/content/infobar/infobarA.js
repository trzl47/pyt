import React from 'react';

const InfoBarA = props => (
    <div className="infobarA row">
			<img className="infobarA img" src={props.img} alt=''></img>
			{/* <img className="infobarA img" src={require('./assets/icn-ballet.png')} alt=''></img> */}
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
);

export default InfoBarA;

import React, { Component } from "react";
import "../../styles/Actor.css";

export default class Actor extends Component {
	render() {
		return (
			<div className='actor'>
				<div className='actor-container'>
					<div className='actor-heading'>Ihre Logopädin bei logo albstadt</div>
					<div className='actor-img'>
						<img src={require("../../images/vivian.png")} />
					</div>
					<div classname='actor-text'>
						<div className='actor-title'>Vivian Bay</div>
						<div className='actor-subtitle'>staatlich-anerkannte Logopädin</div>
					</div>
					<div className='actor-copy'>
						I am inspiring dummy text, here to provide an intro to the website.
						I am inspiring dummy text, here to provide an intro to the website.
						I am inspiring dummy text, here to provide an intro to the website.
					</div>
				</div>
			</div>
		);
	}
}

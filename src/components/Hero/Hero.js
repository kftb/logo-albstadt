import React, { Component } from "react";
import "../../styles/Hero.css";

export default class Hero extends Component {
	render() {
		return (
			<div className='hero'>
				<div class='hero-quote'>
					<div className='hero-quote-title'>logo albstadt</div>
					<div className='hero-quote-subtitle'>
						die logopädische Praxis für Jung und Alt in Albstadt
					</div>
				</div>
			</div>
		);
	}
}

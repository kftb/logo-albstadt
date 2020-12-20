import React, { Component } from "react";
import "../../styles/Hero.css";

export default class Hero extends Component {
	render() {
		return (
			<div className='hero' id='hero'>
				<div className='heroImg'>
					<div className='heroQuote'>
						<div className='heroQuoteTitle'>logo albstadt</div>
						<div className='heroQuoteSubtitle'>
							die logopädische Praxis für Jung und Alt in Albstadt
						</div>
					</div>
				</div>
			</div>
		);
	}
}

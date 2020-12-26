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
							Ihre logopädische Praxis in Albstadt
						</div>
					</div>
				</div>
			</div>
		);
	}
}

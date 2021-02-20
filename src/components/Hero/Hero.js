import React, { Component } from "react";
import "../../styles/Hero.css";

export default class Hero extends Component {
	render() {
		return (
			<div className='hero' id='hero'>
				<div className='heroImg'>
					<div className='heroQuote'>
						<div className='heroQuoteSubtitle'>
							<br></br>
							Neueröffnung am 01. März 2021!
						</div>
						<div className='heroQuoteTitle'>
							<img
								alt='logo albstadt logo'
								className='hero-img-logo'
								src={require("../../images/logoalbstadt_nameonly.svg")}></img>
						</div>
						<div className='heroQuoteSubtitle'>
							Ihre logopädische Praxis in Albstadt
						</div>
					</div>
				</div>
			</div>
		);
	}
}

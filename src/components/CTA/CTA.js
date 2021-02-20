import React, { Component } from "react";
import { Link } from "gatsby";
import "../../styles/CTA.css";
import Obfuscate from "react-obfuscate";

export default class Actor extends Component {
	render() {
		return (
			<div className='cta' id='termin'>
				<div className='cta-heading'>Wir freuen uns auf Ihren Anruf</div>
				<div className='cta-copy'>
					Möchten Sie einen Termin vereinbaren, rufen Sie uns gerne an!
					<br></br>
					<br></br>
					<strong>
						<Obfuscate tel='07432 / 60 58 150' />
					</strong>
					<br></br>
					<br></br>
					Alternativ kontaktieren Sie uns über unser{" "}
					<Link to='/kontakt'>
						<span className='internal-link'>Kontaktformular</span>
					</Link>{" "}
					und wir melden uns umgehend bei Ihnen!
				</div>
			</div>
		);
	}
}

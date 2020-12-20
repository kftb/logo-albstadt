import React, { Component } from "react";
import { Link } from "gatsby";
import "../../styles/CTA.css";
import Obfuscate from "react-obfuscate";

export default class Actor extends Component {
	render() {
		return (
			<div className='cta' id='cta'>
				<div className='cta-heading'>Wir freuen uns auf Ihren Anruf</div>
				<div className='cta-copy'>
					Möchten Sie gerne einen Termin vereinbaren, rufen Sie uns gerne an!
					<br></br>
					<br></br>
					<strong>
						<Obfuscate tel='07432 / 123 456' />
					</strong>
					<br></br>
					<br></br>
					Alternativ kontaktieren Sie uns gerne über unser{" "}
					<Link to='/kontakt'>
						<span className='cta-contact'>Kontaktformular</span>
					</Link>{" "}
					und wir melden uns umgehend bei Ihnen!
				</div>
			</div>
		);
	}
}

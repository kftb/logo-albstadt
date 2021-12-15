import { Link } from "gatsby";
import React, { Component } from "react";
import Obfuscate from "react-obfuscate";
import "../../styles/CTA.css";

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
				<br></br>
					<br></br>
				<div className='cta-copy'>
					
					<strong>
						
					</strong>
					<div className='cta-copy'>
								
							{process.env.GATSBY_SHOW_SPECIALHOURS === 'ja' ? 
							<span>{process.env.GATSBY_SPECIALHOURS}
							<p>Termine nach Vereinbarung</p>
							</span> : 
							<span>
								<p>Unsere Öffnungszeiten sind:</p>
								<p>{process.env.GATSBY_HOURS}</p>
								</span>}
								
							</div>
				</div>

			</div>
		);
	}
}

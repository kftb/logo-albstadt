import React, { Component } from "react";
import Obfuscate from "react-obfuscate";
import "../../styles/Footer.css";

export default class Footer extends Component {
	render() {
		return (
			<div className='footer'>
				<div className='footer-container'>
					<div className='footer-top'>
						<div className='footer-left'>
							<div className='footer-heading'>logo albstadt</div>
							<div className='footer-copy'>Praxis für Logopädie</div>
							<br></br>

							<div className='footer-heading'>Vivian Bay</div>
							<div className='footer-copy'>Staatlich-anerkannte Logopädin</div>
						</div>
						<div className='footer-middle'>
							<div className='footer-heading'>Praxis</div>
							<div className='footer-copy'>
								Talstraße 3<br></br>
								72461 Albstadt
							</div>
							<br></br>

							<div className='footer-heading'>Terminzeiten</div>
							<div className='footer-copy'>
								Mo-Fr.: 08:00 - 18:00 Uhr<br></br>
								Termine nach Vereinbarung
							</div>
						</div>
						<div className='footer-right'>
							<div className='footer-heading'>Kontakt & Termine</div>
							<div className='footer-copy'>
								07432/123456
								<br></br>
								<br></br>
								<Obfuscate email='praxis@logoalbstadt.de' />
								<br />
								Kontaktformular
							</div>
						</div>
					</div>
					<br />
					<hr></hr>
					<div className='footer-bottom'>
						<ul className='footer-link'>
							<li className='navbar-link-item'>Kontakt</li>
							<li className='navbar-link-item'>Impressum</li>
							<li className='navbar-link-item'>Datenschutz</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

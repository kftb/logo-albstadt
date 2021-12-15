import React, { Component } from "react";
import Obfuscate from "react-obfuscate";
import { Link } from "gatsby";


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
							<div className='footer-copy'>Staatlich anerkannte Logopädin</div>
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
								
							{process.env.GATSBY_SHOW_SPECIALHOURS === 'ja' ? 
							<div className='footer-copy'>
								<span>{process.env.GATSBY_SPECIALHOURS}</span>
							</div> : 
							<div className='footer-copy'>
							<span>
								
								{process.env.GATSBY_HOURS}
								</span>
								</div>}
								Termine nach Vereinbarung
							</div>
						</div>
						<div className='footer-right'>
							<div className='footer-heading'>Kontakt & Termine</div>
							<div className='footer-copy'>
								<Obfuscate tel='07432 / 60 58 150' />
								<br></br>
							</div>
							<div className='footer-copy'>
								<br></br>
								<Obfuscate email='praxis@logoalbstadt.de' />
								<br />
								<Link to='/kontakt'>
									<span style={{ color: "white" }}>Kontaktformular</span>
								</Link>{" "}
							</div>
						</div>
					</div>
					<br />
					<hr></hr>
					<div className='footer-bottom'>
						<ul className='footer-link'>
							<li className='footer-link-item'>
								<Link to='/kontakt'>Kontakt</Link>
							</li>
							<li className='footer-link-item'>
								<Link to='/impressum'>Impressum</Link>
							</li>
							<li className='footer-link-item'>
								<Link to='/impressum'>Datenschutz</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

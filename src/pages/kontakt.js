import React, { Component } from "react";

import "../styles/index.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SimpleText from "../components/SimpleText/SimpleText";
import Contactform from "../components/Contactform/Contactform";

export default class Kontaktformular extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<br></br>
				<br></br>
				<br></br>
				<SimpleText
					heading='Kontaktformular'
					copy={[
						<p>
							Schicken Sie uns gerne eine Nachricht über unser Kontaktformular.
							Wenn Sie nach einem Termin suchen, geben Sie uns gerne Ihre
							zeitlichen Präferenzen mit und wir suchen nach einem passenden
							Termin für Sie oder Ihr Kind.{" "}
						</p>,
						<p>
							Ihre Angaben sind selbstverständnlich nicht verpflichtend, helfen
							uns jedoch Ihnen nur passende Termine vorzuschlagen.
						</p>,
					]}
				/>
				<Contactform />
				<Footer />
			</div>
		);
	}
}

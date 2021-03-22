import React, { Component } from "react";
import { Helmet } from "react-helmet";

import "../styles/index.css";

import "bootstrap/dist/css/bootstrap.min.css";

import SimpleText from "../components/SimpleText/SimpleText";
import Contactform from "../components/Contactform/Contactform";
import Layout from "../layouts/Layout";

export default class Kontaktformular extends Component {
	render() {
		return (
			<div>
				<Layout>
					<Helmet
						title='logo albstadt - Kontakt'
						meta={[
							{
								name: "description",
								content:
									"Über unser Kontaktformular können Sie uns direkt eine Nachricht senden. Wir freuen uns über alle Anfragen von Ihnen!",
							},
						]}
					/>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<SimpleText
						heading='Kontaktformular'
						copy={[
							<p>
								Schicken Sie uns gerne eine Nachricht über unser
								Kontaktformular. Wenn Sie nach einem Termin suchen, geben Sie
								uns gerne Ihre zeitlichen Präferenzen mit und wir suchen nach
								einem passenden Termin für Sie oder Ihr Kind.{" "}
							</p>,
							<p>
								Ihre Angaben sind selbstverständnlich nicht verpflichtend,
								helfen uns jedoch Ihnen nur passende Termine vorzuschlagen.
							</p>,
						]}
					/>
					<Contactform />
				</Layout>
			</div>
		);
	}
}

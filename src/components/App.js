import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Hero from "../components/Hero/Hero";
import Quote from "./Quote/Quote";
import Features from "../components/Features/Features";
import Actor from "../components/Actor/Actor";
import CTA from "../components/CTA/CTA";
import Directions from "./Directions/Directions";
import Layout from "../layouts/Layout";
import CookieConsent from "react-cookie-consent";
import { Link } from "gatsby";

export default class App extends Component {
	render() {
		return (
			<div>
				<Layout>
					<Hero />
					<Quote />
					<Features />
					<Actor />
					<CTA />
					<Directions />
					<CookieConsent
						location='bottom'
						style={{
							background: "#ac968f",
						}}
						buttonStyle={{ background: "#796357", color: "white" }}
						buttonText='Akzeptieren'
						declineButtonText='Ablehnen'
						cookieName='gatsby-gdpr-google-analytics'>
						Diese Internetseite verwendet Google Analytics für die Analyse und
						Statistik. Cookies helfen uns, die Benutzerfreundlichkeit unserer
						Website zu verbessern. Durch die weitere Nutzung der Website stimmen
						Sie der Verwendung zu. Weitere Informationen hierzu finden Sie auf
						unserer{" "}
						<Link
							style={{
								color: "#6b2c08",
							}}
							to='/impressum'>
							Datenschutz-Seite
						</Link>
					</CookieConsent>
				</Layout>
			</div>
		);
	}
}

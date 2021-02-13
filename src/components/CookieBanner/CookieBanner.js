import React from "react";
import CookieConsent from "react-cookie-consent";
import { useLocation } from "@reach/router"; // this helps tracking the location
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies";
import { Link } from "gatsby";

const CookieBanner = () => {
	const location = useLocation();

	const handleCookieAccept = () => {
		initializeAndTrack(location);
		console.log("Accepted");
	};
	return (
		<CookieConsent
			location='bottom'
			style={{
				background: "#ac968f",
			}}
			buttonStyle={{ background: "#796357", color: "white" }}
			buttonText='Akzeptieren'
			declineButtonText='Ablehnen'
			onAccept={() => handleCookieAccept()}
			cookieName='gatsby-gdpr-google-analytics'>
			Diese Internetseite verwendet Google Analytics für die Analyse und
			Statistik. Cookies helfen uns, die Benutzerfreundlichkeit unserer Website
			zu verbessern. Durch die weitere Nutzung der Website stimmen Sie der
			Verwendung zu. Weitere Informationen hierzu finden Sie auf unserer{" "}
			<Link
				style={{
					color: "#6b2c08",
				}}
				to='/impressum'>
				Datenschutz-Seite
			</Link>
		</CookieConsent>
	);
};

export default CookieBanner;

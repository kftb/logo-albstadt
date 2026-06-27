import React from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";
import { useLocation } from "@reach/router"; // this helps tracking the location
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies";
import { Link } from "gatsby";

const CookieBanner = () => {
	const location = useLocation();

	const handleCookieAccept = () => {
		initializeAndTrack(location);
	};

	const handleCookieDecline = () => {
		// On decline react-cookie-consent stores consent=false, so the plugin
		// will not initialize Google Analytics. Additionally remove any analytics
		// cookies that might already exist from a previous visit.
		Cookies.remove("_ga");
		Cookies.remove("_gat");
		Cookies.remove("_gid");
	};

	return (
		<CookieConsent
			location='bottom'
			style={{
				background: "#ac968f",
			}}
			buttonStyle={{ background: "#796357", color: "white" }}
			declineButtonStyle={{ background: "#5f4e45", color: "white" }}
			buttonText='Akzeptieren'
			declineButtonText='Ablehnen'
			enableDeclineButton
			onAccept={handleCookieAccept}
			onDecline={handleCookieDecline}
			cookieName='gatsby-gdpr-google-analytics'>
			Diese Website verwendet Cookies für Google Analytics, um die Nutzung der
			Website statistisch auszuwerten. Diese Cookies werden nur mit Ihrer
			Einwilligung gesetzt. Sie können Ihre Einwilligung jederzeit mit Wirkung
			für die Zukunft widerrufen. Weitere Informationen finden Sie in unserer{" "}
			<Link
				style={{
					color: "#6b2c08",
				}}
				to='/datenschutz'>
				Datenschutzerklärung
			</Link>
			.
		</CookieConsent>
	);
};

export default CookieBanner;

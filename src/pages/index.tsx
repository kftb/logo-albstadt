import React from "react";
import App from "../components/App";
import { Seo } from "../components/SEO/SEO";
import "../styles/index.css";

const IndexPage = (): JSX.Element => {
	return <App />;
};

export default IndexPage;

export function Head({ location }: { location: { pathname: string } }): JSX.Element {
	return (
		<Seo
			description='logo albstadt ist Ihre logopädische Praxis von staatlich anerkannter Logopädin Vivian Bay in Albstadt. Wir behandeln alle Störungsbilder und Patienten jeden Alters - wir freuen uns über Ihren Anruf oder Nachricht!'
			pathname={location.pathname}
		/>
	);
}

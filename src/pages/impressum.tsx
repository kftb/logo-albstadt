import React, { Component } from "react";

import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Impressum from "../components/Impressum/Impressum";
import Layout from "../layouts/Layout";
import { Seo } from "../components/SEO/SEO";

export default class ImpressumPage extends Component {
	render(): JSX.Element {
		return (
			<div>
				<Layout>
					<Impressum />
				</Layout>
			</div>
		);
	}
}

export function Head({ location }: { location: { pathname: string } }): JSX.Element {
	return (
		<Seo
			title='logo albstadt - Impressum'
			description='Finden Sie hier unsere Kontaktdaten sowie datenschutzrechtliche Hinweise'
			pathname={location.pathname}
		/>
	);
}

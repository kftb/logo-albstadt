import React, { Component } from "react";

import "../styles/index.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Impressum from "../components/Impressum/Impressum";

import Layout from "../layouts/Layout";
import { Helmet } from "react-helmet";

export default class impressum extends Component {
	render() {
		return (
			<div>
				<Layout>
					<Helmet
						title='logo albstadt - Impressum'
						meta={[
							{
								name: "description",
								content:
									"Finden Sie hier unsere Kontaktdaten sowie datenschutzrechtliche Hinweise",
							},
						]}
					/>
					<Impressum />
				</Layout>
			</div>
		);
	}
}

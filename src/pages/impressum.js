import React, { Component } from "react";

import "../styles/index.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Impressum from "../components/Impressum/Impressum";

import Layout from "../layouts/Layout";

export default class impressum extends Component {
	render() {
		return (
			<div>
				<Layout>
					<Impressum />
				</Layout>
			</div>
		);
	}
}

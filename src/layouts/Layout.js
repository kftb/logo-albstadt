import React, { Component } from "react";

import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default class Layout extends Component {
	render() {
		return (
			<div>
				<Helmet>
					<title>title</title>
					<meta name='description' content='Helmet app' />
				</Helmet>
				<Navbar />
				{this.props.children}
				<Footer />
			</div>
		);
	}
}

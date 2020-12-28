import React, { Component } from "react";

import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SEO from "../components/seo";

export default class Layout extends Component {
	render() {
		return (
			<div>
				<SEO />
				<Navbar />
				{this.props.children}
				<Footer />
			</div>
		);
	}
}

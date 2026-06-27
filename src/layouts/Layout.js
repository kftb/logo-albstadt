import React, { Component } from "react";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SEO from "../components/SEO/SEO";
import CookieBanner from "../components/CookieBanner/CookieBanner";

export default class Layout extends Component {
	render() {
		return (
			<div>
				<SEO />
				<Navbar />
				{this.props.children}
				<Footer />
				<CookieBanner />
			</div>
		);
	}
}

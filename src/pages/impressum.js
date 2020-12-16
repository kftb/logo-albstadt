import React, { Component } from "react";
import "../styles/index.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer/Footer";

export default class impressum extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Footer />
			</div>
		);
	}
}

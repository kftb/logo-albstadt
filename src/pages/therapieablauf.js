import React, { Component } from "react";

import "../styles/index.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import Intro from "../components/Intro/Intro";
import SimpleText from "../components/SimpleText/SimpleText";
import Process from "../components/Process/Process";
import Principles from "../components/Principles/Principles";

export default class Therapieablauf extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Intro />
				<SimpleText />
				<Principles />
				<Process />
				<Footer />
			</div>
		);
	}
}

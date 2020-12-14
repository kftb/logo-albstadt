import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero/Hero";

import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Hero />
			</div>
		);
	}
}

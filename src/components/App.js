import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero/Hero";
import Quote from "./Quote/Quote";
import Features from "../components/Features/Features";

export default class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Hero />
				<Quote />
				<Features />
			</div>
		);
	}
}

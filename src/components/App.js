import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Quote from "./Quote/Quote";
import Features from "../components/Features/Features";
import Actor from "../components/Actor/Actor";
import CTA from "../components/CTA/CTA";
import Footer from "./Footer/Footer";
import Directions from "./Directions/Directions";

export default class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Hero />
				<Quote />
				<Features />
				<Actor />
				<CTA />
				<Directions />
				<Footer />
			</div>
		);
	}
}

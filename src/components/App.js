import React, { Component } from "react";
import { Helmet } from "react-helmet";

import "bootstrap/dist/css/bootstrap.min.css";

import Hero from "../components/Hero/Hero";
import Quote from "./Quote/Quote";
import Features from "../components/Features/Features";
import Actor from "../components/Actor/Actor";
import CTA from "../components/CTA/CTA";
import Directions from "./Directions/Directions";
import Layout from "../layouts/Layout";

export default class App extends Component {
	render() {
		return (
			<div>
				<Layout>
					<Helmet
						meta={[
							{
								name: "description",
								content:
									"logo albstadt ist Ihre logopädische Praxis von staatlich anerkannter Logopädin Vivian Bay in Albstadt. Wir behandeln alle Störungsbilder und Patienten jeden Alters - wir freuen uns über Ihren Anruf oder Nachricht!",
							},
						]}
					/>
					<Hero />
					<Quote />
					<Features />
					<Actor />
					<CTA />
					<Directions />
				</Layout>
			</div>
		);
	}
}

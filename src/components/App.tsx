import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Hero from "./Hero/Hero";
import Quote from "./Quote/Quote";
import Features from "./Features/Features";
import Actor from "./Actor/Actor";
import CTA from "./CTA/CTA";
import Directions from "./Directions/Directions";
import Layout from "../layouts/Layout";

export default class App extends Component {
	render(): JSX.Element {
		return (
			<div>
				<Layout>
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

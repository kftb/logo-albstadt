import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Hero from "./Hero/Hero";
import Quote from "./Quote/Quote";
import Features from "./Features/Features";
import Actor from "./Actor/Actor";
import CTA from "./CTA/CTA";
import Directions from "./Directions/Directions";
import Layout from "../layouts/Layout";

export default function App(): JSX.Element {
	return (
		<Layout>
			<Hero />
			<Quote />
			<Features />
			<Actor />
			<CTA />
			<Directions />
		</Layout>
	);
}

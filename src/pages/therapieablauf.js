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
				<SimpleText
					heading='Was ist Logopädie?'
					copy={[
						<p>
							Die Logopädie behandelt die Bereiche Stimme, Sprechen, Sprache wie
							auch Schlucken. Hier beschäftigen wir uns mit der Theorie und
							Praxis von Prävention (Vorbeugung), Beratung, Diagnostik, Therapie
							und Rehabilitation.{" "}
						</p>,
						<p>
							Logopäden und Logopädinnen sind darin ausgebildet eine Sprach-,
							Sprech-, Stimm- oder auch Schluckstörung festzustellen und sie zu
							behandeln. Sie diagnostizieren und therapieren auf der Grundlage
							einer Heilmittelverordnung (ärztl. Verordnung) und beraten die
							Patienten und deren Angehörigen."
						</p>,
					]}
				/>
				<Principles />
				<Process />
				<Footer />
			</div>
		);
	}
}

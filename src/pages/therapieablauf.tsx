import React, { Component } from "react";

import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Intro from "../components/Intro/Intro";
import SimpleText from "../components/SimpleText/SimpleText";
import Process from "../components/Process/Process";
import Principles from "../components/Principles/Principles";
import Layout from "../layouts/Layout";
import { Seo } from "../components/SEO/SEO";

export default class Therapieablauf extends Component {
	render(): JSX.Element {
		return (
			<div>
				<Layout>
					<Intro />
					<SimpleText
						sectionid='whatislogo'
						heading='Was ist Logopädie?'
						copy={[
							<p>
								Die Logopädie behandelt die Bereiche Stimme, Sprechen, Sprache
								wie auch Schlucken. Hier beschäftigen wir uns mit der Theorie
								und Praxis von Prävention (Vorbeugung), Beratung, Diagnostik,
								Therapie und Rehabilitation von Sprach-, Sprech-, Stimm- und
								Schluckstörungen.{" "}
							</p>,
							<p>
								LogopädInnen sind darin ausgebildet diese Störungen
								festzustellen und sie zu behandeln. Sie diagnostizieren und
								therapieren auf der Grundlage einer Heilmittelverordnung
								(ärztliche Verordnung) und beraten die Patienten und deren
								Angehörigen.
							</p>,
							<p>
								Bei logo albstadt haben wir Erfahrung mit allen gängigen
								Störungsbildern und behandeln sowohl Kinder- und Jugendliche,
								wie auch Erwachsene und SeniorInnen.
							</p>,
						]}
					/>
					<Principles />
					<Process />
				</Layout>
			</div>
		);
	}
}

export function Head({ location }: { location: { pathname: string } }): JSX.Element {
	return (
		<Seo
			title='logo albstadt - Therapieablauf'
			description='Unsere Therapie basiert auf unseren Grundprinzipien, welche wir Ihnen auf dieser Seite vorstellen möchten.'
			pathname={location.pathname}
		/>
	);
}

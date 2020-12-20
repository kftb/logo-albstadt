import React, { Component } from "react";
import Subfeature from "./Subfeature.js";
import "../../styles/Features.css";

export default class Features extends Component {
	render() {
		return (
			<div className='features' id='features'>
				<div className='features-heading'>Unser Praxisfokus</div>
				<div className='features-copy'>
					Wir behandeln Patienten allen Alters, haben uns jedoch verstärkt auf
					Kinder- und Jugendliche sowie Senioren und Seniorinnen spezailisiert.
					Finden Sie hier mehr Informationen zu unserem Therapieansatz.
				</div>

				<Subfeature
					img={require("../../images/kids.png")}
					heading='Kinder und Jugendliche'
					copy='Dies ist ein beschreibender Text, der aussagt, wie die Praxis
                besonders auf Kinder und Jugendliche ausgerichtet ist. Die folgende
                Liste gibt einen Überblick über alle Störungsbilder, die in der Praxis
				behandelt werden können.'
					list={
						<ul>
							<li>Sprachentwicklungsstörung</li>
							<li>Störung des Lauterwerbs (phonologische Störung)</li>
							<li>Störung des Wortschatzes</li>
						</ul>
					}
				/>
				<Subfeature
					img={require("../../images/seniors.png")}
					heading='Senioren und Seniorinnen'
					copy='Dies ist ein beschreibender Text, der aussagt, wie die Praxis
                besonders auf Kinder und Jugendliche ausgerichtet ist. Die folgende
                Liste gibt einen Überblick über alle Störungsbilder, die in der Praxis
				behandelt werden können.'
					list={
						<ul>
							<li>Sprachentwicklungsstörung</li>
							<li>Störung des Lauterwerbs (phonologische Störung)</li>
							<li>Störung des Wortschatzes</li>
						</ul>
					}
				/>
			</div>
		);
	}
}

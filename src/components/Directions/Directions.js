import React, { Component } from "react";
import "../../styles/Directions.css";

export default class Directions extends Component {
	render() {
		return (
			<div className='directions'>
				<div className='directions-title'>So finden Sie uns</div>
				<img src={require("../../images/anfahrt.png")} />
				<div className='directions-copy'>
					<br></br>
					<br></br>
					<div className='directions-copy'>
						<strong>Logo Albstadt - Praxis für Logopädie</strong>
						<br></br>
						Talstraße 3<br></br>
						72461 Albstadt-Onstmettingen
						<br></br>
						<br></br>
					</div>
					<strong>Von Tailfingen kommend</strong>
					<p>
						Folgen Sie der Hauptstraße von Tailfingen kommend bis nach
						Onstmettingen. Fahren Sie an der OMV Tankstelle vorbei, und biegen
						Sie rechts in die zweite Straße nach der Tankstelle ein (Talstraße).
						Sie finden unsere Praxis sodann im mittleren Haus in der kurzen
						Talstraße. Parken Sie gerne direkt vorm Haus, wenn noch frei.
					</p>
					<br></br>
					<strong>Von Bisingen/Stich/Langenwand kommend</strong>
					<p>
						Sie folgen wieder der Hauptstraße, auf der rechten Seite beim Peter
						Müller kommt eine Bushaltestelle nach dieser fahren Sie die Straße
						links Richtung Heuberg ein. Dort finden Sie uns auf der rechten
						Seite im mittleren Haus.
					</p>
					<br />
					<strong>Parkmöglichkeiten</strong>
					<p>Um die Praxis herum gibt es mehrere Parkmöglichkeiten:</p>
					<ul>
						<li>Direkt vor der Praxis</li>
						<li>Gegenüber der Praxis (vom Gebüsch nach hinten) </li>
						<li>
							In der Wilhelmstraße (direkt um die Ecke schräg gegenüber vom Club
							Kate)
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

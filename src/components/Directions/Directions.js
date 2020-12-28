import React, { Component } from "react";
import "../../styles/Directions.css";

export default class Directions extends Component {
	render() {
		return (
			<div className='directions' id='anfahrt'>
				<div className='directions-title'>So finden Sie uns</div>
				<img alt='' src={require("../../images/anfahrt.png")} />
				<div className='directions-copy'>
					<br></br>
					<br></br>
					<div className='directions-copy'>
						<strong>logo albstadt - Praxis für Logopädie</strong>
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
						Sie folgen der Hauptstraße in Richtung Tailfingen bis kurz vor
						Ortsausgang Onstmettingen. Noch vor der OMV Tankstelle befindet sich
						auf der rechten Seite die Firma Peter Müller sowie das
						Richtungsschild "Hohberg". Biegen Sie links ab und Sie befinden sich
						in der Talstraße, wo Sie die Praxis im mittleren Haus finden.
					</p>
					<br />
					<strong>Parkmöglichkeiten</strong>
					<p>
						In unmittelbarer Nähe der Praxis gibt es mehrere Parkmöglichkeiten:
					</p>
					<ul>
						<li>Direkt vor der Praxis</li>
						<li>Gegenüber der Praxis</li>
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

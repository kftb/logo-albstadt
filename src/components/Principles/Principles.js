import React, { Component } from "react";
import "../../styles/Principles.css";

export default class Principles extends Component {
	render() {
		return (
			<div className='principles' id='principles'>
				<div className='principles-container'>
					<div className='principles-heading'>Unsere Praxisphilosophie</div>

					<div className='principles-img'>
						<img
							style={{ "grid-column": 1, "grid-row": 1 }}
							src={require("../../images/piece1.svg")}
							alt=''
						/>
					</div>
					<div
						style={{ "grid-column": 2, "grid-row": 2 }}
						className='principles-copy'
					>
						<strong>Ganzkörperliche Arbeit</strong>
						<br />
						Wir arbeiten nicht nur an dem Problem selbst sondern schauen uns den
						ganzen Körper mit an
					</div>

					<div className='principles-img'>
						<img
							style={{ "grid-column": 1, "grid-row": 2 }}
							src={require("../../images/piece3.svg")}
							alt=''
						/>
					</div>
					<div
						style={{ "grid-column": 2, "grid-row": 2 }}
						className='principles-copy'
					>
						<strong>Transparenz</strong>
						<br />
						In der Therapie erklären wir den Patienten immer ganz genau wieso
						und warum wir diese Übung oder Aufgaben machen und zu welchen
						Zwecken sie dienen. Offene Kommunikation ist sehr wichtig in der
						Therapie um das Ziel zu erreichen.
					</div>
					<div className='principles-img'>
						<img
							style={{ "grid-column": 1, "grid-row": 2 }}
							src={require("../../images/piece2.svg")}
							alt=''
						/>
					</div>
					<div
						style={{ "grid-column": 2, "grid-row": 2 }}
						className='principles-copy'
					>
						<strong>Zielsetzung</strong>
						<br />
						Wir besprechen zu Beginn der Therapie bestimmte Ziele, die der
						Patient wie auch der Therapeut erreichen wollen. Wir suchen stets
						nach Lösungen um Probleme die bei Übungen oder Aufgaben auftauchen
						aus dem Weg zu schaffen, sodass der Patient schnellstmöglich zu
						seinem Ziel kommt.
					</div>
					<div className='principles-img'>
						<img
							style={{ "grid-column": 1, "grid-row": 2 }}
							src={require("../../images/piece4.svg")}
							alt=''
						/>
					</div>
					<div
						style={{ "grid-column": 2, "grid-row": 2 }}
						className='principles-copy'
					>
						<strong>Individuell</strong>
						<br />
						Jeder Patient bekommt eine individuelle Therapie, wir achten
						zusätzlich darauf, dass wir den Patienten dort abholen, wo er
						geradesteht. Dass heißt, geht es einem Patienten in der Therapie mal
						nicht gut (Grund egal) wird die vorgeplante Therapie so
						umstrukturiert, dass sie für die heutige Einheit zum Ziel führt und
						der Patienten mit einem guten/besseren Gefühl die Praxis verlässt
					</div>
				</div>
			</div>
		);
	}
}

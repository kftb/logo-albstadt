import React, { Component } from "react";
import "../../styles/Principles.css";

export default class Principles extends Component {
	render() {
		return (
			<div className='principles' id='principles'>
				<div className='principles-top'>
					{" "}
					<svg
						preserveAspectRatio='none'
						viewBox='0 0 1446 211'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M1446 211C964 211 482 211 2.31339e-05 211L0.000162687 -0.000980906C325.35 220.759 379.575 -114.654 814.379 64.0909C1035.37 154.938 1150.78 239.987 1446 148.834L1446 211Z'
							fill='#796357'
							fill-opacity='0.6'
						/>
						<path
							opacity='0.2'
							d='M-12.2052 211L1433.79 211L1433.79 139.876C1009.03 171.231 1034.64 -23.8644 615.901 43.1995C389.641 79.4366 202.184 -18.6388 -12.2052 50.1669L-12.2052 211Z'
							fill='#C8B2A6'
						/>
					</svg>
				</div>
				<div className='principles-middle'>
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
							Wir arbeiten nicht nur an dem Problem selbst sondern schauen uns
							den ganzen Körper mit an
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
							geradesteht. Dass heißt, geht es einem Patienten in der Therapie
							mal nicht gut (Grund egal) wird die vorgeplante Therapie so
							umstrukturiert, dass sie für die heutige Einheit zum Ziel führt
							und der Patienten mit einem guten/besseren Gefühl die Praxis
							verlässt
						</div>
					</div>
				</div>
				<div className='principles-bottom'>
					<svg
						preserveAspectRatio='none'
						viewBox='0 0 1446 161'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M1445.57 16.499C1439.12 277.004 1038.88 16.4989 778.297 16.4989C469.693 16.4989 -5.49401 325.036 -11.9334 16.4989C-12.0678 10.0572 -11.9333 0.000254045 -11.9333 0.000254045L1445.57 0.000137323C1445.57 0.000137323 1445.73 10.0577 1445.57 16.499Z'
							fill='#796357'
							fill-opacity='0.6'
						/>
						<path
							opacity='0.2'
							d='M21.4999 137.501C304.538 42.1318 551.373 23.4507 805.409 107.5C1059.45 191.549 1447 0.000121179 1447 0.000121179L-12.205 0.000115682C-12.205 0.000115682 -261.538 232.87 21.4999 137.501Z'
							fill='#C8B2A6'
						/>
					</svg>
				</div>
			</div>
		);
	}
}

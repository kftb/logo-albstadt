import React, { Component } from "react";
import "../../styles/Actor.css";
import { Link } from "gatsby";

export default class Actor extends Component {
	render() {
		return (
			<div className='actor' id='team'>
				<div className='actor-top'>
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
				<div className='actor-middle'>
					<div className='actor-container'>
						<div className='actor-heading'>
							Ihre Logopädin bei logo albstadt
						</div>
						<div className='actor-img'>
							<img src={require("../../images/vivian.png")} alt='' />
						</div>
						<div classname='actor-text'>
							<div className='actor-title'>Vivian Bay</div>
							<div className='actor-subtitle'>
								staatlich-anerkannte Logopädin
							</div>
						</div>

						<div className='actor-cv'>
							<ul>
								<li>
									Staatlich-anerkannte Logopädin mit mehr als 5 Jahren Erfahrung
								</li>
								<li>
									<strong>Seit 2021:</strong> Gründung der eigenen Praxis{" "}
									<strong>logo albstadt</strong> in Albstadt-Onstmettingen
								</li>
								<li>
									<strong>2015-2020:</strong> Festangestellte Logopädin in der
									Praxis für Logopädie Susanne Konrad
								</li>
								<li>
									<strong>2012-2015: </strong>
									Ausbildung zur Logopädin an der Bernd-Blindow-Schule in
									Leipzig
								</li>
							</ul>
						</div>
						<div className='actor-cert'>
							<strong>Zertifizierungen</strong>
							<ul>
								<li>zertifizierte ROTA-Therapeutin</li>
							</ul>
							<strong>Fortbildungen</strong>
							<ul>
								<li>
									Therapie der Sprachentwicklungsstörung nach Dr. Zvi Penner
									(Kon-Lab)
								</li>
								<li>
									Diagnostik und Therapie von Schluckstörungen (Dysphagie)
								</li>

								<li>
									Anwendung von Physiotherapie-Elementen in der logopädischen
									Behandlung von frühgeborenen Säuglingen
								</li>
								<li>Frühlesemethode für Patienten mit Down-Syndrom</li>
								<li>Diagnostik, Prognose und Intervention bei „Late Talker“</li>
								<li>
									Anwendung der "Logo Digital"-Software zur Förderung der
									Schreib- und Sprachkompetenz
								</li>
								<li>Best Practices des Tapings zum Einsatz in der Logopädie</li>
							</ul>
							<p>
								In den vergangenen fünf Jahren als Logopädin durfte ich mehr als
								400 Patienten betreuen und habe in dieser Zeit alle gängigen
								Störungsbilder behandelt. Bereits in meiner Zeit bei Susanne
								Konrad habe ich mich vermehrt auf Kinder- und Jugendliche
								spezialisiert, einen Fokus den ich nun in meiner eigenen Praxis
								fortführen werde.{" "}
							</p>
							<p>
								Eine auf den einzelnen Patienten abgestimmte Therapie ist mir
								besonders wichtig. Diesen und weitere Grundsätze bilden die
								Basis für eine logopädische Therapie. <br></br>
								<br></br>Finden Sie{" "}
								<Link to='/therapieablauf' className='internal-link'>
									hier mehr Informationen
								</Link>{" "}
								zu meiner Praxisphilosophie und dem typischen Ablauf einer
								Therapie bei logo albstadt.
							</p>
						</div>
					</div>
				</div>
				<div className='actor-bottom'>
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

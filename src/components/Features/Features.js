import React, { Component } from "react";
import Subfeature from "./Subfeature.js";
import { Link } from "gatsby";
import "../../styles/Features.css";

export default class Features extends Component {
	render() {
		return (
			<div className='features' id='fokus'>
				<div className='features-heading'>Unser Praxisfokus</div>
				<div className='features-copy'>
					Wir behandeln Patienten jeden Alters, haben uns jedoch auf Kinder- und
					Jugendliche spezialisiert.
				</div>

				<Subfeature
					img={require("../../images/kids.png")}
					heading='Kinder und Jugendliche'
					copy='Bei Kinder und Jugendlichen fokussiert sich die Behandlung besonders oft auf Auffälligkeiten/Störungen, die sich aus der Sprachentwicklung ergeben haben. Bei logo albstadt haben wir u.a. Erfahrung mit den folgenden Störungsbildern: '
					list={
						<ul>
							<li className='subfeature-level1'>
								<strong>Sprache</strong>
								<ul>
									<li>Sprachentwicklungsverzögerungen (SEV) </li>
									<li>Auffälligkeiten in der Grammatik (Dysgrammatismus) </li>
									<li>
										Sprachstörung bei Down-Syndrom oder Mehrfachbehinderungen
									</li>
									<li>Wortschatzdefizite (z.B. Late Talker) </li>
								</ul>
							</li>
							<li className='subfeature-level1'>
								<strong>Sprechen</strong>
								<ul>
									<li>Stottern / Poltern (Redeflussstörung)</li>

									<li>
										Unkorrekte oder nicht altersentsprechende Artikulation oder
										Verwendung eines Lautes (phonetische/phonologische Störung)
									</li>
									<li>Hörwahrnehmungsstörungen (AVWS)</li>
								</ul>
							</li>
							<li className='subfeature-level1'>
								<strong>Stimme</strong>
								<ul>
									<li>Unvollständiger Stimmbruch (Mutationsstimmstörung)</li>
									<li>Stimmlippenknötchen (Dysphonie)</li>
								</ul>
							</li>
							<li className='subfeature-level1'>
								<strong>Schlucken</strong>
								<ul>
									<li>Muskelungleichgewicht (Myofunktionelle Störung) </li>
									<li>Frühkindliche Schluckstörungen</li>
									<li>
										Störung der Schluckbewegung (z.B. viszerales Schlucken)
									</li>
									<li>Lippen-Kiefer-Gaumenspalten</li>
								</ul>
							</li>
						</ul>
					}
				/>
				<Subfeature
					img={require("../../images/seniors.png")}
					heading='Erwachsene und SeniorInnen'
					copy='Bei der Behandlung von Erwachsenen und SeniorInnen liegt der Schwerpunkt besonders auf der Wiederherstellung von Sprach-, Sprech-, Stimm- und Schluckfähigkeiten, die aufgrund von Krankheit oder Unfall eingeschränkt worden sind.'
					list={
						<ul>
							<li className='subfeature-level1'>
								<strong>Sprache</strong>
								<ul>
									<li>
										Sprachstörungen nach Schlaganfällen oder durch andere
										neurologische Erkrankungen (Aphasie)
									</li>
									<li>Altersbedingte Demenz</li>
								</ul>
							</li>
							<li className='subfeature-level1'>
								<strong>Sprechen</strong>
								<ul>
									<li>Störung der Sprechmotorik/der Stimme (Dysarthrie)</li>
									<li>Störung der Sprechplanung (Sprechapraxie)</li>
									<li>Stottern / Poltern (Redeflussstörung) </li>

									<li>
										Einschränkungen durch Gesichtslähmungen (Fazialis- und
										Hypoglossusparese)
									</li>
								</ul>
							</li>
							<li className='subfeature-level1'>
								<strong>Stimme</strong>
								<ul>
									<li>
										Andauernde/dauerhafte Heiserkeit oder raue, behauchte Stimme
										(Dysphonie)
									</li>
									<li>
										Organische Stimmstörung aufgrund einer OP oder Erkrankung
										(z.B. Stimmknötchen, Reinke-Ödem){" "}
									</li>
									<li>Psychogene Stimmstörung (Aphonie)</li>
								</ul>
							</li>
							<li className='subfeature-level1'>
								<strong>Schlucken</strong>
								<ul>
									<li>
										Schluckstörungen nach einer OP, Schlaganfall oder
										neurologischen Erkrankungen (Dysphagie){" "}
									</li>
								</ul>
							</li>
						</ul>
					}
				/>
				<br />
				<div>
					Detailliertere Informationen zur Logopädie, unseren Therapieprinzipien
					und dem typischen Ablauf einer Therapie{" "}
					<Link className='internal-link' to='/therapieablauf'>
						{" "}
						finden Sie hier.
					</Link>
				</div>
			</div>
		);
	}
}

import React, { Component } from "react";
import "../../styles/Process.css";

export default class Process extends Component {
	render() {
		return (
			<div className='process'>
				<div className='process-heading'>
					Wie läuft eine Therapie bei logo albstadt ab?
				</div>
				<div
					style={{ "grid-column": 1, "grid-row": 2 }}
					className='process-number'
				>
					1
				</div>
				<div
					style={{ "grid-column": 2, "grid-row": 3 }}
					className='process-copy'
				>
					<strong>Verordnung</strong>
					<ul>
						<li>
							Wenn Sie selbst oder ihr Kind das Gefühl haben oder auch der
							Kindergarten/Schule/Krankenhaus oder das Rehazentrum, dass eine
							logopädische Behandlung notwendig ist, sollte sie sich zunächst an
							ihren zuständigen Arzt wenden und dies besprechen.
						</li>
						<li>
							Wird ein logopädisches Rezept ausgestellt, können Sie sich hier
							bei mir in der Praxis telefonisch oder per Kontaktformular auf der
							Website anmelden/ einen Termin vereinbaren.{" "}
						</li>
						<li>
							Können Sie persönlich nicht in die Praxis kommen, führe ich auch
							Hausbesuche durch, dies muss auf der Verordnung vom Arzt vermerkt
							sein.
						</li>
					</ul>
				</div>

				<div
					style={{ "grid-column": 1, "grid-row": 2 }}
					className='process-number'
				>
					2
				</div>
				<div
					style={{ "grid-column": 2, "grid-row": 3 }}
					className='process-copy'
				>
					<strong>Erstgespräch / Diagnostik </strong>
					<ul>
						<li>
							Beim Erstgespräch führe ich erstmal ein Anamnesegespräch mit ihnen
							durch, um Ihren Ist-Zustand und die aktuellen Schwierigkeiten
							festzustellen. Darüber hinaus führe ich eine passende und
							individuelle Diagnostik durch und bespreche mit Ihnen die weitere
							Therapieplanung.
						</li>
						<li>
							Dieses Erstgespräch findet bei Kindern immer mit den Eltern oder
							einem Elternteil statt und dauert in der Regel 45 Minuten.
						</li>
					</ul>
				</div>
				<div
					style={{ "grid-column": 1, "grid-row": 2 }}
					className='process-number'
				>
					3
				</div>
				<div
					style={{ "grid-column": 2, "grid-row": 3 }}
					className='process-copy'
				>
					<strong>Behandlungsdauer / Behandlungskosten</strong>
					<ul>
						<li>
							Die Behandlungsdauer ist vom verordnenden Arzt festgelegt.
							Zunächst wird meist ein Diagnostikrezept mit 3 Einheiten oder
							gleich eins mit 10 Einheiten ausgestellt.
						</li>
						<li>
							Die Dauer der Therapiestunde ist abhängig von Störungsbild und
							liegen zwischen 30, 45 und 60 Minuten. Im Normalfall sind es 45
							Minuten.
						</li>
						<li>
							Patienten sind ab dem 18 Lebensjahr grundsätzlich
							Zuzahlungspflichtig.
						</li>
						<li>
							Mit Privatpatienten wird vor der Therapie ein Vertrag
							abgeschlossen. Ich empfehle Ihnen bei der zuständigen Krankenkasse
							mittels des Kostenvoranschlags, den Sie von mir bekommen, die
							Kostenübernahme abzuklären.
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

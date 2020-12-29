import React, { Component } from "react";
import "../../styles/Process.css";
import { Link } from "gatsby";

export default class Process extends Component {
	render() {
		return (
			<div className='process' id='ablauf'>
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
					<strong>Feststellung / Vorstellung beim Arzt</strong>
					<ul>
						<li>
							Wenn sprachliche Auffälligkeiten oder Einschränkungen durch
							Angehörige, Eltern oder Erziehern festgestellt werden, sollten Sie
							sich zunächst an Ihren behandelnden Arzt wenden und dies gemeinsam
							besprechen.
						</li>
						<li>
							Sollte die Notwendigkeit einer logopädischen Therapie vorhanden
							sein, erhalten Sie von Ihrem Arzt ein logopädisches Rezept, von
							uns auch "Heilmittelverordnung" genannt.
						</li>
						<li>
							Sobald Sie dieses Rezept in Aussicht oder erhalten haben, freuen
							wir uns über Ihren Anruf oder Ihre Nachricht über unser
							<Link to='/kontakt' className='internal-link'>
								{" "}
								Kontaktformular
							</Link>{" "}
							um einen Termin zu finden und die Therapie zu beginnen.
						</li>
						<li>
							Können Sie nicht persönlich in die Praxis kommen, führen wir auch
							gerne Hausbesuche durch. Bitte beachte Sie, dass dies jedoch auf
							dem Rezept vom Arzt vermerkt sein muss.
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
					style={{ "grid-column": 2, "grid-row": 4 }}
					className='process-copy'
				>
					<strong>Erstgespräch / Diagnostik </strong>
					<ul>
						<li>
							Bei unserem ersten Gespräch, auch Anamnesegespräch genannt,
							besprechen wir gemeinsam Ihre aktuelle Situation und definieren
							zusammen die Ziele Ihrer logopädischen Therapie. Dies wird ergänzt
							durch eine ausführliche Diagnostik, die wir im Anschluss durch
							spezielle Übungen durchführen.
						</li>
						<li>
							Auf dieser Basis erstellen wir einen individuellen Therapieplan,
							der Ihre Ziele in konkrete Therapiemethoden, -übungen und
							-meilensteine übersetzt.
						</li>
						<li>
							Das Erstgespräch findet bei Kindern immer mit einem oder beiden
							Elternteilen statt, es dauert in der Regel 45 Minuten.
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
					style={{ "grid-column": 2, "grid-row": 5 }}
					className='process-copy'
				>
					<strong>Behandlung / Behandlungsdauer</strong>
					<ul>
						<li>
							Die Behandlungsdauer einer logopädischen Therapie wird
							üblicherweise vom verordnenden Arzt durch das Rezept festgelegt.
							Dieses kann entweder ein Diagnostikrezept mit drei Einheiten oder
							sogleich ein logopädisches Rezept mit zehn Einheiten umfassen.
						</li>
						<li>
							Die Dauer der Therapiestunde ist abhängig vom Störungsbild und
							liegt bei 30, 45 oder 60 Minuten.
						</li>
						<li>
							Eltern können gerne während der Therapieeinheit in der Praxis
							warten oder die Zeit anderweitig nutzen, z.B. für Erledigungen in
							nahegelegenden Geschäften.
						</li>
						<li>
							Sollte eine Verlängerung der Therapie sinnvoll sein, kann diese
							mit einem weiteren Rezept selbstverständlich verlängert werden.
						</li>
					</ul>
				</div>
				<div
					style={{ "grid-column": 1, "grid-row": 2 }}
					className='process-number'
				>
					4
				</div>
				<div
					className='process-copy'
					style={{ "grid-column": 2, "grid-row": 6 }}
				>
					<strong>Behandlungskosten</strong>
					<p>
						<ul>
							<li>
								Eine logopädische Therapie ist grundsätzlich eine von den
								gesetzlichen Krankenkassen getragene Leistung, die mit einer
								Zuzahlung des Patienten unterstützt wird.
							</li>
							<li>
								Eine Zuzahlung ist grundsätzlich bei Patienten ab dem 18.
								Lebensjahr notwendig.
							</li>
							<li>
								Mit Privatpatienten wird vor der Therapie ein Vertrag
								abgeschlossen. Wir empfehlen Ihnen bei der zuständigen
								Krankenkasse mittels eines Kostenvoranschlags die
								Kostenübernahme vor Beginn der Therapie abzuklären. Einen
								Kostenvoranschlag und einen entsprechenden Antrag erhalten Sie
								gerne von uns.
							</li>
						</ul>
					</p>
				</div>
				<div
					className='process-copy'
					style={{ "grid-column": "1 / span 2", "grid-row": 6 }}
				>
					Kommen Sie bei weiteren Fragen gerne jederzeit auf uns zu.
				</div>
			</div>
		);
	}
}

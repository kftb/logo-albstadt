import React, { Component } from "react";

import "../../styles/Contactform.css";

export default class Contactform extends Component {
	handleSubmit() {
		alert("Vielen Dank für Ihre Nachricht. Wir melden uns umgehend bei Ihnen.");
	}

	render() {
		return (
			<div class='container'>
				<form class='contact-grid' onSubmit={this.handleSubmit}>
					<label for='name'>Vor- und Nachname</label>
					<input id='namebox' type='text' id='name' placeholder='Ihr Name' />

					<label for='email'>Email-Adresse</label>
					<input type='email' id='email' placeholder='Ihre Email-Adresse' />

					<label for='phone'>Telefonnummer</label>
					<input type='tel' id='phone' placeholder='Ihre Telefonnummer' />

					<label for='message'>Nachricht</label>
					<textarea
						rows='6'
						id='message'
						placeholder='Ihre Nachricht'
					></textarea>

					<p>Präferierte Tage</p>
					<ul class='contact-list'>
						<li>
							<input type='checkbox' id='Monday' />
							Montags
						</li>
						<li>
							<input type='checkbox' id='Tuesday' />
							Dienstags
						</li>
						<li>
							<input type='checkbox' id='wednesday' />
							Mittwochs
						</li>
						<li>
							<input type='checkbox' id='thursday' />
							Donnerstags
						</li>
						<li>
							<input type='checkbox' id='friday' />
							Freitags
						</li>
					</ul>

					<p>Präferierte Zeiten</p>
					<ul class='contact-list'>
						<li>
							<input type='checkbox' id='earlymorning' />
							Früher vormittag (8-10 Uhr)
						</li>
						<li>
							<input type='checkbox' id='latemorning' />
							Später vormittag (10-12 Uhr)
						</li>
						<li>
							<input type='checkbox' id='earlyafternoon' />
							Früher nachmittag (12-15 Uhr)
						</li>
						<li>
							<input type='checkbox' id='lateafternoon' />
							Später nachmittag (15-18 Uhr)
						</li>
					</ul>

					<button type='submit'>Kontaktformular absenden</button>
				</form>
			</div>
		);
	}
}

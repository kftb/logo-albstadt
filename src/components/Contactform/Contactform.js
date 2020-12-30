import React, { Component } from "react";

import "../../styles/Contactform.css";

export default class Contactform extends Component {
	handleSubmit() {
		alert("Vielen Dank für Ihre Nachricht. Wir melden uns umgehend bei Ihnen.");
	}

	render() {
		return (
			<div class='container'>
				<form
					name='Contact Form'
					method='POST'
					class='contact-grid'
					data-netlify='true'
					method='POST'
				>
					<input type='hidden' name='form-name' value='Contact Form' />
					<label id='name' for='name'>
						Vor- und Nachname
					</label>
					<input name='name' id='namebox' type='text' placeholder='Ihr Name' />

					<label id='email' for='email'>
						E-Mail-Adresse
					</label>
					<input
						name='email'
						type='emailbox'
						id='emailbox'
						placeholder='Ihre E-Mail-Adresse'
					/>

					<label id='phone' for='phone'>
						Telefonnummer
					</label>
					<input
						name='phone'
						type='tel'
						id='phonebox'
						placeholder='Ihre Telefonnummer'
					/>

					<label id='message' for='message'>
						Nachricht
					</label>
					<textarea
						name='message'
						rows='3'
						id='messagebox'
						placeholder='Ihre Nachricht'
					></textarea>

					<p id='days'>
						<label>Präferierte Tage</label>
					</p>
					<ul id='daysbox' class='contact-list'>
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

					<p id='times'>
						<label>Präferierte Zeiten</label>
					</p>
					<ul id='timesbox' class='contact-list'>
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

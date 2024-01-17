import React, { Component } from "react";

import "../../styles/Contactform.css";

export default class Contactform extends Component {
  handleSubmit() {
    alert("Vielen Dank für Ihre Nachricht. Wir melden uns umgehend bei Ihnen.");
  }

  render() {
    return (
      <div class="container">
        <form
          name="Kontaktformular"
          method="POST"
          class="contact-grid"
          data-netlify="true"
          method="POST"
          action="/kontakt"
          onSubmit={this.handleSubmit}
        >
          <input type="hidden" name="form-name" value="Kontaktformular" />
          <label id="name" for="name">
            Vor- und Nachname*
          </label>
          <input
            name="name"
            id="namebox"
            type="text"
            placeholder="Ihr Name"
            required
          />

          <label id="email" for="email">
            E-Mail-Adresse
          </label>
          <input
            name="email"
            type="emailbox"
            id="emailbox"
            placeholder="Ihre E-Mail-Adresse"
          />

          <label id="phone" for="phone">
            Telefonnummer*
          </label>
          <input
            name="phone"
            type="tel"
            id="phonebox"
            placeholder="Ihre Telefonnummer"
            required
          />

          <label id="message" for="message">
            Nachricht*
          </label>
          <textarea
            name="message"
            rows="3"
            id="messagebox"
            placeholder="Ihre Nachricht"
            required
          ></textarea>

          <p id="days">
            <label>Präferierte Tage</label>
          </p>
          <ul id="daysbox" class="contact-list">
            <li>
              <input name="Montag" type="checkbox" id="Monday" />
              Montags
            </li>
            <li>
              <input type="checkbox" id="Tuesday" name="Dienstag" />
              Dienstags
            </li>
            <li>
              <input type="checkbox" id="wednesday" name="Mittwoch" />
              Mittwochs
            </li>
            <li>
              <input type="checkbox" id="thursday" name="Donnerstag" />
              Donnerstags
            </li>
            <li>
              <input type="checkbox" id="friday" name="Freitag" />
              Freitags
            </li>
          </ul>

          <p id="times">
            <label>Präferierte Zeiten</label>
          </p>
          <ul id="timesbox" class="contact-list">
            <li>
              <input
                type="checkbox"
                id="earlymorning"
                name="Früher Morgen (8-10)"
              />
              Früher vormittag (8-10 Uhr)
            </li>
            <li>
              <input
                type="checkbox"
                id="latemorning"
                name="Später Morgen (10-12)"
              />
              Später vormittag (10-12 Uhr)
            </li>
          </ul>
          <div className="required-input">* = erforderliches Feld</div>
          <br />

          <button type="submit">Kontaktformular absenden</button>
        </form>
      </div>
    );
  }
}

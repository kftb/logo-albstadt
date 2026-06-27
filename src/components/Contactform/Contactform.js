import React, { Component } from "react";

import "../../styles/Contactform.css";

export default class Contactform extends Component {
  handleSubmit(e) {
    e.preventDefault();
    alert("Vielen Dank für Ihre Nachricht. Wir melden uns umgehend bei Ihnen.");
  }

  render() {
    return (
      <div className="container">
        <form
          name="Kontaktformular"
          method="POST"
          className="contact-grid"
          data-netlify="true"
          action="/kontakt"
          onSubmit={this.handleSubmit}
        >
          <input type="hidden" name="form-name" value="Kontaktformular" />
          <label id="name" htmlFor="namebox">
            Vor- und Nachname*
          </label>
          <input
            name="name"
            id="namebox"
            type="text"
            placeholder="Ihr Name"
            required
          />

          <label id="email" htmlFor="emailbox">
            E-Mail-Adresse
          </label>
          <input
            name="email"
            type="email"
            id="emailbox"
            placeholder="Ihre E-Mail-Adresse"
          />

          <label id="phone" htmlFor="phonebox">
            Telefonnummer*
          </label>
          <input
            name="phone"
            type="tel"
            id="phonebox"
            placeholder="Ihre Telefonnummer"
            required
          />

          <label id="message" htmlFor="messagebox">
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
          <ul id="daysbox" className="contact-list">
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
          <ul id="timesbox" className="contact-list">
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
            <li>
              <input
                type="checkbox"
                id="earlyafternoon"
                name="Früher Nachmittag (12-15)"
              />
              Früher nachmittag (12-15 Uhr)
            </li>
            <li>
              <input
                type="checkbox"
                id="lateafternoon"
                name="Später Nachmittag (15-18)"
              />
              Später nachmittag (15-18 Uhr)
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

import React, { Component } from "react";
import "../../styles/Hero.css";

export default class Hero extends Component {
  render() {
    return (
      <div className="hero" id="hero">
        <div className="heroImg">
          <div className="heroQuote">
            <div className="heroQuoteTitle">
              <img
                alt="logo albstadt logo"
                className="hero-img-logo"
                src={require("../../images/logoalbstadt_nameonly.svg")}></img>
            </div>
            <div className="heroQuoteSubtitle">
              <p> Ihre logopädische Praxis in Albstadt</p>
              <p style={{ color: "#8b0000" }}>
                <p>Liebe PatientInnen,</p> logo albstadt ist vom 1. November
                2022 bis Ende 2023 wegen Elternzeit geschlossen.
                <p>
                  Wir freuen uns Sie voraussichtlich im Januar 2024 wieder
                  begrüßen zu dürfen.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

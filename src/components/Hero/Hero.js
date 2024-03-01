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
                src={require("../../images/logoalbstadt_nameonly.svg")}
              ></img>
            </div>
            <div className="heroQuoteSubtitle">
              <p> Ihre logopädische Praxis in Albstadt</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

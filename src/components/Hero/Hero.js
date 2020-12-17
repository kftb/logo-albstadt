import React, { Component } from "react";
import heroStyles from "../../styles/Hero.module.scss";

export default class Hero extends Component {
	render() {
		return (
			<div className={heroStyles["hero"]}>
				<div className={heroStyles["heroQuote"]}>
					<div className={heroStyles["heroQuoteTitle"]}>logo albstadt</div>
					<div className={heroStyles["heroQuoteSubtitle"]}>
						die logopädische Praxis für Jung und Alt in Albstadt
					</div>
				</div>
			</div>
		);
	}
}

import React, { Component } from "react";
import "../../styles/Intro.css";

export default class Intro extends Component {
	render() {
		return (
			<div className='intro'>
				<div className='intro-container'>
					<div className='intro-title'>
						"Sprache gehört zum Charakter des Menschen"
					</div>
					<div className='intro-author'>Francis Bacon</div>
				</div>
			</div>
		);
	}
}

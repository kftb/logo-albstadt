import React, { Component } from "react";
import "../../styles/Quote.css";

export default class Quote extends Component {
	render() {
		return (
			<div className='quote'>
				<div className='quote-container'>
					<span className='quote-symbol'>"</span>
					<div className='quote-title'>
						Das Menschlichste, was wir haben, ist die Sprache.
					</div>
					<br></br>
					<div className='quote-author'>Theodore Fontane</div>
					<div className='quote-copy'>
						Nichts verbindet uns mehr als Sprache. Wir bei{" "}
						<strong>logo albstadt</strong> haben es uns zum Ziel gemacht,
						Patienten jeden Alters zu helfen, Einschränkungen der Sprach-,
						Sprech-, Stimm- und Schluckfähigkeit zu lösen oder abzumildern.
					</div>
				</div>
			</div>
		);
	}
}

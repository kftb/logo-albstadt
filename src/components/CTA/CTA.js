import React, { Component } from "react";
import "../../styles/CTA.css";

export default class Actor extends Component {
	render() {
		return (
			<div className='cta'>
				<div className='cta-heading'>Wir freuen uns auf Ihren Anruf</div>
				<div className='cta-copy'>
					Möchten Sie gerne einen Termin vereinbaren, rufen Sie uns gerne an!
					<br></br>
					<br></br>
					<strong>07431 / 123 456 </strong>
					<br></br>
					<br></br>
					Alternativ kontaktieren Sie uns gerne über unser Kontaktformular und
					wir melden uns umgehend bei Ihnen!
				</div>
			</div>
		);
	}
}

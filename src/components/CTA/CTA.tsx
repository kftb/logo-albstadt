import React, { useEffect } from "react";
import { Link } from "gatsby";
import Obfuscate from "react-obfuscate";
import "../../styles/CTA.css";

const BOOKING_FLOW_ID = "01M5C9W4CHE9FD42AJWETKKZAD";
const BOOKING_SCRIPT_SRC = "https://bookings-embed.optadata-performance.de/bookings.js";

export default function CTA(): JSX.Element {
	useEffect(() => {
		if (document.querySelector(`script[src="${BOOKING_SCRIPT_SRC}"]`)) return;
		const w = window as unknown as { oddcBookings?: unknown[][] };
		const queue = (w.oddcBookings = w.oddcBookings || []);
		queue.push(["bookingFlowId", BOOKING_FLOW_ID]);
		const script = document.createElement("script");
		script.async = true;
		script.src = BOOKING_SCRIPT_SRC;
		document.body.appendChild(script);
	}, []);

	return (
		<div className='cta' id='termin'>
			<div className='cta-heading'>Wir freuen uns auf Ihren Anruf</div>
			<div className='cta-copy'>
				Möchten Sie einen Termin vereinbaren, rufen Sie uns gerne an unter
				<br />
				<br />
				<strong>
					<Obfuscate tel='07432 / 60 58 150' />
				</strong>
				<br />
				<br />
				<div className="cta-copy">oder nutzen Sie unser Buchungsportal:</div>

				<button type='button' className='cta-booking-button' data-oddc-open-bookings-modal>
					Online-Termin buchen
				</button>
				<br />
				<br />
				Alternativ kontaktieren Sie uns über unser{" "}
				<Link to='/kontakt'>
					<span className='internal-link'>Kontaktformular</span>
				</Link>{" "}
				und wir melden uns umgehend bei Ihnen!
			</div>
			<br />
			<br />
			<div className='cta-copy'>
				{process.env.GATSBY_SHOW_SPECIALHOURS === "ja" ? (
					<span>
						{process.env.GATSBY_SPECIALHOURS}
						<p>Termine nach Vereinbarung</p>
					</span>
				) : (
					<span>
						<p>Unsere Öffnungszeiten sind:</p>
						<p>{process.env.GATSBY_HOURS}</p>
					</span>
				)}
			</div>
		</div>
	);
}

import React, { Component } from "react";
import { Link } from "gatsby";

import "../../styles/Navbar.css";

if (typeof window !== "undefined") {
	// eslint-disable-next-line global-require
	require("smooth-scroll")('a[href*="#"]', {
		offset: 120,
	});
}

export default class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className='navbar-sticky'>
					<img
						className='navbar-logo'
						src={require("../../images/logoalbstadt.svg")}
					/>
					<ul className='navbar-link'>
						<li className='navbar-link-item'>
							<Link to='/#features'>Unser Praxisfokus</Link>
						</li>
						<li className='navbar-link-item'>
							<Link to='/#actor'>Unser Team</Link>
						</li>
						<li className='navbar-link-item'>
							<Link to='/#cta'>Termin & Öffnungszeiten</Link>
						</li>
						<li className='navbar-link-item'>
							<Link to='/therapieablauf'>Therapieablauf</Link>
						</li>
						<li className='navbar-link-item'>
							<Link to='/#directions'>Anfahrt</Link>
						</li>
						<li className='navbar-link-item'>
							<Link to='/kontakt'>Kontakt</Link>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

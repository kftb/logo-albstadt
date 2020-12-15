import React, { Component } from "react";
import "../styles/Navbar.css";

export default class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className='navbar'>
					<img
						className='navbar-img'
						src={require("../images/logoalbstadt.svg")}
					/>
					<ul className='navbar-link'>
						<li className='navbar-link-item'>Unser Praxisfokus</li>
						<li className='navbar-link-item'>Unser Team</li>
						<li className='navbar-link-item'>Termin & Öffnungszeiten</li>
						<li className='navbar-link-item'>Therapieablauf</li>
						<li className='navbar-link-item'>Anfahrt</li>
					</ul>
				</nav>
			</div>
		);
	}
}

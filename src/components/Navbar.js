import React, { Component } from "react";
import { Link } from "gatsby";

import "../styles/Navbar.css";

export default class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className='navbar-sticky'>
					<img
						className='navbar-logo'
						src={require("../images/logoalbstadt.svg")}
					/>
					<ul className='navbar-link'>
						<li className='navbar-link-item'>
							<Link to='/'>Unser Praxisfokus</Link>
						</li>
						<li className='navbar-link-item'>
							<Link to='/'>Unser Team</Link>
						</li>
						<li className='navbar-link-item'>
							<Link to='/'>Termin & Öffnungszeiten</Link>
						</li>
						<li className='navbar-link-item'>
							<Link to='/'>Therapieablauf</Link>
						</li>
						<li className='navbar-link-item'>
							<Link to='/'>Anfahrt</Link>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

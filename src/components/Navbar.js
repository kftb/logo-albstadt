import React, { Component } from "react";
import "../styles/Navbar.css";

export default class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className='navbar'>
					<div className='navbar--logo-holder'>
						<img
							src='./images/logoalbstadt.svg'
							alt='logo'
							className='navbar--logo'
						/>
						<h1>Logo Albstadt</h1>
					</div>
					<ul className='navbar--link'>
						<li className='navbar--link-item'>Home</li>
						<li className='navbar--link-item'>About</li>
						<li className='navbar--link-item'>Blog</li>
					</ul>
				</nav>
			</div>
		);
	}
}

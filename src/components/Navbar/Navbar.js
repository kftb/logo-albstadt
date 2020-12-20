import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Navbar.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "gatsby";

if (typeof window !== "undefined") {
	// eslint-disable-next-line global-require
	require("smooth-scroll")('a[href*="#"]', {
		offset: 120,
	});
}

export default function App() {
	return (
		<Navbar collapseOnSelect expand='md' bg='white' variant='light'>
			<Navbar.Brand href='#home'>
				<img
					alt=''
					className='navbar-logo'
					src={require("../../images/logoalbstadt.svg")}
				/>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='ml-4'>
					<Link className='nav-link' to='/#fokus'>
						Unser Praxisfokus
					</Link>
					<Link className='nav-link' to='/#team'>
						Unser Team
					</Link>
					<Link className='nav-link' to='/#termin'>
						Termin & Öffnungszeiten
					</Link>
					<Link className='nav-link' to='/therapieablauf'>
						Therapieablauf
					</Link>
					<Link className='nav-link' to='/#anfahrt'>
						Anfahrt
					</Link>
					<Link className='nav-link' to='/kontakt'>
						Kontakt
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

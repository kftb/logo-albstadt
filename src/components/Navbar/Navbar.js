import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Navbar.css";
import { Nav, Navbar } from "react-bootstrap";
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
				<Link className='nav-link' to='/'>
					<img
						alt=''
						className='navbar-logo'
						src={require("../../images/logoalbstadt.svg")}
					/>
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='ml-4'>
					<Nav.Link className='nav-link' as={Link} to='/#fokus' href='/#fokus'>
						Unser Praxisfokus
					</Nav.Link>
					<Nav.Link className='nav-link' as={Link} to='/#team' href='/#fokus'>
						Unser Team
					</Nav.Link>
					<Nav.Link className='nav-link' as={Link} to='/#termin' href='/#fokus'>
						Termin & Öffnungszeiten
					</Nav.Link>
					<Nav.Link
						className='nav-link'
						as={Link}
						to='/therapieablauf'
						href='/#fokus'
					>
						Therapieablauf
					</Nav.Link>
					<Nav.Link
						className='nav-link'
						as={Link}
						to='/#anfahrt'
						href='/#fokus'
					>
						Anfahrt
					</Nav.Link>
					<Nav.Link className='nav-link' as={Link} to='/kontakt' href='/#fokus'>
						Kontakt
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

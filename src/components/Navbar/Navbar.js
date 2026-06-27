import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Navbar.css";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "gatsby";


export default function App() {
	return (
		<Navbar collapseOnSelect expand='md' bg='white' variant='light'>
			<Navbar.Brand href='#home'>
				<Link className='nav-link' to='/'>
					<img
						alt='logo albstadt'
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
					<Nav.Link className='nav-link' as={Link} to='/#team' href='/#team'>
						Unser Team
					</Nav.Link>
					<Nav.Link className='nav-link' as={Link} to='/#termin' href='/#termin'>
						Termin & Öffnungszeiten
					</Nav.Link>
					<Nav.Link
						className='nav-link'
						as={Link}
						to='/therapieablauf'
						href='/therapieablauf'
					>
						Therapieablauf
					</Nav.Link>
					<Nav.Link
						className='nav-link'
						as={Link}
						to='/#anfahrt'
						href='/#anfahrt'
					>
						Anfahrt
					</Nav.Link>
					<Nav.Link className='nav-link' as={Link} to='/kontakt' href='/kontakt'>
						Kontakt
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

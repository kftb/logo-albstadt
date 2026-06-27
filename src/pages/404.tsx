import React, { Component } from "react";
import { Link } from "gatsby";
import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "../layouts/Layout";
import { Seo } from "../components/SEO/SEO";
import warningImg from "../images/undraw_warning_cyit.svg";

export default class NotFound extends Component {
	render(): JSX.Element {
		return (
			<div>
				<Layout>
					<div>
						<div style={{ paddingTop: "10rem", textAlign: "center" }}>
							<h2>Oops, hier ist etwas schiefgegangen.</h2>
							<br />
							<Link to='/' className='internal-link'>
								Klicke hier um auf unsere Webseite zurückzukommen.
							</Link>
							<img
								style={{
									width: "50%",
									display: "block",
									margin: "0 auto",
									paddingTop: "2rem",
								}}
								src={warningImg}
								alt=''
							/>
						</div>
					</div>
				</Layout>
			</div>
		);
	}
}

export function Head({ location }: { location: { pathname: string } }): JSX.Element {
	return <Seo title='logo albstadt - 404' pathname={location.pathname} />;
}

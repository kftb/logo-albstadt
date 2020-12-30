import React, { Component } from "react";
import { Link } from "gatsby";
import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "../layouts/Layout";

export default class impressum extends Component {
	render() {
		return (
			<div>
				<Layout>
					<div>
						<div style={{ "padding-top": "10rem", "text-align": "center" }}>
							<h2>Oops, hier ist etwas schiefgegangen.</h2>
							<br></br>
							<Link to='/' className='internal-link'>
								Klicke hier um auf unsere Webseite zurückzukommen.
							</Link>
							<img
								style={{
									width: "50%",
									display: "block",
									margin: "0 auto",
									"padding-top": "2rem",
								}}
								src={require("../images/undraw_warning_cyit.svg")}
							></img>
						</div>
					</div>
				</Layout>
			</div>
		);
	}
}

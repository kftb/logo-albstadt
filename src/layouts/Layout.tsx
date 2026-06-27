import React, { Component } from "react";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

interface LayoutProps {
	children: React.ReactNode;
}

export default class Layout extends Component<LayoutProps> {
	render(): JSX.Element {
		return (
			<div>
				<Navbar />
				{this.props.children}
				<Footer />
			</div>
		);
	}
}

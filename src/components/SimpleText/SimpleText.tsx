import React, { Component } from "react";
import "../../styles/SimpleText.css";

interface SimpleTextProps {
	heading: string;
	copy: React.ReactNode;
	sectionid?: string;
}

export default class SimpleText extends Component<SimpleTextProps> {
	render(): JSX.Element {
		return (
			<div className='simpletext' id={this.props.sectionid}>
				<div className='simpletext-heading'>{this.props.heading}</div>
				<div className='simpletext-copy'>{this.props.copy}</div>
			</div>
		);
	}
}

import React, { Component } from "react";
import "../../styles/SimpleText.css";

export default class SimpleText extends Component {
	render() {
		return (
			<div className='simpletext' id={this.props.sectionid}>
				<div className='simpletext-heading'>{this.props.heading}</div>
				<div className='simpletext-copy'>{this.props.copy}</div>
			</div>
		);
	}
}

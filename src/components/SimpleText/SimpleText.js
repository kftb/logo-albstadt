import React, { Component } from "react";
import "../../styles/SimpleText.css";

export default class SimpleText extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='simpletext'>
				<div className='simpletext-heading'>{this.props.heading}</div>
				<div className='simpletext-copy'>{this.props.copy}</div>
			</div>
		);
	}
}

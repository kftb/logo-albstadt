import React, { Component } from "react";
import "../../styles/Subfeature.css";

export default class Subfeature extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='subfeature'>
				<div className='subfeature-img'>
					<img className='subfeature-img-img' src={this.props.img} />
				</div>
				<div className='subfeature-heading'>{this.props.heading}</div>
				<div className='subfeature-copy'>
					{this.props.copy}
					{this.props.list}
				</div>
			</div>
		);
	}
}

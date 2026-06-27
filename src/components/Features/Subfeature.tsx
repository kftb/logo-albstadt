import React, { Component } from "react";
import "../../styles/Subfeature.css";

interface SubfeatureProps {
	img: string;
	heading: string;
	copy: string;
	list: React.ReactNode;
}

export default class Subfeature extends Component<SubfeatureProps> {
	render(): JSX.Element {
		return (
			<div className='subfeature'>
				<div className='subfeature-img'>
					<img className='subfeature-img-img' alt='' src={this.props.img} />
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

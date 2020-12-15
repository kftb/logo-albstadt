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
					{/* <img src={require(`'../../images/${this.props.img}'`)} /> */}
					<img src={require("../../images/kids.png")} />
					<img src={this.props.img} />
					{/* <img src={require("../../images/kids.png")} /> */}
					{/* <img src={require(`../assets/imgs/people/${this.props.name.toLowerCase()}.png`)} */}
				</div>
				<div className='subfeature-heading'>{this.props.heading}</div>
				<div className='subfeature-copy'>
					{this.props.copy}
					<ul>
						<li>Sprachentwicklungsstörung</li>
						<li>Störung des Lauterwerbs (phonologische Störung)</li>
						<li>Störung des Wortschatzes</li>
					</ul>
				</div>
			</div>
		);
	}
}

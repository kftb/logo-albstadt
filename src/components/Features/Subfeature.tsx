import React from "react";
import "../../styles/Subfeature.css";

interface SubfeatureProps {
	img: string;
	heading: string;
	copy: string;
	list: React.ReactNode;
}

export default function Subfeature({ img, heading, copy, list }: SubfeatureProps): JSX.Element {
	return (
		<div className='subfeature'>
			<div className='subfeature-img'>
				<img className='subfeature-img-img' alt='' src={img} />
			</div>
			<div className='subfeature-heading'>{heading}</div>
			<div className='subfeature-copy'>
				{copy}
				{list}
			</div>
		</div>
	);
}

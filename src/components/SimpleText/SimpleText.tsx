import React from "react";
import "../../styles/SimpleText.css";

interface SimpleTextProps {
	heading: string;
	copy: React.ReactNode;
	sectionid?: string;
}

export default function SimpleText({ heading, copy, sectionid }: SimpleTextProps): JSX.Element {
	return (
		<div className='simpletext' id={sectionid}>
			<div className='simpletext-heading'>{heading}</div>
			<div className='simpletext-copy'>{copy}</div>
		</div>
	);
}

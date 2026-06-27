import React from "react";
import "../../styles/Intro.css";

export default function Intro(): JSX.Element {
	return (
		<div className='intro'>
			<div className='intro-container'>
				<div className='intro-title'>
					"Sprache gehört zum Charakter des Menschen"
				</div>
				<div className='intro-author'>Francis Bacon</div>
			</div>
		</div>
	);
}

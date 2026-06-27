import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "../../styles/Hero.css";

export default function Hero(): JSX.Element {
	return (
		<div className='hero' id='hero'>
			<div className='heroImg'>
				<div className='heroQuote'>
					<div className='heroQuoteTitle'>
						<StaticImage
							src='../../images/logoalbstadt_nameonly.svg'
							alt='logo albstadt logo'
							className='hero-img-logo'
							placeholder='none'
						/>
					</div>
					<div className='heroQuoteSubtitle'>
						<p> Ihre logopädische Praxis in Albstadt</p>
					</div>
				</div>
			</div>
		</div>
	);
}

import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const keywords = [
	"Logopädie",
	"logopaedie",
	"sprachtherapie",
	"logopäde",
	"logopädin",
	"staatlich anerkannte Logopädin",
	"albstadt",
	"onstmettingen",
	"albstadt-onstmettingen",
	"albstadt-ebingen",
	"albstadt-tailfingen",
	"albstadt-pfeffingen",
	"albstadt-margrethausen",
	"albstadt-lautlingen",
	"ebingen",
	"tailfingen",
	"messtetten",
	"meßstetten",
	"balingen",
	"therapie mit kindern",
	"schlaganfall",
];

const baseUrl = "https://logoalbstadt.de";

export function Seo({ title, description, image, pathname = "" }) {
	const { site } = useStaticQuery(graphql`
		query SeoQuery {
			site {
				siteMetadata {
					defaultTitle: title
					defaultDescription: description
					siteUrl
					defaultImage: image
				}
			}
		}
	`);

	const { defaultTitle, defaultDescription, siteUrl, defaultImage } =
		site.siteMetadata;

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: `${siteUrl}${image || defaultImage}`,
		url: `${siteUrl}${pathname}`,
		canonicalUrl: `${baseUrl}${pathname}`,
	};

	return (
		<>
			<html lang="de" />
			<title>{seo.title}</title>
			<meta name="description" content={seo.description} />
			<meta name="image" content={seo.image} />
			<link rel="canonical" href={seo.canonicalUrl} />
			<meta property="og:url" content={seo.url} />
			<meta property="og:title" content={seo.title} />
			<meta property="og:description" content={seo.description} />
			<meta property="og:image" content={seo.image} />
			<meta name="keywords" content={keywords.join(",")} />
		</>
	);
}

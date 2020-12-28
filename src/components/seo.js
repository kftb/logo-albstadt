import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";
import { favicon } from "../images/gatsby-icon.png";

const SEO = ({ title, description, image, article }) => {
	const { pathname } = useLocation();
	const { site } = useStaticQuery(query);

	const {
		defaultTitle,
		defaultDescription,
		siteUrl,
		defaultImage,
	} = site.siteMetadata;

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: `${siteUrl}${image || defaultImage}`,
		url: `${siteUrl}${pathname}`,
		keywords: keywords || [
			"Logopädie",
			"logopaedie",
			"sprachtherapie",
			"logopäde",
			"albstadt",
			"onstmettingen",
		],
	};

	const keywords = seo.keywords.join(",");

	return (
		<Helmet title={seo.title}>
			<meta name='description' content={seo.description} />
			<meta name='image' content={seo.image} />

			{seo.url && <meta property='og:url' content={seo.url} />}

			{seo.title && <meta property='og:title' content={seo.title} />}

			{seo.description && (
				<meta property='og:description' content={seo.description} />
			)}

			{seo.image && <meta property='og:image' content={seo.image} />}
			<meta property='keywords' content={keywords} />
		</Helmet>
	);
};

export default SEO;

SEO.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string,
	article: PropTypes.bool,
};

SEO.defaultProps = {
	title: null,
	description: null,
	image: null,
	article: false,
};

const query = graphql`
	query SEO {
		site {
			siteMetadata {
				defaultTitle: title
				defaultDescription: description
				siteUrl: url
				defaultImage: image
			}
		}
	}
`;

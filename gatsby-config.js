require("dotenv").config();

module.exports = {
	siteMetadata: {
		title: "logo albstadt",

		description: "logo albstadt - die logopädische Praxis in Albstadt",
		siteUrl: "https://www.logoalbstadt.de", // No trailing slash allowed!
		image: "/images/logoalbstadt.png", // Path to your image you placed in the 'static' folder
		author: "Vivian Bay",
	},
	plugins: [
		{
			resolve: "gatsby-plugin-gtag",
			options: {
				trackingId: process.env.GA_TRACKING_ID,
			},
		},
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-image",

		"gatsby-plugin-sharp",

		{
			resolve: "gatsby-transformer-sharp",
			options: {
				icon: `${__dirname}/src/images/gatsby-icon.png`,
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: `${__dirname}/src/images`,
			},
			__key: "images",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: `${__dirname}/src/pages`,
			},
			__key: "pages",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "fonts",
				path: `${__dirname}/src/fonts`,
			},
			__key: "fonts",
		},
		{
			resolve: "gatsby-plugin-web-font-loader",
			options: {
				custom: {
					families: [
						"modulusregular",
						"modulusbold",
						"polly_roundedlight",
						"polly_roundedregular",
						"Polly Rounded",
					],
					urls: [`${__dirname}/src/fonts/stylesheet.css`],
				},
			},
		},
		"gatsby-plugin-sass",
		"gatsby-plugin-sitemap",
	],
};

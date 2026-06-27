require("dotenv").config();

module.exports = {
	siteMetadata: {
		title: "logo albstadt | Vivian Bay - die logopädische Praxis in Albstadt",

		description:
			"logo albstadt | Vivian Bay - die logopädische Praxis in Albstadt",
		siteUrl: "https://www.logoalbstadt.de", // No trailing slash allowed!
		image: "/images/logoalbstadt.png", // Path to your image you placed in the 'static' folder
		author: "Vivian Bay",
	},
	plugins: [
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-image",


		{
			resolve: "gatsby-plugin-sharp",
			options: {
				toFormat: "WEBP",
			},
		},

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

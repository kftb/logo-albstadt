require("dotenv").config();

module.exports = {
	siteMetadata: {
		title: "logo albstadt | Vivian Bay - die logopädische Praxis in Albstadt",
		description:
			"logo albstadt | Vivian Bay - die logopädische Praxis in Albstadt",
		siteUrl: "https://www.logoalbstadt.de",
		image: "/images/logoalbstadt.png",
		author: "Vivian Bay",
	},
	plugins: [
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
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

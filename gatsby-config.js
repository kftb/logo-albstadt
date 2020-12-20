module.exports = {
	plugins: [
		{
			resolve: "gatsby-plugin-google-analytics",
			options: {
				trackingId: "G-GXLGZWRPWT",
			},
		},
		"gatsby-plugin-react-helmet",
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
	],
};

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
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./src/pages/",
			},
			__key: "pages",
		},
		"gatsby-plugin-sass",
	],
};

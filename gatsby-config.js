module.exports = {
  siteMetadata: {
    title: `Pagination Test`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: `dev-gatbsyjswp.pantheonsite.io`,
        protocol: "http",
        hostingWPCOM: false,
        verboseOutput: true,
      },
    }
  ],
}

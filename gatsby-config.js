module.exports = {
  siteMetadata: {
    title: `Brian Redmond - Fine Art Painter & Drawer`,
    description: `Brian is an Irish classical style oil painter and drawer. He follows traditional methods in oil paint, charcoal and graphite to create portrait, still life and landscape works.`,
    author: `Ian Huet`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/content/gallery`,
        ignore: [`about*`, `gallery*`],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/gallery`,
        name: `gallery`,
      },
    },
  ],
}

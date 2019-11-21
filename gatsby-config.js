module.exports = {
  siteMetadata: {
    title: `Thanksgiving`,
    description: `A Ponce Thanksgiving. 2019 Edition.`,
    author: `Ryan Ponce`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `A Ponce Thanksgiving`,
        short_name: `Thanksgiving`,
        start_url: `/`,
        background_color: `#381d12`,
        theme_color: `#381d12`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`
      }
    }
  ]
};

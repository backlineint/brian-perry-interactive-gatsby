/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `@backlineint/gatsby-theme-drupal-markdown-post`,
      options: {
        basePath: `/posts`, // Optional, defaults to `/`
      },
    },
    {
      resolve: `gatsby-source-drupal`, // Configure gatsby-source-drupal as needed
      options: {
        baseUrl: `http://brian-perry-interactive.lndo.site:8000/`,
      },
    }
  ],
}

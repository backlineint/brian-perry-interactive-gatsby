/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: "@backlineint/gatsby-theme-drupal-markdown-post",
      options: {
        baseUrl: "http://brian-perry-interactive.lndo.site:8000/",
        basePath: "/posts",
      },
    },
  ],
}

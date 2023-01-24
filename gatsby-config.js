/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.quedemy.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/src/blogs`
      },
      __key: `blogs`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `others`,
        path: `${__dirname}/src/others`
      },
      __key: `others`,
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-prismjs`,
          options: {
            inlineCodeMaker: null,
            aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false
          }
        }]
      }
    }
  ],
}

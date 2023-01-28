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
        name: `blog`,
        path: `${__dirname}/src/blogs`
      },
      __key: `blogs`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-images`,
        path: `${__dirname}/src/blog-images`
      },
      __key: `blog-images`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `other`,
        path: `${__dirname}/src/others`
      },
      __key: `others`,
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMaker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false
            },
          }
        ],
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`, // create nodes from image type for dynamic images [supported by image processing library `Sharp`]
    `gatsby-plugin-sharp`, // Expose Resize image, crop image and several other options of `Sharp`
    `gatsby-plugin-image`
    //👆 https://www.gatsbyjs.com/docs/how-to/images-and-media/preprocessing-external-images/
  ]
}

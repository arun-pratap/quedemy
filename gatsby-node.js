const { createFilePath, createRemoteFileNode } = require("gatsby-source-filesystem")
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions


  const { data, errors } = await graphql(`
    {
      allMdx(filter: { fields: { group: { eq: "blog"} } }, sort: { id: DESC}) {
        edges {
          node {
            id
            body
            frontmatter {
              slug
              title

            }
            parent {
              ... on File {
                absolutePath
              }
            }
          }
        }
      }
    }
  `)
  const blogTemplatePath = path.resolve(`./src/templates/blog.js`)

  const blogs = data.allMdx.edges
  blogs.forEach((blog, i) => {
    const prev = blogs[i - 1];
    const next = blogs[i + 1];
    createPage({
      path: `/blog/${blog.node.frontmatter.slug}`,
      // 👇 do not use component like this it may cause error i.e. not returning children for mdx body
      // component:blogTemplatePath
      // 👇Instead use this
      // 👇See Example >> https://www.gatsbyjs.com/docs/how-to/routing/mdx/#using-frontmatter-in-mdx:~:text=layout%2Dcomponent.js%3F-,__contentFilePath,-%3Dabsolute%2Dpath%2Dto
      component: `${blogTemplatePath}?__contentFilePath=${blog.node.parent.absolutePath}`,
      context: {
        id: blog.node.id,
        slug: blog.node.frontmatter.slug,
        group: "blog",
        prev: prev,
        next: next,
        pathPrefix: "/blog"
      },
    })
  })


  const { data: pData, errors: pErrors } = await graphql(
    `
    {
      allMdx(filter: { fields: { group: { eq: "blog" } } }) {
        totalCount
      }
    }
    `
  )

  const { totalCount } = pData.allMdx
  const blogFeedTemplatePath = path.resolve(`./src/pages/blog.js`)
  const pages = Math.ceil(totalCount / 10)

  Array.from({ length: pages }).forEach((pageN, i) => {
    createPage({
      path: `/blog/page-${i + 1}`,
      component: blogFeedTemplatePath,
      context: {
        skip: i * 10,
        currentPage: i + 1,
      }

    })
  })

}

exports.onCreateNode = ({
  node,
  getNode,
  actions,
  createNodeId,
  getCache,
  cache,
  store
}) => {
  // See Example >> https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/?=files#example
  const { createNode, createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    // if my posts have a slug in the frontmatter, it means I've specified what I want it to be. Otherwise I want to create one automatically

    // This is where we add our own custom fields to each node
    const assignedSlug = createFilePath({ node, getNode });

    // Add slug to fields
    createNodeField({
      node,
      name: "slug",
      value: node.frontmatter.slug ? `/${node.frontmatter.slug}/` : assignedSlug,
    });

    // Add group to fields
    createNodeField({
      node,
      name: "group",
      value: getNode(node.parent).sourceInstanceName,
    });

    

  }

  // 👇 https://www.gatsbyjs.com/docs/how-to/images-and-media/preprocessing-external-images/

  // For all MarkdownRemark nodes that have a featured image url, call createRemoteFileNode
};



// exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
//   if (getConfig().mode === 'production') {
//     actions.setWebpackConfig({
//       devtool: false
//     });
//   }
// };

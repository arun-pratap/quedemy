import React from "react";
import { Link, graphql, Script } from "gatsby";

import Pagination from "../components/Pagination";
import blogCoverDefault from "../images/pngs/blog-cover-default.png"
import { GatsbyImage } from "gatsby-plugin-image";

const Blog = (props) => {
  const { data, pageContext } = props
  return (<>
    <section className="container-fluid px-4">
      <div className="container px-2 py-5 justify-content-center section--container">
        <div className="row">
          <h1 className="display-3 mb-5 fw-bold text-start heading--dark">Latest Post</h1>
        </div>
        <div className="row g-4 pb-5">
          {data.allMdx && data.allMdx.edges.map((edge, i) => {
            return (
              <div key={i} className="col-12 col-md-6 col-xl-4">

                <div className="card pb-3 h-100 border-0 shadow-sm card--custom border--radius-30" >
                  <Link to={`/blog/${edge.node.frontmatter.slug}`}>
                    <GatsbyImage
                      className="card-img-top"
                      image={edge.node.frontmatter.coverImage.childImageSharp?.gatsbyImageData}
                      alt="blog-cover"
                      style={{
                        borderTopLeftRadius: "30px",
                        borderTopRightRadius: "30px"
                      }}
                    />
                    {/* <img src={blogCoverDefault} className="card-img-top" alt="..." style={{
                      borderTopLeftRadius: "30px",
                      borderTopRightRadius: "30px"
                    }} /> */}
                  </Link>
                  <div className="card-body px-4">
                    <Link to={`/blog/${edge.node.frontmatter.slug}`}>
                      <h3 className="mt-1 mb-2 heading--dark fw-bold" style={{
                        fontSize: "1.5rem"
                      }}>{edge.node.frontmatter.title}</h3>
                    </Link>
                    <Link to={`/blog/${edge.node.frontmatter.slug}`}>
                      <p style={{
                        fontSize: "1.125rem"
                      }} className="mb-2 text--dark">{edge.node.frontmatter.description}</p>
                    </Link>
                    <Link to={`/blog/${edge.node.frontmatter.slug}`}
                      className="d-inline-flex align-items-center btn btn-lg mt-2 px-4 fs-6 fw-bold border--radius-80"
                      style={{
                        paddingTop: "0.75rem",
                        paddingBottom: "0.90rem",
                        background: "#fcd24f17",
                        backgroundColor: "#a96fff17",
                        color: "#a96fff !important",
                        // textTransform: "uppercase",
                        // background:
                        //   "linear-gradient(330deg, hsl(263deg 78% 55%), hsl(336deg 80% 60%))",
                        // background:
                        //   "linear-gradient(330deg, hsl(263deg 78% 58%), hsl(152deg 80% 40%))",
                        fontWeight: "500",
                      }}
                    >
                      <p className="mb-0" style={{
                        fontSize: "1.125rem",
                        color: "#4f15ac",
                      }}>
                        Continue Reading &nbsp;
                      </p>
                      <i className="bi bi-chevron-right fs-6" style={{color:"#4f15ac"}}></i>
                    </Link>
                  </div>
                </div>

              </div>
            )
          })}
        </div>

        <Pagination currentPage={pageContext.currentPage} totalCount={data.allMdx.totalCount} pathPrefix="/blog/" />
      </div>
    </section>
  </>)
}

export const pageQuery = graphql`
  query blogPosts($skip: Int! = 0) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(filter: { fields: { group: { eq: "blog" } } }, sort: { id: DESC }, limit: 10, skip: $skip) {
      totalCount
      edges {
        node {
          id
          fields {
            group
            slug
          }
          frontmatter {
            title 
            slug
            description
            coverImage {
              childImageSharp {
                gatsbyImageData(formats: WEBP)
            } 
            }
          }
        }
      }
    }
  }
`;

export default Blog;
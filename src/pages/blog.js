import React from "react";
import { Link, graphql } from "gatsby";

import Pagination from "../components/Pagination";
import blogCoverDefault from "../images/pngs/blog-cover-default.png"

const Blog = (props) => {
  const { data, pageContext } = props
  console.log(props)
  return (<>
    <section className="container-fluid px-4">
      <div className="container px-2 py-5 justify-content-center section--container">
        <div className="row">
          <h1 className="display-3 mb-5 fw-bold text-start heading--dark">Latest Post</h1>
        </div>

        <div className="row g-4 pb-5">
          {data.allMdx && data.allMdx.edges.map((edge, i) => {
            console.log("slug", edge.node.frontmatter.slug, "fieldslug:", edge.node.fields.slug)
            return (
              <div key={i} className="col-12 col-md-6 col-xl-4">
                <Link to={`/blog/${edge.node.frontmatter.slug}`}>
                  <div className="card pb-3 h-100 border-0 shadow-sm card--custom border--radius-30" >
                    <img src={blogCoverDefault} className="card-img-top" alt="..." style={{
                      borderTopLeftRadius: "30px",
                      borderTopRightRadius: "30px"
                    }} />
                    <div className="card-body px-4">
                      <h5 className="fs-4 mt-1 mb-2 heading--dark fw-bold">{edge.node.frontmatter.title}</h5>
                      <p className="mb-2 fs-6 text--dark">{edge.node.excerpt}</p>
                      <Link to={`/blog/${edge.node.frontmatter.slug}`}
                        className="d-inline-flex align-items-center btn btn-lg mt-2 px-4 fs-6 fw-bold rounded-3"
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
                        <p className="mb-0 fs-6 text--accent" style={{
                          color: "#a96fff !important",
                        }}>
                          Continue Reading &nbsp;
                        </p>
                        <i className="bi bi-chevron-right fs-6 text--accent"></i>
                      </Link>
                    </div>
                  </div>
                </Link>
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
          excerpt
          fields {
            group
            slug
          }
          frontmatter {
            title 
            slug
        
          }
        }
      }
    }
  }
`;

export default Blog;
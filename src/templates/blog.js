import { Link, graphql } from "gatsby"
import React from "react"
import profileArun from "../images/pngs/profile-arun.png"
import SocialLInks from "../components/SocialmediaLinks"
import { BlogMetaTags } from "../components/MetaTags"
import { GatsbyImage } from "gatsby-plugin-image"

const BlogTemplate = (props) => {
    const { data: { mdx: blog }, location: { pathname }, pageContext, children } = props

    return (<>
        <BlogMetaTags blog={blog} path={pathname} />
        {/* Home / Blogs  */}
        {/**
         * CoverImage
         * Title
         * AuthorImage AuthorName - Date - ReadTime 
         * 
         * Summary
         * Content
         * WrapUP
         * 
         * Share link

        */}
        {/**
 * css
 * blogTitle:fs1.875rem, lh2.25rem, fw800, px1rem, my1.25rem,color#0f172a
 * para #111111, fs1.125rem, lh 1.7777778 
*/}
        <section className="container blog px-4 py-5">

            <div className=" pb-3">
                {blog.frontmatter.coverImage && (

                    <GatsbyImage
                        className="img-fluid"
                        image={blog.frontmatter.coverImage.childImageSharp?.gatsbyImageData}
                        alt="blog-cover"
                    />
                )}

            </div>
            <h1 className="blog-title">{blog.frontmatter.title}</h1>
            <div className="d-inline-flex align-items-center post-metadata">
                <div>
                    <a href={SocialLInks.linkedinProfile} data-bs-toggle="tooltip" title="click to know more about Arun Pratap Singh">
                        <img src={profileArun} alt="arun-pratap-singh" width="75" />
                    </a>
                </div>
                <div>
                    <a href={SocialLInks.linkedinProfile} data-bs-toggle="tooltip" title="click to know more about Arun Pratap Singh" style={{ fontWeight: "600" }}>
                        {blog.frontmatter.author}
                    </a>
                    <div className="mb-0">
                        <time className="text-muted" style={{ fontSize: ".775em", fontWeight: "600" }}>01 Jan, 2023</time>
                        &nbsp;·&nbsp;
                        <span className="text-muted" style={{ fontSize: ".775em", fontWeight: "600" }}>9 min read</span>
                    </div>
                </div>
            </div>
            <hr style={{ margin: 0, marginTop: "1.4rem" }} />
            <main className="mb-5">
                {children}
            </main>
            {/* prev nxt from wesbos */}
            <div className="row g-3 justify-content-between">
                <div className="col-12 col-sm-5 col-md-6 text-start">
                    {
                        pageContext.prev && (

                            <Link className="btn border py-3" to={`${pageContext.pathPrefix}/${pageContext.prev.node.frontmatter.slug}`}
                                style={{
                                    color: "#4f15ac",
                                }}>
                                <small className="text-muted">Previous</small><br />
                                ← <span className="fw-bold">{pageContext.prev && pageContext.prev.node.frontmatter.title}</span>
                            </Link>
                        )
                    }
                </div>
                <div className="col-12 col-sm-5 col-md-6 text-end">
                    {
                        pageContext.next && (

                            <Link className="btn border py-3" to={`${pageContext.pathPrefix}/${pageContext.next.node.frontmatter.slug}`}
                                style={{
                                    color: "#4f15ac",
                                }}>
                                <small className="text-muted">Next</small><br />
                                <span className="fw-bold">{pageContext.next && pageContext.next.node.frontmatter.title} </span>→
                            </Link>
                        )
                    }
                </div>
            </div>
            {/* Share Article widget (linkedin, twitter, whatsapp, fb) */}


        </section>
        {/* authors bio section (simform, kent c dodds) optional */}
        {/* Newsletter signup section (simform) */}
        {/* Related Blogs section (simform) */}
    </>)
}

// parameter started with $ must be in context of gatsby-node (pageContext)
export const blogQuery = graphql`
query($id: String!) {
    mdx( id: { eq: $id } ) {
      id
      frontmatter {
        title
        slug
        author
        canonicalURL
        coverImage {
            childImageSharp {
                gatsbyImageData(formats: WEBP)
            }
        }
      }
      fields {
        group
        slug
      }
      body
    
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default BlogTemplate
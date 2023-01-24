import { graphql } from "gatsby"
import React from "react"
import Header from "../components/Header"
import blogCoverDefault from "../images/pngs/blog-cover-default.png"
import profileArun from "../images/pngs/profile-arun.png"
const Blog = ({ data, children }) => {


    return (<>
        <Header />
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
        <div className="container blog px-4">

            <div className="pt-5">
                <img className="img-fluid" src={blogCoverDefault} alt="blog-cover-default" />
            </div>
            <h1 className="blog-title">{data.mdx.frontmatter.title}</h1>
            <div className="d-inline-flex align-items-center post-metadata">
                <div>
                    <a href="#" className="text-dark">
                        <img src={profileArun} alt="arun-pratap-singh" width="80" />
                    </a>
                </div>
                <div>
                    <a href="#" className="text-dark">
                        Arun Pratap Singh
                    </a>
                    <p className="mb-0">
                        <time className="small text-muted">01 Jan, 2023</time>
                        &nbsp;·&nbsp;
                        <span className="small text-muted">9 min read</span>
                    </p>
                </div>
            </div>
            <hr style={{ margin: 0, marginTop: "1rem" }} />
            {children}
        </div>
    </>)
}

export const blogQuery = graphql`
  query($id: String){
    mdx(id: {eq: $id}) {
      frontmatter {
        title
      }
      body
    }
  }
`
export default Blog
import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import { Helmet } from 'react-helmet';

export function BlogMetaTags({ blog, path }) {
    const { frontmatter: { title, description, canonicalURL, coverImage } } = blog
    const baseURL = "https://www.quedemy.com"

    const canonical = `https://www.quedemy.com${path}`;
    const url = `${baseURL}${path}`
    const image = getImage(coverImage)

    return (
        <Helmet>
            {/* <meta name="generator" content="By Arun built with Gatsby!" /> */}

            <title>{`${title} - Quedemy Blog`}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalURL} />

            {/* <meta name="author" content="Arun Pratap Singh" />
            <meta name="category" content="Node Js"/> */}
            {/* favicon icon */}
            {/* <link rel="icon" href="/topics/favicon.ico" /> */}

            {/* open-graph */}
            {blog.frontmatter.date ? <meta property="article:published_time" content={new Date(blog.frontmatter.date).toISOString()} /> : null}
            <meta property="og:site_name" content="Quedemy Blog" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={`${title} - Quedemy Blog`} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={`${baseURL}${image.images.fallback.src}`} />
            <meta property="og:image:alt" content={blog.frontmatter.title}></meta>
            {/* <meta property="og:image:secure_url" content="" /> */}
            <meta property="og:image:width" content="1680" />
            <meta property="og:image:height" content="296" />

            {/* twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@QuedemyBlog" />
            <meta name="twitter:creator" content="@ArunPratapSingh" />
            <meta name="twitter:title" content={`${title} - Quedemy Blog`} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:image" content="" />

            {/* <meta property="og:locale" content="en_CA" /> */}

        </Helmet>
    );
}


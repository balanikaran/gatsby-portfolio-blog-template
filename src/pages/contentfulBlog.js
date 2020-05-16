import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"

import blogStyles from "./blog.module.scss"

const ContentfulBlogPage = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allContentfulBlogPost(
                    sort: { fields: publishedDate, order: DESC }
                ) {
                    edges {
                        node {
                            title
                            slug
                            publishedDate(formatString: "MMMM Do, YYYY")
                        }
                    }
                }
            }
        `
    )

    return (
        <Layout>
            <h1>Blog Page</h1>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map(({ node }) => {
                    return (
                        <li className={blogStyles.post}>
                            <Link to={`/contentfulBlog/${node.slug}`}>
                                <strong>{node.title}</strong>
                                <p>Posted on: {node.publishedDate}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default ContentfulBlogPage

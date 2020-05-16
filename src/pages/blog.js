import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"

const BlogPage = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allMarkdownRemark {
                    edges {
                        node {
                            frontmatter {
                                title
                                date
                            }
                            fields {
                                slug
                            }
                        }
                    }
                }
            }
        `
    )

    return (
        <Layout>
            <h1>Blog Page</h1>
            <ol>
                {data.allMarkdownRemark.edges.map(({ node }) => {
                    return (
                        <li>
                            <Link to={`/blog/${node.fields.slug}`}>
                                <strong>{node.frontmatter.title}</strong>
                                <p>Posted on: {node.frontmatter.date}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage

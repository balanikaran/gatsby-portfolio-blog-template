import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import HelmetHead from '../components/helmet'

import blogStyles from "./blog.module.scss"

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
            <HelmetHead title="BlogPage"></HelmetHead>
            <h1>Blog Page</h1>
            <ol className={blogStyles.posts}>
                {data.allMarkdownRemark.edges.map(({ node }) => {
                    return (
                        <li className={blogStyles.post}>
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

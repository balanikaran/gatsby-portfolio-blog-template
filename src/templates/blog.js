import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import HelmetHead from '../components/helmet'

export const blogQuery = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date
            }
            html
        }
    }
`

const Blog = props => {
    return (
        <Layout>
            <HelmetHead title={props.data.markdownRemark.frontmatter.title}></HelmetHead>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>
        </Layout>
    )
}

export default Blog

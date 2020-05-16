const path = require("path")

// Here we are dynammically creating slug
// and adding it to the node as a new field named as 'slug'
// NOTE: this is not required for contentful posts,
// bacause we have already predefined slugs
module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === "MarkdownRemark") {
        const slug = path.basename(node.fileAbsolutePath, ".md")
        // console.log("---------->>>>>>>", slug)
        createNodeField({
            node,
            name: "slug",
            value: slug,
        })
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    // 1. Get path to template
    const blogTemplate = path.resolve("./src/templates/blog.js")

    // 2. Get Markdown data
    const response = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    // 3. Create new pages
    response.data.allMarkdownRemark.edges.forEach(edge => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug,
            },
        })
    })

    // ---------------------------
    // Further this: All the code is for Contentful blog post fetch and creating pages
    // ---------------------------

    // 1. Same as above
    const contentfulBlogTemplate = path.resolve("./src/templates/contentfulBlog.js")

    // 2. Same as above
    const contentfulResponse = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    // 3. Same as above
    contentfulResponse.data.allContentfulBlogPost.edges.forEach(edge => {
        createPage({
            component: contentfulBlogTemplate,
            path: `/contentfulBlog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })

}

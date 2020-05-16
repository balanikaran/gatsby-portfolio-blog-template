const path = require("path")

// Here we are dynammically creating slug
// and adding it to the node as a new field named as 'slug'
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
}

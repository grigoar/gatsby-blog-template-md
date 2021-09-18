const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const postTemplate = path.resolve("src/templates/blog-post")

  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      node,
      name: "slug",
      value: slug
    })
  }
}

module.exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve("./src/template/blog-post.js")

  const res = await graphql(`
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
  res.data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.fields.slug
    console.log(slug)
    console.log(edge)
    console.log(blogTemplate)
    // createPage({
    //   component: blogTemplate,
    //   path: `/blog/${edge.node.fields.slug}`,
    //   context: {
    //     slug: edge.node.fields.slug
    //   }
    // })
    createPage({
      path: `/blog/${slug}`,
      component: blogTemplate,
      context: { slug: slug }
    })
  })
}

// module.exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   const blogTemplate = path.resolve("./src/template/blog.js")
//   const res = await graphql(`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)
//   res.data.allMarkdownRemark.edges.forEach(edge => {
//     createPage({
//       component: blogTemplate,
//       path: `/blog/${edge.node.fields.slug}`,
//       context: {
//         slug: edge.node.fields.slug
//       }
//     })
//   })
// }

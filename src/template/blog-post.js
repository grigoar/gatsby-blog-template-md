import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        keywords
      }
      html
    }
  }
`

const BlogTemplate = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Head
        title={post.frontmatter.title}
        keywords={post.frontmatter.keywords}
      />
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
    </Layout>
  )
}

export default BlogTemplate

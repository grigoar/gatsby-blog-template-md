import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
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
  `)
  // console.log(data)
  return (
    <div>
      <Layout>
        <div>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <div key={edge.node.fields.slug}>
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  <h1>{edge.node.frontmatter.title}</h1>
                  <p>{edge.node.frontmatter.date}</p>
                </Link>
              </div>
            )
          })}
        </div>
      </Layout>
    </div>
  )
}

export default BlogPage

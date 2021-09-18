import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  console.log(data)
  return (
    <Helmet>
      <title>{`${props.title} | ${data.site.siteMetadata.title}`}</title>
      <meta name="kewords" content={props.keywords}></meta>
    </Helmet>
  )
}

export default Head

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

export const pageQuery = graphql`
  query markdown($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`
export default function MarkdownPost({ data }) {
  const breakpoints = useBreakpoint();

  const html = data.markdownRemark.html
  const { title } = data.markdownRemark.frontmatter
  return (
    <Layout>
        {breakpoints.mobile ? 
            <div>
              <h1 className="mobile-title">{title}</h1>
              <div className="mobile-content" dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        : null}

        {breakpoints.pc ? 
            <div>
              <h1 className="pc-title">{title}</h1>
              <div className="pc-content" dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        : null}

    </Layout>
  )
}